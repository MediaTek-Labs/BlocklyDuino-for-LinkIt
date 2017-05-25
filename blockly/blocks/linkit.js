/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author hi@vox.vg (Zhi-Wei Cai)
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.linkit');

goog.require('Blockly.Blocks');

Blockly.Blocks.linkit.HUE = 35;

Blockly.Blocks.linkit.image = filepath.media+'/linkit_7697.png';

Blockly.Blocks['linkit_ble_periphral_get_value'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendValueInput("CHARACTERISTIC")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_GET_VALUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_GET_VALUE_TAIL);
    this.setInputsInline(true);
    this.setOutput(true,["Number","String"]);
    this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP);
  }
};

Blockly.Blocks['linkit_ble_periphral_write'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_WRITE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.VARIABLES_TYPE_NUMBER,"int"],
        [Blockly.Msg.VARIABLES_TYPE_STRING,"String"]
      ]), "TYPE");
    this.appendValueInput("CHARACTERISTIC")
      .setCheck("String")
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_IS_WRITTEN);
    this.appendValueInput("VALUE")
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_GET_VALUE_TAIL);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP);
  }
};

Blockly.Blocks['linkit_ble_periphral_is_written'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendValueInput("CHARACTERISTIC")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_IS_WRITTEN);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_IS_WRITTEN_TAIL);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP);
  }
};

Blockly.Blocks['linkit_ble_Characteristic'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC);
    this.appendValueInput("CHARACTERISTIC")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_SERVICE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC_TYPE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VARIABLES_TYPE_NUMBER, "LBLECharacteristicInt"], [Blockly.Msg.VARIABLES_TYPE_STRING, "LBLECharacteristicString"]]), 'CHARACTERISTIC_TYPE');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_LBLE_ATTRIBUTE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINKIT_SET_LBLE_READ_WRITE, "LBLE_READ | LBLE_WRITE"], [Blockly.Msg.LINKIT_SET_LBLE_READ, "LBLE_READ"], [Blockly.Msg.LINKIT_SET_LBLE_WRITE, "LBLE_WRITE"]]), 'TYPE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC_TOOLTIP);
  }
};

Blockly.Blocks['linkit_ble_eddy'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_EDDY);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HTTP,"http"],
        [Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HTTPS,"https"]
      ]), "TYPE");
    this.appendValueInput("URL")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_URL);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC_TOOLTIP);
  }
};
Blockly.Blocks['linkit_ble_periphral'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TITLE)
      //.appendField(new Blockly.FieldImage(Blockly.Blocks.linkit.image, 64, 43));
    this.appendValueInput("NAME")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_NAME);
    this.appendValueInput("SERVICE")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_SERVICE);
    this.appendStatementInput("BLE_CONTENT");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP);
  }
};

/*
Blockly.Blocks['linkit_ble_periphral'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TITLE)
      //.appendField(new Blockly.FieldImage(Blockly.Blocks.linkit.image, 64, 43));
    this.appendValueInput("NAME")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_NAME);
    this.appendValueInput("SERVICE")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_SERVICE);
    this.appendValueInput("CHARACTERISTIC")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_CHARACTERISTIC);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_LBLE_ATTRIBUTE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINKIT_SET_LBLE_READ, "LBLE_READ"], [Blockly.Msg.LINKIT_SET_LBLE_WRITE, "LBLE_WRITE"], [Blockly.Msg.LINKIT_SET_LBLE_READ_WRITE, "LBLE_READ | LBLE_WRITE"]]), 'TYPE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_TOOLTIP);
  }
};

*/

Blockly.Blocks['linkit_ble_central_get_peripheral_with_index'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.interpolateMsg(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_GET_PERIPHERAL_WITH_INDEX,
                        ['INDEX', 'Number', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TOOLTIP);
  }
};

Blockly.Blocks['linkit_ble_central_scan_count'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_COUNT);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TOOLTIP);
  }
};

Blockly.Blocks['linkit_ble_central_scan'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_CENTRAL_SCAN_TOOLTIP);
  }
};

Blockly.Blocks['linkit_ble_ibeacon'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_IBEACON_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_IBEACON_TITLE)
      .setAlign(Blockly.ALIGN_RIGHT);
      //.appendField(new Blockly.FieldImage(Blockly.Blocks.linkit.image, 64, 43));
    this.appendValueInput("UUID")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_IBEACON_UUID);
    this.appendValueInput("MAJOR")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_IBEACON_MAJOR);
    this.appendValueInput("MINOR")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_IBEACON_MINOR);
    this.appendValueInput("RSSI")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_IBEACON_RSSI);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_IBEACON_TOOLTIP);
  }
};

