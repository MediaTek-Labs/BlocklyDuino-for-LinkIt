/**
 * @license
 * Blockly for LinkIt 7697
 * https://github.com/MediaTek-Labs/BlocklyDuino-for-LinkIt
 *
 * Copyright 2018 MediaTek Inc.
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
 * @author MediaTek Labs
 */
'use strict';

goog.provide('Blockly.Blocks.infra_red');

goog.require('Blockly.Blocks');

Blockly.Blocks.infra_red.HUE = 70;

Blockly.Blocks['infra_red_send'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INFRA_RED_HELPURL);
    this.setColour(Blockly.Blocks.infra_red.HUE);
    // this.setTooltip(Blockly.Msg.INFRA_RED_READ_TOOLTIP);

    this.appendValueInput('COMMAND_INT')
      .appendField(Blockly.Msg.INFRA_RED_SEND_TITLE)
      .setCheck("Number")
      .appendField(Blockly.Msg.INFRA_RED_SEND_TEXT_PARAM)

    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has beeen deleted.
      return;
    }
    // this.setWarningText(Blockly.Msg.INFRA_RED_WARNING);
  }
};

Blockly.Blocks['infra_red_receive'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INFRA_RED_HELPURL);
    this.setColour(Blockly.Blocks.infra_red.HUE);
    // this.setTooltip(Blockly.Msg.INFRA_RED_READ_TOOLTIP);

    this.appendDummyInput()
      .appendField(Blockly.Msg.INFRA_RED_RECEIVE_TITLE)
      .appendField(Blockly.Msg.INFRA_RED_RECEIVE_TEXT_PARAM)
    
    this.appendDummyInput()
      .appendField(Blockly.Msg.SIGNAL_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");

    this.appendDummyInput()
      .appendField(Blockly.Msg.INFRA_RED_RECEIVE_DEFAULT_VALUE)
      .appendField(new Blockly.FieldDropdown([['0', '0'], ['-1', '-1']]), "DEFAULT_VALUE");
          
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has beeen deleted.
      return;
    }
    // this.setWarningText(Blockly.Msg.INFRA_RED_WARNING);
  }
};