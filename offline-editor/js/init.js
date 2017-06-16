/**
 * List of tab names.
 * @private
 */

'use strict';

var TABS_ = ['blocks', 'arduino'];

var selected = 'blocks';

var chosenEntry = null;

var current_lang = "";

/**
 * Switch the visible pane when a tab is clicked.
 * @param {string} clickedName Name of tab clicked.
 */
function tabClick(clickedName) {
  // Deselect all tabs and hide all panes.
  for (var i = 0; i < TABS_.length; i++) {
    var name = TABS_[i];
    document.getElementById('tab_' + name).className = 'taboff';
    document.getElementById('content_' + name).style.visibility = 'hidden';
  }

  // Select the active tab.
  selected = clickedName;
  document.getElementById('tab_' + clickedName).className = 'tabon';
  // Show the selected pane.
  document.getElementById('content_' + clickedName).style.visibility = 'visible';
  renderContent();
  Blockly.fireUiEvent(window, 'resize');
}

/**
 * Populate the currently selected pane with content generated from the blocks.
 */
function renderContent() {
  var content = document.getElementById('content_' + selected);
  // Initialize the pane.
  if (content.id == 'content_blocks') {
    // If the workspace was changed by the XML tab, Firefox will have performed
    // an incomplete rendering due to Blockly being invisible.  Rerender.
    Blockly.mainWorkspace.render();
  } else if (content.id == 'content_arduino') {
    //content.innerHTML = Blockly.Arduino.workspaceToCode();
    var arduinoTextarea = document.getElementById('content_arduino');
    arduinoTextarea.value = Blockly.Arduino.workspaceToCode();
    arduinoTextarea.focus();
  }
}

/**
 * Compute the absolute coordinates and dimensions of an HTML element.
 * @param {!Element} element Element to match.
 * @return {!Object} Contains height, width, x, and y properties.
 * @private
 */
function getBBox_(element) {
  var height = element.offsetHeight;
  var width = element.offsetWidth;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  return {
    height: height,
    width: width,
    x: x,
    y: y
  };
}

/**
 * Initialize Blockly.  Called on page load.
 */
function buildBlocks(xmlValue) {
  //window.onbeforeunload = function() {
  //  return 'Leaving this page will result in the loss of your work.';
  //};
  var container = document.getElementById('content_area');
  var onresize = function (e) {
    var bBox = getBBox_(container);
    for (var i = 0; i < TABS_.length; i++) {
      var el = document.getElementById('content_' + TABS_[i]);
      el.style.top = bBox.y + 'px';
      el.style.left = bBox.x + 'px';
      // Height and width need to be set, read back, then set again to
      // compensate for scrollbars.
      el.style.height = bBox.height + 'px';
      el.style.height = (2 * bBox.height - el.offsetHeight) + 'px';
      el.style.width = bBox.width + 'px';
      el.style.width = (2 * bBox.width - el.offsetWidth) + 'px';
    }
    // Make the 'Blocks' tab line up with the toolbox.
    if (Blockly.mainWorkspace.toolbox_.width) {
      document.getElementById('tab_blocks').style.minWidth =
        (Blockly.mainWorkspace.toolbox_.width - 38) + 'px';
      // Account for the 19 pixel margin and on each side.
    }
  };
  window.addEventListener('resize', onresize, false);

  Blockly.inject(document.getElementById('content_blocks'),{
    grid:
    {spacing: 25,
     length: 3,
     colour: '#ccc',
     snap: true},
    //media: 'media/',
    media: filepath.media,
    toolbox: xmlValue});

  //auto_save_and_restore_blocks();
  setCheckbox();

  //load from url parameter (single param)
  //http://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
  var dest = unescape(location.search.replace(/^.*\=/, '')).replace(/\+/g, " ");
  if (dest) {
    //load_by_url(dest);
  }
}

function init() {
  var loadIds;
  var base = "category_logic,category_loops,category_array,category_math,category_text,category_variables,category_functions,category_sep,category_initializes,category_digital,category_analog,category_serial,category_others,category_time,category_serial,category_interrupts,category_servo,category_sep,category_linkit_wifi,category_linkit_mcs,category_linkit_ble,category_linkit_ble_ibeacon";

  try {
    var manifestData = chrome.runtime.getManifest();
    if (manifestData.version_name.indexOf('b', manifestData.version_name.length - 1) !== -1) {
        base += ",category_sep,category_external";
    }
  }
  catch(err) {

  }
  finally {

  }

  chrome.storage.local.get('toolboxids', function (value) {
    var option = value.toolboxids;
    // set the default toolbox if none
    if (option === undefined || option === "") {
      loadIds = base;
    }else{
      loadIds = base + ',' + option;
    }
    var xmlValue = '<xml id="toolbox">';
    var xmlids = loadIds.split(",");
    for (var i = 0; i < xmlids.length; i++) {
      if ($('#'+xmlids[i]).length) {
        xmlValue += $('#'+xmlids[i])[0].outerHTML;
      }
    }
    xmlValue += '</xml>';
    buildBlocks(xmlValue);
    tabClick('blocks');
  })
};

function setCheckbox(){
  var option;

  chrome.storage.local.get("toolboxids", function (value) {
    option = value.toolboxids;
    if (option === undefined || option === "") {
      return;
    }
    var options = option.split(",");
    for (var i = 0; i < options.length; i++) {
      $('#chbox_' + options[i]).prop("checked",true);
    }
  })
}

