/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
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
 * @fileoverview List blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.lcd_i2c');

goog.require('Blockly.Blocks');

Blockly.Blocks['lcd_i2c_setting'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_I2C_HELPURL);
    this.setColour(215);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_I2C_TITLE)
        .appendField(new Blockly.FieldDropdown([["1602", "LCD1602"], ["2004", "LCD2004"]]), "CHIPSET")
        .appendField(Blockly.Msg.LCD_I2C_I2C_ADDRESS)
        .appendField(new Blockly.FieldDropdown([["0x27", "0x27"], ["0x3F", "0x3F"]]), "I2C_ADDRESS");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_I2C_TOOLTIP);
  }
};

Blockly.Blocks['lcd_i2c_light'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_I2C_HELPURL);
    this.setColour(215);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_I2C_TITLE)
        .appendField(Blockly.Msg.LCD_I2C_LIGHT)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LCD_I2C_ON, "ON"], [Blockly.Msg.LCD_I2C_OFF, "OFF"]]), "BACKLIGHT_STATE");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_I2C_TOOLTIP);
  }
};

Blockly.Blocks['lcd_i2c_clear'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_I2C_HELPURL);
    this.setColour(215);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_I2C_TITLE)
        .appendField(Blockly.Msg.LCD_I2C_CLEAR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_I2C_TOOLTIP);
  }
};

Blockly.Blocks['lcd_i2c_set_cursor'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_I2C_HELPURL);
    this.setColour(215);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_I2C_TITLE)
    this.appendValueInput('ROW')
        .setCheck('Number')
        .appendField(Blockly.Msg.LCD_I2C_SET_CURSOR);
    this.appendValueInput('COL')
        .setCheck('Number')
        .appendField(Blockly.Msg.LCD_I2C_SET_CURSOR_SEP);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_I2C_SET_CURSOR_APPEND);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_I2C_TOOLTIP);
  }
};

Blockly.Blocks['lcd_i2c_put'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_I2C_HELPURL);
    this.setColour(215);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_I2C_TITLE)
        .appendField(Blockly.Msg.LCD_I2C_PUT)
        .appendField(Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_WRITE)
        .appendField(new Blockly.FieldDropdown([
            [Blockly.Msg.VARIABLES_TYPE_NUMBER, "Number"],
            [Blockly.Msg.VARIABLES_TYPE_FLOAT,  "Float"],
            [Blockly.Msg.VARIABLES_TYPE_STRING, "String"]
        ]), "TYPE");
    this.appendValueInput('VALUE')
        .setCheck(["Number", "String"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_I2C_TOOLTIP);
  }
};
