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

goog.provide('Blockly.Blocks.htu21d');

goog.require('Blockly.Blocks');

Blockly.Blocks.htu21d.HUE = 215;

Blockly.Blocks['htu21d'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HTU21D_HELPURL);
    this.setColour(215);
    this.setTooltip(Blockly.Msg.HTU21D_TOOLTIP);

    this.appendDummyInput()
      .appendField(Blockly.Msg.HTU21D_TITLE)
      .appendField(new Blockly.FieldDropdown([["HTU21D", "DUMMY"]]), "SENSOR");

    this.appendDummyInput()
      .appendField(Blockly.Msg.SIGNAL_PIN)
      .appendField(new Blockly.FieldDropdown([["I2C","PIN"]]), "PIN");
        

    this.appendDummyInput()
        .appendField(Blockly.Msg.MESUREMENT_TYPE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HUMIDITY_PERCENT,"HUMIDITY"],[Blockly.Msg.TEMPERATURE_CELCIUS,"TEMPERATURE_C"]]), "MEASUREMENT");

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