Blockly.Blocks['linkit_ble_wait_until_ready'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_BLE_UNTIL_READY_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_TOOLTIP);
  }
};

Blockly.Blocks['linkit_ble_get_address'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_BLE_GET_ADDRESS_TITLE);
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_TOOLTIP);
  }
};

Blockly.Blocks['linkit_ble_ready'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_BLE_READY_TITLE);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_TOOLTIP);
  }
};
Blockly.Blocks['mcs'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_MCS_WIFI)
    this.appendValueInput("DEVICEID")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_MCS_DEVICEID);
    this.appendValueInput("DEVICEKEY")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_MCS_DEVICEKEY);
    this.appendStatementInput("CONTENT");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
  }
};

Blockly.Blocks['mcs_set_control_channel'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_MCS_CHANNEL1_TITLE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.VARIABLES_TYPE_ONOFF,"boolean"],
        [Blockly.Msg.VARIABLES_TYPE_CATEGORY,"category"],
        [Blockly.Msg.VARIABLES_TYPE_NUMBER,"int"],
        [Blockly.Msg.VARIABLES_TYPE_FLOAT,"float"],
        [Blockly.Msg.VARIABLES_TYPE_STRING,"String"]
      ]), "TYPE")
      .appendField(Blockly.Msg.LINKIT_SET_MCS_CHANNEL1_TAIL);
    this.appendValueInput("CONTROL_CHANNEL")
      .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
  }
};
Blockly.Blocks['mcs_set_display_channel'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_MCS_CHANNEL1_TITLE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.VARIABLES_TYPE_ONOFF,"boolean"],
        [Blockly.Msg.VARIABLES_TYPE_CATEGORY,"category"],
        [Blockly.Msg.VARIABLES_TYPE_NUMBER,"int"],
        [Blockly.Msg.VARIABLES_TYPE_FLOAT,"float"],
        [Blockly.Msg.VARIABLES_TYPE_STRING,"String"]
      ]), "TYPE")
      .appendField(Blockly.Msg.LINKIT_SET_MCS_CHANNEL2_TAIL);
    this.appendValueInput("DISPLAY_CHANNEL")
      .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
  }
};
Blockly.Blocks['mcs_add_channel'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendValueInput("ADD_CHANNEL")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_ADD_MCS_CHANNEL_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
  }
};
Blockly.Blocks['mcs_connected'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_CHECK_MCS_CONNECTED_TITLE);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
  }
};
Blockly.Blocks['mcs_reconnect'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_CHECK_MCS_RECONNECT_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
  }
};
Blockly.Blocks['mcs_wait_until_connected'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_MCS_WAIT_UNTIL_CONNECTED_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
  }
};
Blockly.Blocks['mcs_channel_valid'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendValueInput("CHANNEL_VALID")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_CHECK_MCS_LED_VALID_TITLE);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
  }
};
Blockly.Blocks['mcs_channel_value'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendValueInput("CHANNEL_VALUE")
      .appendField(Blockly.Msg.LINKIT_CHECK_MCS_LED_VALUE_TITLE)
      .setCheck("String");
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_CHECK_MCS_LED_VALUE_TAIL);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
  }
};
Blockly.Blocks['mcs_channel2_value'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendValueInput("CHANNEL2_VALUE")
      .appendField(Blockly.Msg.LINKIT_CHECK_MCS_REMOTE_VALUE_TITLE)
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("String");
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_CHECK_MCS_REMOTE_VALUE_TAIL);
    this.appendValueInput("SET_VALUE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
  }
};
Blockly.Blocks['mcs_process'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_MCS_PROCESS_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
  }
};
Blockly.Blocks['mcs_channel_wait_until_read_value'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendValueInput("CHANNEL")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_MCS_LED_WAIT_UNTIL_READ_VALUE_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
  }
};
Blockly.Blocks['mcs_channel_updated'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCS_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendValueInput("CHANNEL_UPDATED")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CATEGORY_LINKIT_MCS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_MCS_LED_UPDATED);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
  }
};

//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------