function setScript(param) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.id = 'msg';
  script.src = filepath["msg_"+param];
  var str = "#select-lang-"+ param;
  $(str).prop('checked', true);
  current_lang = param;

  var firstScript = document.getElementsByTagName('head')[0].appendChild(script);
  firstScript.parentNode.insertBefore(script, firstScript);
  script.onload = function (e) {
    setCharacter();
    init();
  }
}

function setCharacter(){
  setCategoryCharacter();

  try {
    var manifestData = chrome.runtime.getManifest();
    $("#version").on('click', function(){
        nw.Shell.openExternal(manifestData.update_url);
        return false;
    });
    $("#version").text(Blockly.Msg.SETTINGS_VERSION + manifestData.version);
  }
  catch(err) {
    $("#version").remove();
  }
  finally {

  }

  $("#tab_blocks").text(Blockly.Msg.BLOCKS);
  $("#tab_arduino").text(Blockly.Msg.ARDUINO);

  $("#go-to-web").attr("data-tooltip",Blockly.Msg.GO_TO_WEB);
  $("#go-to-sample").attr("data-tooltip",Blockly.Msg.GO_TO_SAMPLE);
  $("#open-setting").attr("data-tooltip",Blockly.Msg.SETTING);
  $("#dialog-lang-title").text(Blockly.Msg.DIALOG_LANG_TITLE);
  $("#dialog-block-title").text(Blockly.Msg.DIALOG_BLOCK_TITLE);

  $("#auto-save-title").text(Blockly.Msg.AUTO_SAVE_TITLE);
  $("#range-title").html(Blockly.Msg.RANGE_TITLE + '<input type="range" id="save-time" min="1" max="10" />');

  $("#setting-cancel").text(Blockly.Msg.SETTINGS_CANCEL);
  $("#setting").text(Blockly.Msg.SETTINGS_OK);

  $("#button_new").attr("data-tooltip",Blockly.Msg.BUTTON_NEW);
  $("#button_save").attr("data-tooltip",Blockly.Msg.BUTTON_SAVE);
  $("#button_open").attr("data-tooltip",Blockly.Msg.BUTTON_OPEN);
  //$("#button_discard").text(Blockly.Msg.DROPDOWN_DISCARD);
  $("#button_save_as").text(Blockly.Msg.DROPDOWN_SAVE_AS);
  $("#dialog0_title").text(Blockly.Msg.DIALOG0_TITLE);
  $("#dialog1_title").text(Blockly.Msg.DIALOG1_TITLE);
  $("#dialog1_yes").text(Blockly.Msg.DIALOG1_YES);
  $("#dialog1_no").text(Blockly.Msg.DIALOG1_NO);
  $("#dialog4_title").text(Blockly.Msg.DIALOG4_TITLE);
  $("#dialog4_yes").text(Blockly.Msg.DIALOG1_YES);
  $("#dialog4_no").text(Blockly.Msg.DIALOG1_NO);
  $("#info_filename").html(Blockly.Msg.INFO_FILENAME);
  $("#info_title").html(Blockly.Msg.INFO_TITLE);
  $("#dialog2_title").text(Blockly.Msg.DIALOG2_TITLE);

  $("#button_import").text(Blockly.Msg.BUTTON_IMPORT);
  $("#button_export").text(Blockly.Msg.BUTTON_EXPORT);
  $('#textarea_import_label').text(Blockly.Msg.TEXTAREA_IMPORT_LABEL);
  $('#textarea_export_label').text(Blockly.Msg.TEXTAREA_EXPORT_LABEL);
  $('#dialog_import_ok').text(Blockly.Msg.DIALOG_IMPORT_OK);
  $('#dialog_import_cancel').text(Blockly.Msg.DIALOG_IMPORT_CANCEL);
  $('#dialog_export_ok').text(Blockly.Msg.DIALOG_EXPORT_OK);
}

function export_xml(){
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var data = Blockly.Xml.domToText(xml);
  data = data.replace(/\r?\n/g,'');
  $('#textarea_export').val(data);
  $('#textarea_export').trigger('autoresize');
  $('#modal_export').openModal();
}

function import_xml(){
  var xml = $('#textarea_import').val();
  $('#textarea_import').val("");
  var xmlDoc = Blockly.Xml.textToDom(xml);
  // Blockly.mainWorkspace.clear();
  Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDoc);
}

window.onload = function () {
  var keys = [ 'lang' ];
  // localStorageから読込
  chrome.storage.local.get(keys, function(item){
    if(!item.lang){
      var item = {
        'lang': 'zh'
      };
      // localStorageへ保存
      chrome.storage.local.set(item, function(){
        console.log('item saved.');
      });
      setScript("zh");
    }else{
      setScript(item.lang);
    }
  });
};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.method == "url"){
      var xhr = new XMLHttpRequest();
      xhr.open("GET",request.url,true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          // WARNING! Might be evaluating an evil script!
          newFile();
          Blockly.mainWorkspace.clear();
          var xml = xhr.responseText;
          xml = xml.replace("<html><head/><body><xml>",'');
          xml = xml.replace("</body></html>",'');
          var xmlDoc = Blockly.Xml.textToDom(xml);
          Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDoc);
        }
      }
      xhr.send();
      sendResponse({farewell: "goodbye"});
    }else if(request.method == "autosave"){
      if(Entryflg != 0 && hasWriteAccess){
        handleSaveButton();
        //Materialize.toast(Blockly.Msg.POPUP_SAVE_DONE, 4000) // 4000 is the duration of the toast
      }
      sendResponse({farewell: "goodbye"});
    }
});
