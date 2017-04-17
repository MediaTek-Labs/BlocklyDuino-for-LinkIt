var openButton, saveButton;
var fileEntry;
var Entryflg;
var hasWriteAccess;
var timer1;

function errorHandler(e) {
  var msg = "";

  switch (e.code) {
  case FileError.QUOTA_EXCEEDED_ERR:
    msg = "QUOTA_EXCEEDED_ERR";
    break;
  case FileError.NOT_FOUND_ERR:
    msg = "NOT_FOUND_ERR";
    break;
  case FileError.SECURITY_ERR:
    msg = "SECURITY_ERR";
    break;
  case FileError.INVALID_MODIFICATION_ERR:
    msg = "INVALID_MODIFICATION_ERR";
    break;
  case FileError.INVALID_STATE_ERR:
    msg = "INVALID_STATE_ERR";
    break;
  default:
    msg = "Unknown Error";
    break;
  };

  console.log("Error: " + msg);
}

function handleDocumentChange(title) {
  if (title) {
    title = title.match(/[^/]+$/)[0];
    document.getElementById("info_title").innerHTML = title;
    document.title = title;
  } else {
    document.getElementById("info_title").innerHTML = Blockly.Msg.INFO_TITLE;
  }
}

function newFile() {
  fileEntry = null;
  hasWriteAccess = false;
  Entryflg = 0;
  handleDocumentChange(null);
}

function setFile(theFileEntry, isWritable) {
  fileEntry = theFileEntry;
  hasWriteAccess = isWritable;
}

function readFileIntoEditor(theFileEntry) {
  var filepath = "";

  //File list in directory
  var reader = theFileEntry.createReader();
  reader.readEntries(function (entries) {
    for (var i = 0; i < entries.length; ++i) {
      if (entries[i].name.indexOf('.xml') != -1) {
        Entryflg = 1;
        setFile(theFileEntry, true);
        handleDocumentChange(entries[i].name.split('.')[0] + '.ino');
        filepath = entries[i].fullPath;
        writeXmlContent(theFileEntry, filepath);
      }
      if(i == entries.length-1 & filepath == ""){
        Materialize.toast(Blockly.Msg.DIALOG3_TITLE, 4000) // 4000 is the duration of the toast
        newFile();
      }
    }
  }, errorHandler);
}

function writeXmlContent(theFileEntry, filepath) {
  Blockly.mainWorkspace.clear();

  //open xml file and write xml_textarea
  theFileEntry.getFile(filepath, {}, function (fileEntry) {
    fileEntry.file(function (file) {
      var reader = new FileReader();
      reader.onloadend = function (e) {
        var xmlDoc = Blockly.Xml.textToDom(this.result);
        Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDoc);
        //xmlTextarea.value = this.result;
      };
      reader.readAsText(file);
    }, errorHandler);
  }, errorHandler);
}

function writeEditorToFile(theFileEntry, filename, blob) {

  theFileEntry.getFile(filename, {
    create: true
  }, function (entry) {
    entry.createWriter(function (writer) {
      writer.onerror = function (e) {
        console.log("Write failed: " + e.toString());
      }
      writer.truncate(blob.size);
      writer.onwriteend = function () {
        writer.onwriteend = function (e) {
          if(filename.indexOf(".xml") != -1){
            Materialize.toast(Blockly.Msg.POPUP_SAVE_DONE, 4000) // 4000 is the duration of the toast
          }
        };
        writer.write(blob);
      }
    }, errorHandler);
  });
}

var onChosenFileToOpen = function (theFileEntry) {
  setFile(theFileEntry, false);
  readFileIntoEditor(theFileEntry);
};

var onWritableFileToOpen = function (theFileEntry) {
  readFileIntoEditor(theFileEntry);
};

var onChosenFileToSave = function (theFileEntry) {
  setFile(theFileEntry, true);
  writeEditorToFile(theFileEntry);
};

function handleOpenButton() {
  chrome.fileSystem.chooseEntry({
    type: 'openDirectory'
  }, onWritableFileToOpen);
}

function handleSaveButton() {
  var filename;
  var blob;
  if (fileEntry && hasWriteAccess) {
    if (Entryflg == 1) {
      filename = fileEntry.name + '.ino';
      blob = new Blob([Blockly.Arduino.workspaceToCode()]);
      writeEditorToFile(fileEntry, filename, blob);

      filename = fileEntry.name + '.xml';
      var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
      var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
      blob = new Blob([xmlText]);
      writeEditorToFile(fileEntry, filename, blob);
    } else {
      filename = document.getElementById("info_title").innerHTML
      saveFiles(filename.split('.')[0]);
    }
  } else {
    chrome.fileSystem.chooseEntry({
      type: 'openDirectory'
    }, function (entry) {
      if(entry){
        fileEntry = entry;
        $('#modal2').openModal();
      }
    });
  }
}

function set_variable(){
  var input = document.getElementById('dialog_var_name');
  var newVar = input.value;
  if (newVar) {
    newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
    if (newVar == Blockly.Msg.RENAME_VARIABLE ||
        newVar == Blockly.Msg.NEW_VARIABLE) {
      // Ok, not ALL names are legal...
    }
    else{
      Blockly.Variables.renameVariable(Blockly.Msg.Valiable_text, newVar, Blockly.FieldVariable_workspace);
    }
  }
}

function saveFiles(filename) {
  var blob;
  console.log("savefiles");
  setFile(fileEntry,true);
  Entryflg = 2;
  chrome.fileSystem.getWritableEntry(fileEntry, function (entry) {
    entry.getDirectory(filename, {
      create: true
    }, function (dirEntry) {
      var ino_filename = filename + '.ino';
      blob = new Blob([Blockly.Arduino.workspaceToCode()]);
      writeEditorToFile(dirEntry, ino_filename, blob);
      handleDocumentChange(ino_filename);

      var xml_filename = filename + '.xml';
      var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
      var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
      blob = new Blob([xmlText]);
      writeEditorToFile(dirEntry, xml_filename, blob);
    }, errorHandler);
  });
}