Blockly.Blocks['mcslite'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCSLITE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_WIFI)
    this.appendValueInput("DEVICEIDL")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_DEVICEID);
    this.appendValueInput("DEVICEKEYL")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_DEVICEKEY);
    this.appendValueInput("SERV")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_SERV);
    this.appendValueInput("PORT")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_PORT);
    this.appendStatementInput("CONTENT");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCS_TOOLTIP);
  }
};
/*Blockly.Blocks['mcslite_set_control_channel'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCSLITE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_CHANNEL1_TITLE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.VARIABLES_TYPE_NUMBER,"(int)"],
        [Blockly.Msg.VARIABLES_TYPE_UNSIGNED_INT,"(unsigned int)"],
        [Blockly.Msg.VARIABLES_TYPE_BYTE,"(byte)"],
        [Blockly.Msg.VARIABLES_TYPE_WORD,"(word)"],
        [Blockly.Msg.VARIABLES_TYPE_LONG,"(long)"],
        [Blockly.Msg.VARIABLES_TYPE_UNSIGNED_LONG,"(unsigned long)"],
        [Blockly.Msg.VARIABLES_TYPE_FLOAT,"(float)"],
        [Blockly.Msg.VARIABLES_TYPE_DOUBLE,"(double)"],
        [Blockly.Msg.VARIABLES_TYPE_CHAR,"(char)"]
      ]), "TYPE")
      .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_CHANNEL1_TAIL);
    this.appendValueInput("CONTROL_CHANNEL")
      .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCSLITE_TOOLTIP);
  }
};
Blockly.Blocks['mcslite_set_display_channel'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCSLITE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_CHANNEL1_TITLE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.VARIABLES_TYPE_NUMBER,"(int)"],
        [Blockly.Msg.VARIABLES_TYPE_UNSIGNED_INT,"(unsigned int)"],
        [Blockly.Msg.VARIABLES_TYPE_BYTE,"(byte)"],
        [Blockly.Msg.VARIABLES_TYPE_WORD,"(word)"],
        [Blockly.Msg.VARIABLES_TYPE_LONG,"(long)"],
        [Blockly.Msg.VARIABLES_TYPE_UNSIGNED_LONG,"(unsigned long)"],
        [Blockly.Msg.VARIABLES_TYPE_FLOAT,"(float)"],
        [Blockly.Msg.VARIABLES_TYPE_DOUBLE,"(double)"],
        [Blockly.Msg.VARIABLES_TYPE_CHAR,"(char)"]
      ]), "TYPE")
      .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_CHANNEL2_TAIL);
    this.appendValueInput("DISPLAY_CHANNEL")
      .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCSLITE_TOOLTIP);
  }
};
Blockly.Blocks['mcslite_add_channel'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCSLITE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendValueInput("ADD_CHANNEL")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_ADD_MCSLITE_CHANNEL_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCSLITE_TOOLTIP);
  }
};
Blockly.Blocks['mcslite_connected'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCSLITE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_CHECK_MCSLITE_CONNECTED_TITLE);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCSLITE_TOOLTIP);
  }
};
Blockly.Blocks['mcslite_reconnect'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCSLITE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_CHECK_MCSLITE_RECONNECT_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCSLITE_TOOLTIP);
  }
};
Blockly.Blocks['mcslite_wait_until_connected'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCSLITE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_MCSLITE_WAIT_UNTIL_CONNECTED_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCSLITE_TOOLTIP);
  }
};
Blockly.Blocks['mcslite_channel_valid'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCSLITE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendValueInput("CHANNEL_VALID")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_CHECK_MCSLITE_LED_VALID_TITLE);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCSLITE_TOOLTIP);
  }
};
Blockly.Blocks['mcslite_channel_value'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCSLITE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_CHECK_MCSLITE_LED_VALUE_TITLE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.VARIABLES_TYPE_NUMBER,"(int)"],
        [Blockly.Msg.VARIABLES_TYPE_UNSIGNED_INT,"(unsigned int)"],
        [Blockly.Msg.VARIABLES_TYPE_BYTE,"(byte)"],
        [Blockly.Msg.VARIABLES_TYPE_WORD,"(word)"],
        [Blockly.Msg.VARIABLES_TYPE_LONG,"(long)"],
        [Blockly.Msg.VARIABLES_TYPE_UNSIGNED_LONG,"(unsigned long)"],
        [Blockly.Msg.VARIABLES_TYPE_FLOAT,"(float)"],
        [Blockly.Msg.VARIABLES_TYPE_DOUBLE,"(double)"],
        [Blockly.Msg.VARIABLES_TYPE_CHAR,"(char)"]
      ]), "TYPE")
      .appendField(Blockly.Msg.LINKIT_CHECK_MCSLITE_LED_VALUE_TAIL);
    this.appendValueInput("CHANNEL_VALUE")
      .setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, profile.common.number_type);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCSLITE_TOOLTIP);
  }
};
Blockly.Blocks['mcslite_channel2_value'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCSLITE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_CHECK_MCSLITE_REMOTE_VALUE_TITLE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.VARIABLES_TYPE_NUMBER,"(int)"],
        [Blockly.Msg.VARIABLES_TYPE_UNSIGNED_INT,"(unsigned int)"],
        [Blockly.Msg.VARIABLES_TYPE_BYTE,"(byte)"],
        [Blockly.Msg.VARIABLES_TYPE_WORD,"(word)"],
        [Blockly.Msg.VARIABLES_TYPE_LONG,"(long)"],
        [Blockly.Msg.VARIABLES_TYPE_UNSIGNED_LONG,"(unsigned long)"],
        [Blockly.Msg.VARIABLES_TYPE_FLOAT,"(float)"],
        [Blockly.Msg.VARIABLES_TYPE_DOUBLE,"(double)"],
        [Blockly.Msg.VARIABLES_TYPE_CHAR,"(char)"]
      ]), "TYPE")
      .appendField(Blockly.Msg.LINKIT_CHECK_MCSLITE_REMOTE_VALUE_TAIL);
    this.appendValueInput("CHANNEL2_VALUE")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_CHANNEL2_TAIL)
      .setCheck("String");
    this.appendValueInput("SET_VALUE")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_MCSLITE_CHANNEL1_TAIL)
      .setCheck("String");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCSLITE_TOOLTIP);
  }
};
Blockly.Blocks['mcslite_process'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCSLITE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_MCSLITE_PROCESS_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCSLITE_TOOLTIP);
  }
};
Blockly.Blocks['mcslite_channel_wait_until_read_value'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCSLITE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendValueInput("CHANNEL")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_MCSLITE_LED_WAIT_UNTIL_READ_VALUE_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCSLITE_TOOLTIP);
  }
};
Blockly.Blocks['mcslite_channel_updated'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_MCSLITE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendValueInput("CHANNEL_UPDATED")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_MCSLITE_LED_UPDATED);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.LINKIT_SET_MCSLITE_TOOLTIP);
  }
};
*/

