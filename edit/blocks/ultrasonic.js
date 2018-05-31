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
 * @fileoverview Loop blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.ultrasonic');

goog.require('Blockly.Blocks');

Blockly.Blocks.ultrasonic.HUE = 70;

Blockly.Blocks['ultrasonic_read'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ULTRASONIC_SETTING_HELPURL);
    this.setColour(Blockly.Blocks.ultrasonic.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ULTRASONIC_SETTING_TITLE)
      .appendField(new Blockly.FieldDropdown([["HC-SR04P", "DUMMY"]]), "SENSOR");

    this.appendDummyInput()
      .appendField(Blockly.Msg.ULTRASONIC_SETTING_TRIG)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "TRIG")

    this.appendDummyInput()
      .appendField(Blockly.Msg.ULTRASONIC_SETTING_ECHO)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "ECHO")

    //this.appendDummyInput()
    //  .appendField(Blockly.Msg.ULTRASONIC_SETTING_RESET)
    //  .appendField(new Blockly.FieldDropdown(profile.default.digital), "RESET")

    this.appendDummyInput()
        .appendField(Blockly.Msg.MESUREMENT_TYPE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GROVE_ULTRASONIC_RANGER_UNIT_CM,"CM"],[Blockly.Msg.GROVE_ULTRASONIC_RANGER_UNIT_INCH,"INCH"]]), "MEASUREMENT");

    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ULTRASONIC_SETTING_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has beeen deleted.
      return;
    }
  }
};
