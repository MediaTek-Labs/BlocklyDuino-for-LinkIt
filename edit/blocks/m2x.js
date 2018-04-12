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
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.m2x');

goog.require('Blockly.Blocks');

Blockly.Blocks.m2x.HUE = 65;

Blockly.Blocks.m2x.image = filepath.media+'/m2x.png';

Blockly.Blocks['m2x_begin'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.M2X_HELPURL);
    this.setColour(Blockly.Blocks.m2x.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.m2x.image, 64, 64))
      .appendField(Blockly.Msg.M2X_BEGIN_TITLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ETHERNET_VERSION_1,""],[Blockly.Msg.ETHERNET_VERSION_2,"2"]]), 'VERSION')
    this.appendValueInput("ID")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DEVICE_ID);
    this.appendValueInput("STREAM_NAME")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.M2X_STREAM_NAME);
    this.appendValueInput("KEY")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.M2X_KEY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.M2X_BEGIN_TOOLTIP);
  }
};

Blockly.Blocks['m2x_update_value'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.M2X_HELPURL);
    this.setColour(Blockly.Blocks.m2x.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.m2x.image, 64, 64))
      .appendField(Blockly.Msg.M2X_UPDATE_VALUE_TITLE);
    this.appendValueInput('VALUE')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.M2X_UPDATE_VALUE_TOOLTIP);
  }
};

Blockly.Blocks['m2x_list_value'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.M2X_HELPURL);
    this.setColour(Blockly.Blocks.m2x.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.m2x.image, 64, 64))
      .appendField(Blockly.Msg.M2X_LIST_VALUE_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.M2X_LIST_VALUE_TOOLTIP);
  }
};

Blockly.Blocks['m2x_custom_list_value'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.M2X_HELPURL);
    this.setColour(Blockly.Blocks.m2x.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.m2x.image, 64, 64))
      .appendField(Blockly.Msg.M2X_LIST_VALUE_TITLE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.M2X_DATE0_TITLE)
      .appendField(new Blockly.FieldDate('2000-01-01'),'DATE0')
      .appendField(new Blockly.FieldTextInput('00'),'HOUR0')
      .appendField(":")
      .appendField(new Blockly.FieldTextInput('00'),'MIN0')
      .appendField(":")
      .appendField(new Blockly.FieldTextInput('00'),'SEC0');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.M2X_DATE1_TITLE)
      .appendField(new Blockly.FieldDate('2000-01-01'),'DATE1')
      .appendField(new Blockly.FieldTextInput('01'),'HOUR1')
      .appendField(":")
      .appendField(new Blockly.FieldTextInput('00'),'MIN1')
      .appendField(":")
      .appendField(new Blockly.FieldTextInput('00'),'SEC1');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.M2X_CUSTOM_LIST_VALUE_TOOLTIP);
  }
};

Blockly.Blocks['m2x_delete_values'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.M2X_HELPURL);
    this.setColour(Blockly.Blocks.m2x.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.m2x.image, 64, 64))
      .appendField(Blockly.Msg.M2X_DELETE_VALUES_TITLE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.M2X_DATE0_TITLE)
      .appendField(new Blockly.FieldDate('2000-01-01'),'DATE0')
      .appendField(new Blockly.FieldTextInput('00'),'HOUR0')
      .appendField(":")
      .appendField(new Blockly.FieldTextInput('00'),'MIN0')
      .appendField(":")
      .appendField(new Blockly.FieldTextInput('00'),'SEC0');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.M2X_DATE1_TITLE)
      .appendField(new Blockly.FieldDate('2000-01-01'),'DATE1')
      .appendField(new Blockly.FieldTextInput('01'),'HOUR1')
      .appendField(":")
      .appendField(new Blockly.FieldTextInput('00'),'MIN1')
      .appendField(":")
      .appendField(new Blockly.FieldTextInput('00'),'SEC1');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.M2X_DELETE_VALUES_TOOLTIP);
  }
};

Blockly.Blocks['m2x_update_location'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.M2X_HELPURL);
    this.setColour(Blockly.Blocks.m2x.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.m2x.image, 64, 64))
      .appendField(Blockly.Msg.M2X_UPDATE_LOCATION_TITLE);
    this.appendValueInput('LOCATION_NAME')
      .setCheck('String')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.M2X_LOCATION_NAME);
    this.appendValueInput('LATITUDE')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LATITUDE);
    this.appendValueInput('LONGITUDE')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LONGITUDE);
    this.appendValueInput('ELEVATION')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ELEVATION);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.M2X_UPDATE_VALUE_TOOLTIP);
  }
};

Blockly.Blocks['m2x_read_location'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.M2X_HELPURL);
    this.setColour(Blockly.Blocks.m2x.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.m2x.image, 64, 64))
      .appendField(Blockly.Msg.M2X_READ_LOCATION_TITLE);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.M2X_READ_LOCATION_TOOLTIP);
  }
};

