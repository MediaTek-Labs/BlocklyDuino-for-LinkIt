'user strict'

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#button_upload')
      .addEventListener('click', handleUploadButton);
  document.querySelector('#button_launch_ide')
      .addEventListener('click', openArduinoIDE);
  document.querySelector('#button_launch_serial')
      .addEventListener('click', openSerialMonitor);

});

var nwGui = require('nw.gui'), nwShell = nwGui.Shell,
    child_process = require('child_process'), exec = child_process.exec,
    execSync = child_process.execSync, execFile = child_process.execFile,
    execFileSync = child_process.execFileSync, spawn = child_process.spawn;
var iconv = require('iconv-lite');
// var fs = require('fs');
var fs = require('fs-extra');
var path = require('path');

var availPorts = [], nextAvailPorts = [];
var selectedPort = null;
var cmd_encoding = 'Big5';
var process;

var tmpInoDir = 'sketches/tmp/';
var tmpInoFilename = 'tmp.ino';
var tmpBuildDir = 'build/tmp/';

function closeSerialMonitor() {
  return new Promise(function(resolve, reject) {
    process = exec('taskkill /F /IM putty.exe', {encoding: 'buffer'});
    // wait for taskkill to terminate
    process.on('exit', resolve);
  });
}

function handleUploadButton() {
  closeSerialMonitor().then(function() {
    fs.ensureDirSync(tmpBuildDir);
    writeInoFile(tmpInoDir, tmpInoFilename);
    startUploading(tmpInoDir + tmpInoFilename);
  });
}

function openArduinoIDE() {
  // check if user has saved the INO file
  if (!fileEntry) {
    Materialize.toast(
        Blockly.Msg.SAVE_FIRST, 4000)  // 4000 is the duration of the toast
    return
  }

  // Open the INO file with Arduino.exe
  closeSerialMonitor().then(function() {
    // the "fileEntry" is actually a directly entry.
    // so we search the INO file name within the directory entry first
    var filename = document.getElementById('info_title').innerHTML;
    var dirname = filename.split('.')[0]
    var searchname = filename
    if(Entryflg==2){
      searchname = dirname + '/' + filename
    }
    fileEntry.getFile(searchname, {create: false}, function(inoEntry) {
      // The inoEntry is a chrome-specific file path
      // we need to convert it to the "display path",
      // which is UNC Path under Windows,
      // before passing the path to Arduino.exe
      chrome.fileSystem.getDisplayPath(inoEntry, function(inoPath) {
        console.log('arduino.exe ' + inoPath);
        let command = '"arduino-1.8.5\\arduino.exe"'
        let parameter = inoPath;
        var process = exec(command + ' ' + parameter, {encoding: 'buffer'});
      });
    }, errorHandler);
  });
}

function openSerialMonitor() {
  closeSerialMonitor().then(function() {
    var process =
        execFile('putty.exe',  
          ['-serial', selectedPort]
          , {encoding: 'buffer'});
    console.log(process);
  });
}

function outputUploaderMsg(message, className = null) {
  let el_output = document.getElementById('terminal-body');
  let node = document.createElement('DIV');
  if (className) {
    node.classList.add(className);
  }
  let textnode = document.createTextNode(message);
  node.appendChild(textnode);
  el_output.appendChild(node);
  el_output.scrollTop = el_output.scrollHeight;
}

function clearUploaderMsg() {
  $('#terminal-body').empty();
}

// by default, convert 'Big5' to 'utf8'
function decode(buf, encoding = cmd_encoding) {
  return iconv.decode(buf, encoding);
}

