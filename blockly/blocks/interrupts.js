//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b

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

goog.provide('Blockly.Blocks.interrupts');

goog.require('Blockly.Blocks');

Blockly.Blocks.interrupts.HUE = 190;

Blockly.Blocks['interrupts_attach'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INTERRUPTS_ATTACH_HELPURL);
    this.setColour(190);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INTERRUPTS_ATTACH_TITLE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.interrupt), "PIN");
    this.appendDummyInput()
      .appendField(Blockly.Msg.MODE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LOW, "LOW"],[Blockly.Msg.CHANGE, "CHANGE"],[Blockly.Msg.RISING, "RISING"],[Blockly.Msg.FALLING, "FALLING"]]), "MODE");
    this.appendStatementInput("CONTENT");
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.INTERRUPTS_ATTACH_TOOLTIP);
  }
};

Blockly.Blocks['interrupts_detach'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INTERRUPTS_DETACH_HELPURL);
    this.setColour(190);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INTERRUPTS_DETACH_TITLE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(profile.default.interrupt), "PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.INTERRUPTS_DETACH_TOOLTIP);
  }
};

Blockly.Blocks['interrupts'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INTERRUPTS_HELPURL);
    this.setColour(190);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INTERRUPTS_TITLE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.INTERRUPTS_TOOLTIP);
  }
};

Blockly.Blocks['interrupts_no'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INTERRUPTS_NO_HELPURL);
    this.setColour(190);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INTERRUPTS_NO_TITLE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.INTERRUPTS_NO_TOOLTIP);
  }
};

