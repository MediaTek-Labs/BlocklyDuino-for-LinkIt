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
 * @fileoverview Helper functions for generating Otto blocks.
 * @author hi@vox.vg (Zhi-Wei Cai)
 */

goog.provide('Blockly.Blocks.otto');

goog.require('Blockly.Blocks');

Blockly.Blocks.otto.HUE = 100;

Blockly.Blocks['otto_init'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_INIT_TITLE)
      .appendField(Blockly.Msg.OTTO_LEFT_LEG)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "YL")
      .appendField(Blockly.Msg.OTTO_RIGHT_LEG)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "YR")
      .appendField(Blockly.Msg.OTTO_LEFT_FOOT)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "RL")
      .appendField(Blockly.Msg.OTTO_RIGHT_FOOT)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "RR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OTTO_INIT_TOOLTIP);
  }
};

Blockly.Blocks['otto_calibrate'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_CALIBRATE_TITLE)
    this.appendValueInput('YL')
      .setCheck('Number')
      .appendField(Blockly.Msg.OTTO_LEFT_LEG);
    this.appendValueInput('YR')
      .setCheck('Number')
      .appendField(Blockly.Msg.OTTO_RIGHT_LEG);
    this.appendValueInput('RL')
      .setCheck('Number')
      .appendField(Blockly.Msg.OTTO_LEFT_FOOT);
    this.appendValueInput('RR')
      .setCheck('Number')
      .appendField(Blockly.Msg.OTTO_RIGHT_FOOT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OTTO_CALIBRATE_TOOLTIP);
  }
};