function startUploading(inoPath) {
  uiStartUploading();
  clearUploaderMsg()

  let board = document.getElementById('board-selector').value;
  let port = selectedPort;

  outputUploaderMsg('Launching Arduino.exe...', 'msg-warning');
  // TODO:
  // we use arduino_debug.exe because 
  // it wait until arduino_builder to complete. 
  // The non-debug version terminates immediately.
  //
  // Also we need to turn off the verbose-build mode,
  // because arduino_debug.exe will "exit" early
  // when there are excessive stdout messages printed.
  // This seems to be a bug in the node.js childprocess module.
  // The child process (arduino_debug.exe) is actually
  // alive and well, but node.js sends an "exit" event
  // and stops piping stdout / stderr messages.
  process = execFile(
    'arduino-1.8.5\\arduino_debug.exe', 
    [
      '--upload', inoPath,
      '--board', board,
      '--port', port,
      '--pref', 'build.path=' + tmpBuildDir,
      //'--verbose-build' --> verbose-build is disabled to keep arduino_debug.exe "alive".
    ], {encoding: 'buffer'});

  console.log("Arduino PID=", process.pid);
  
  process.stdout.on('data', function(data) {
    let msg = decode(data);  
    let re = /[\w+\.]+\.o|.+\.\.\.|Build\s.+all/;
    //let re = /.+\.\.\./;
    let matched = msg.match(re);
    console.log(msg);
    if(matched){
      console.log(matched[0])
      outputUploaderMsg(matched[0]);
    }
    
  });

  process.stderr.on('data', function(data) {
    let msg = decode(data);
    console.log(msg);
    outputUploaderMsg(msg, 'msg-warning');
  });

  process.on('exit', function(code, signal) {
    uiFinishUploading();
    console.log('!!!!onExit of Arduino.exe!!!!');
    outputUploaderMsg('Arduino.exe exited with ' + code + ' and ' + signal, 'msg-warning');
  });
}

function uiStartUploading() {
  clearInterval(detectTimer);

  $('#button_upload').hide();
  $('#uploading-spinner').addClass('active');
}

function uiFinishUploading() {
  $('#uploading-spinner').removeClass('active');
  $('#button_upload').show();
  detectTimer = setInterval(detectPort, 5000);
}

/* port detect */

function detectPort() {
  let command = 'mode';

  exec(command, {encoding: 'buffer'}, (error, stdout, stderr) => {
    let output = decode(stdout);
    nextAvailPorts = parsePorts(output);
    updateAvailPorts();
  })
}

function parsePorts(str) {
  return str.match(/COM\d+/g) || [];
}

function updateAvailPorts() {
  // check if availPorts equal to nextAvailPorts
  if (availPorts.length == nextAvailPorts.length &&
      availPorts.every((v, i) => v === nextAvailPorts[i])) {
    return;
  }
  console.log('Available ports is changed. Update port-selector...');
  console.log('nextAvailPorts:', nextAvailPorts);
  availPorts = nextAvailPorts;
  updatePortSelector(availPorts, selectedPort);
}

function selectUploadPort(port) {
  selectedPort = port;

  portLabel = document.querySelector('#port-selected-text')
  portLabel.textContent = selectedPort + ' ';
  portLabel.classList.toggle('blinking-text', false);

  // Save upload COM port setting to local storage
  chrome.storage.local.set({'COM': selectedPort}, function() {
    console.log('store COM port setting to ' + selectedPort);
  });

  console.log('change upload port to ' + selectedPort);
}

function updatePortSelector(availPorts, selectedPort) {
  let $dropdownPort = $('#dropdownPort');
  $dropdownPort.empty();

  if (availPorts.length) {
    availPorts.forEach(port => {
      // upload dropdown button's list
      let item_str = '<li><a href="#!" onclick="selectUploadPort(\'' + port + '\')">' + port + '</a>'
    item_str += '<li class="divider">'
      $dropdownPort.append($(item_str))
    });
  } else {
    // upload dropdown button's list
    let item_str = '<li><a href="#!">' + Blockly.Msg.DROPDOWN_SCANNING + '</a>';
    $dropdownPort.append($(item_str))
  }
}

detectPort();
detectTimer = setInterval(detectPort, 5000);

function writeInoFile(dir, filename) {
  fs.ensureDirSync(dir);
  let code = Blockly.Arduino.workspaceToCode();
  fs.writeFileSync(dir + filename, code);
}
