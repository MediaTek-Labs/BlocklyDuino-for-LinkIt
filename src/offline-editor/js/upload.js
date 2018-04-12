"user strict"

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#button_upload').addEventListener("click", handleUploadButton);
});

var nwGui = require('nw.gui')
, nwShell = nwGui.Shell
, child_process = require('child_process')
, exec = child_process.exec
, execSync = child_process.execSync
, execFile = child_process.execFile
, execFileSync = child_process.execFileSync
, spawn = child_process.spawn
;
var iconv = require('iconv-lite');
// var fs = require('fs');
var fs = require('fs-extra');

var availPorts = [], nextAvailPorts = [];
var selectedPort = null;
var cmd_encoding = 'Big5';
var process;

var tmpInoDir = 'sketches/tmp/';
var tmpInoFilename ='tmp.ino';

function handleUploadButton() {
  writeInoFile(tmpInoDir, tmpInoFilename);
  startUploading(tmpInoDir + tmpInoFilename);
}

function openArduinoIDE() {
  let command = '"arduino-1.8.5\\arduino.exe"';
  exec(command, function(error, stdout, stderr){
    console.log(command + " result: ");
    console.log(error);
    console.log(stdout);
    console.log(stderr);
  });
}

function outputUploaderMsg(message, className=null) {
  let el_output = document.getElementById("terminal-body");
  let node = document.createElement("DIV");
  if (className) {node.classList.add(className);}
  let textnode = document.createTextNode(message);
  node.appendChild(textnode);
  el_output.appendChild(node);
  el_output.scrollTop = el_output.scrollHeight;
}

function clearUploaderMsg() {
  $("#terminal-body").empty();
}

function generateCommand(inoPath, board, port, isVerbose=true) {
  let command = "arduino-1.8.5\\arduino_debug.exe";
  command += " --upload " + inoPath;
  if (board) { command += " --board " + board; }
  if (port) { command += " --port " + port; }
  if (isVerbose) { command += " --verbose-build"; }
  return command;
}

// by default, convert 'Big5' to 'utf8'
function decode(buf, encoding=cmd_encoding) {
  return iconv.decode(buf, encoding);
}

function startUploading(inoPath) {
  uiStartUploading();
  clearUploaderMsg()

  let board = document.getElementById("board-selector").value;
  let port = document.getElementById("port-selector").value;
  let command = generateCommand(inoPath, board, port, true);

  outputUploaderMsg(command);

  process = exec(command, {encoding: 'buffer'});
  console.log(process);

  process.stdout.on('data', function(data) {
    let msg = decode(data);
    console.log(msg);
    outputUploaderMsg(msg);
  });

  process.stderr.on('data', function(data) {
    let msg = decode(data);
    console.log(msg);
    outputUploaderMsg(msg, "msg-warning");
  });

  process.on('exit', function(data) {
    uiFinishUploading();
    console.log(data);
    // // the returned code may not reflect the success/failure of uploading
    // // so we just don't show it.
    // if (data == 0) {
    //   outputUploaderMsg("Upload Completed!", "msg-success");
    // } else {
    //   outputUploaderMsg("Upload Failed", "msg-error");
    // }
  });
}

function uiStartUploading() {
  $("#button_upload").hide();
  $("#uploading-spinner").addClass("active");
}

function uiFinishUploading() {
  $("#uploading-spinner").removeClass("active");
  $("#button_upload").show();
}

/* port detect */

function detectPort() {
  let command = 'mode';

  exec(command, {encoding: 'buffer'}, (error, stdout, stderr) => {
    let output = decode(stdout);
    nextAvailPorts = parsePorts(output);
    console.log('nextAvailPorts:', nextAvailPorts);
    updateAvailPorts();
    // outputUploaderMsg('Available Ports: ' + nextAvailPorts);
  })
}

function parsePorts(str) {
  return str.match(/COM\d+/g) || [];
}

function updateAvailPorts() {
  // check if availPorts equal to nextAvailPorts
  if (availPorts.length == nextAvailPorts.length && availPorts.every((v,i)=> v === nextAvailPorts[i])) {
    console.log('Available ports is not changed.');
    return;
  }
  console.log('Available ports is changed. Update port-selector...');
  availPorts = nextAvailPorts;
  updatePortSelector(availPorts, selectedPort);
}

function updatePortSelector(availPorts, selectedPort) {
  let $port_selector = $('#port-selector');
  $port_selector.empty();
  availPorts.forEach(port => {
    let html_str = '<option value="' + port + '">' + port + '</option>'
    $port_selector.append($(html_str))
  });
  $port_selector.material_select();
}

detectPort();
setInterval(detectPort, 5000);

function writeInoFile(dir, filename) {
  fs.ensureDirSync(dir);
  let code = Blockly.Arduino.workspaceToCode();
  fs.writeFileSync(dir + filename, code);
}