//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------


Blockly.Blocks['linkit_wifi_wait_until_ready'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_UNTIL_READY_TITLE);
    this.appendValueInput("SSID")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);
    this.appendValueInput("PASSWORD")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
  }
};
Blockly.Blocks['linkit_wifi_disconnect'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CATEGORY_LINKIT_WIFI_DISCONNECT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
  }
};

Blockly.Blocks['linkit_wifi_ready_advanced'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_READY_TITLE)
      //.appendField(new Blockly.FieldImage(Blockly.Blocks.linkit.image, 64, 43));
    this.appendValueInput("SSID")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);
    this.appendValueInput("PASSWORD")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
  }
};

Blockly.Blocks['linkit_wifi_ready'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_READY_TITLE);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
  }
};

Blockly.Blocks['linkit_wifi'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_TITLE)
      //.appendField(new Blockly.FieldImage(Blockly.Blocks.linkit.image, 64, 43));
    this.appendValueInput("SSID")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);
    this.appendValueInput("PASSWORD")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
  }
};

Blockly.Blocks['linkit_wifi_ignore_result'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_TITLE)
      //.appendField(new Blockly.FieldImage(Blockly.Blocks.linkit.image, 64, 43));
    this.appendValueInput("SSID")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);
    this.appendValueInput("PASSWORD")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
  }
};

Blockly.Blocks['linkit_wifi_status'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINKIT_SET_WIFI_STATUS_NO_SHIELD, "WL_NO_SHIELD"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_IDLE, "WL_IDLE_STATUS"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_NO_SSID_AVAIL, "WL_NO_SSID_AVAIL"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_SCAN_COMPLETED, "WL_SCAN_COMPLETED"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_CONNECTED, "WL_CONNECTED"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_CONNECT_FAILED, "WL_CONNECT_FAILED"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_CONNECTION_LOST, "WL_CONNECTION_LOST"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_DISCONNECTED, "WL_DISCONNECTED"]]), 'String');
    this.setOutput(true, 'String');
    this.setTooltip('');
  }
};
