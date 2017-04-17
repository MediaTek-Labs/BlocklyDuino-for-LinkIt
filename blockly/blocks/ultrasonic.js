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

Blockly.Blocks.ultrasonic.HUE = 215;

Blockly.Blocks.ultrasonic.image = filepath.media+'/ultrasonic.jpg';

Blockly.Blocks['ultrasonic_setting'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ULTRASONIC_SETTING_HELPURL);
    this.setColour(Blockly.Blocks.ultrasonic.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.ultrasonic.image, 64, 64))
      .appendField(Blockly.Msg.ULTRASONIC_SETTING_TITLE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ULTRASONIC_SETTING_TRIG);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "TRIG")
    this.appendDummyInput()
      .appendField(Blockly.Msg.ULTRASONIC_SETTING_ECHO);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "ECHO")
    this.appendDummyInput()
      .appendField(Blockly.Msg.ULTRASONIC_SETTING_RESET);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "RESET")
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ULTRASONIC_SETTING_TOOLTIP);
  }
};

Blockly.Blocks['ultrasonic_maxrange'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ULTRASONIC_MAXRANGE_HELPURL);
    this.setColour(Blockly.Blocks.ultrasonic.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.ultrasonic.image, 64, 64))
      .appendField(Blockly.Msg.ULTRASONIC_MAXRANGE_TITLE)
      .appendField(new Blockly.FieldTextInput("20"),"MAXRANGE")
      .appendField(new Blockly.FieldDropdown([["cm", "CM"], ["inch", "INCH"]]), "UNIT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ULTRASONIC_MAXRANGE_TOOLTIP);
  }
};

Blockly.Blocks['ultrasonic_distance'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ULTRASONIC_DISTANCE_HELPURL);
    this.setColour(Blockly.Blocks.ultrasonic.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.ultrasonic.image, 64, 64))
      .appendField(Blockly.Msg.ULTRASONIC_MAXRANGE_TITLE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["cm", "CM"], ["inch", "INCH"]]), "UNIT");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.ULTRASONIC_MAXRANGE_TOOLTIP);
  }
};
