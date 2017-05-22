"user strict"

document.addEventListener('DOMContentLoaded', function() {

  var blocks = document.getElementById('tab_blocks');
  // onClick's logic below:
  blocks.addEventListener('click', function() {
    tabClick('blocks');
  });

  var arduino = document.getElementById('tab_arduino');
  // onClick's logic below:
  arduino.addEventListener('click', function() {
    tabClick('arduino');
  });

  document.querySelector('#open-setting').addEventListener("click", function(evt) {
    var keys = ['autosave', 'interval'];
    // localStorageから読込
    chrome.storage.local.get(keys, function(item) {
      if (!item.autosave) {
        $("#checkbox-auto-save").prop('checked', false);
      } else {
        if (item.autosave == 'on') $("#checkbox-auto-save").prop('checked', true);
        else $("#checkbox-auto-save").prop('checked', false);
      }
      if (!item.interval) {
        $("#save-time").val("1");
      } else {
        $("#save-time").val(item.interval);
      }
    });
    $('#modal3').openModal();
  });

  document.querySelector('#setting').addEventListener("click", function(evt) {
    var checkbox = $('.filled-in:checked').map(function() {
      return $(this).val();
    }).get();
    var str = checkbox.join(',');

    var val = $('[class="with-gap"]:checked').map(function() {
      //$(this)でjQueryオブジェクトが取得できる。val()で値をvalue値を取得。
      return $(this).val();
    }).get();
    var autosave = 'off';
    var interval = $("#save-time").val();
    if ($("#checkbox-auto-save:checked").val() == 'on') {
      autosave = 'on';
      chrome.alarms.create("myAlarm", {
        periodInMinutes: Number(interval)
      });
    } else {
      chrome.alarms.clear("myAlarm");
    }
    // localStorageから読込
    var new_item = {
      'lang': val[0],
      'autosave': autosave,
      'interval': interval,
      'toolboxids': str
    };
    // localStorageへ保存
    chrome.storage.local.set(new_item, function() {
      console.log('item saved.');
    });
    chrome.runtime.reload();
  });

  document.querySelector('#setting-cancel').addEventListener("click", function(evt) {
    $('#modal3').closeModel();
  });

  document.querySelector('#button_new').addEventListener("click", function(evt) {
    var count = Blockly.mainWorkspace.getAllBlocks().length;
    if (count > 0 || Entryflg != 0) {
      $('#modal1').openModal();
    }
  });

  // document.querySelector('#dialog0_ok').addEventListener("click", function(evt) {
  //   newFile();
  // });

  document.querySelector('#dialog1_yes').addEventListener("click", function(evt) {
    Blockly.mainWorkspace.clear();
    renderContent();
    newFile();
  });

  document.querySelector('#dialog2_ok').addEventListener("click", function() {
    var input = document.getElementById('dialog2_filename');
    var filename = input.value;
    if (false === input.checkValidity()) {
      input.value = "";
      setFile(null, false);
      Materialize.toast(Blockly.Msg.ERROR_FILENAME2, 4000) // 4000 is the duration of the toast
      return;
    }
    if (filename.length > 0) {
      saveFiles(filename);
    } else {
      setFile(null, false);
      Materialize.toast(Blockly.Msg.ERROR_FILENAME, 4000) // 4000 is the duration of the toast
    }
  });

  document.querySelector('#dialog2_cancel').addEventListener("click", function(evt) {
    setFile(null, false);
    console.log("dialog2_cansel");
  });

  // document.querySelector('#button_discard').addEventListener("click", function(evt) {
  //   var count = Blockly.mainWorkspace.getAllBlocks().length;
  //   if (count > 0) {
  //     $('#modal4').openModal();
  //   }
  // });

  document.querySelector('#dialog4_yes').addEventListener("click", function(evt) {
     chrome.runtime.reload(); //Reset for defaul.
    //Blockly.mainWorkspace.clear();
    //renderContent();
  });

  document.querySelector('#dialog_var_ok').addEventListener("click", function(evt) {
    set_variable();
  });

  document.querySelector('#button_import').addEventListener("click", function(evt) {
    $('#modal_import').openModal();
  });

  document.querySelector('#dialog_import_ok').addEventListener("click", function(evt) {
    import_xml();
  });

  document.querySelector('#button_export').addEventListener("click", function(evt) {
    export_xml();
  });

  document.querySelector('#button_open').addEventListener("click", handleOpenButton);
  document.querySelector('#button_save').addEventListener("click", handleSaveButton);
  document.querySelector('#button_save_as').addEventListener("click", function(evt) {
    setFile(null, false);
    handleSaveButton();
  });
  newFile();
});
