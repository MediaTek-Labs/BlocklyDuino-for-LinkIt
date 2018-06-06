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

goog.provide('Blockly.Blocks.pms');

goog.require('Blockly.Blocks');

Blockly.Blocks.pms.HUE = 70;

Blockly.Blocks['pms_read'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.PMS_HELPURL);
    this.setColour(Blockly.Blocks.pms.HUE);

    this.appendDummyInput()
      .appendField(Blockly.Msg.PMS_RECEIVE_TITLE)
      .appendField(new Blockly.FieldDropdown([
          ["PMS3003", "PMS3003"],
          ["PMS5003", "PMS5003"],
          ["PMS7003", "PMS7003"],
        ]), "MODEL");
    
    this.appendDummyInput()
        .appendField("RX")
        .appendField(new Blockly.FieldDropdown([
          ["2", "2"],
          ["3", "3"]
        ]), "RX_PIN");

    this.appendDummyInput()
      .appendField("TX")
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "TX_PIN");

      this.appendDummyInput()
      .appendField(Blockly.Msg.PMS_READ_VALIE)
      .appendField(new Blockly.FieldDropdown([
        ["PM1.0", "pms_read_PM1"],
        ["PM2.5", "pms_read_PM2"],
        ["PM10", "pms_read_PM10"],
      ]), "PM_LEVEL")
      .appendField("(ug/m\u00B3)");
          
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has beeen deleted.
      return;
    }
  }
};