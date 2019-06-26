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
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */

goog.provide('Blockly.Blocks.eeprom');

goog.require('Blockly.Blocks');

Blockly.Blocks.eeprom.HUE = 200;

Blockly.Blocks['eeprom_getsize'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.EEPROM_LENGTH_HELPURL);
    this.setColour(Blockly.Blocks.eeprom.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.EEPROM_LENGTH_TITLE);
    
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.EEPROM_LENGTH_TOOLTIP);
  }
};

Blockly.Blocks['eeprom_write'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.EEPROM_WRITE_HELPURL);
    this.setColour(Blockly.Blocks.eeprom.HUE);

    this.appendValueInput("ADDRESS")
      .setCheck(["Number"])
      .appendField(Blockly.Msg.EEPROM_WRITE_TITLE);

    this.appendValueInput("CONTENT")
      .setCheck(["Number", "Boolean"])
      .appendField(Blockly.Msg.EEPROM_VALUE);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.EEPROM_WRITE_TOOLTIP);
  }
};

Blockly.Blocks['eeprom_read'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.EEPROM_READ_HELPURL);
    this.setColour(Blockly.Blocks.eeprom.HUE);
    
    this.appendValueInput("ADDRESS")
      .setCheck(["Number"])
      .appendField(Blockly.Msg.EEPROM_READ_TITLE);
    
    this.setInputsInline(true);
    this.setOutput(true,["Number"]);
    this.setTooltip(Blockly.Msg.EEPROM_READ_TOOLTIP);
  }
};