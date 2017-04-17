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

goog.provide('Blockly.Blocks.servo');

goog.require('Blockly.Blocks');

Blockly.Blocks.servo.HUE = 215;

Blockly.Blocks.servo.image = filepath.media+'/servo.jpg';

Blockly.Blocks['servo_attach'] = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.SERVO_ATTACH_HELPURL);
    this.setColour(Blockly.Blocks.servo.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.servo.image, 64, 64))
      .appendField(Blockly.Msg.SERVO_ATTACH_TEXT1)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      .appendField(Blockly.Msg.SERVO_ATTACH_TEXT2);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.SERVO_ATTACH_TOOLTIP);
  }
};

Blockly.Blocks['servo_custom_attach'] = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.SERVO_ATTACH_HELPURL);
    this.setColour(Blockly.Blocks.servo.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.servo.image, 64, 64))
      .appendField(Blockly.Msg.SERVO_ATTACH_TEXT1)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      .appendField(Blockly.Msg.SERVO_ATTACH_TEXT2);
    this.appendDummyInput()
      .appendField(Blockly.Msg.SERVO_ATTACH_MAX_TEXT1)
      .appendField(new Blockly.FieldTextInput("2400"), "MAX")
      .appendField(Blockly.Msg.SERVO_ATTACH_MAX_TEXT2);
    this.appendDummyInput()
      .appendField(Blockly.Msg.SERVO_ATTACH_MIN_TEXT1)
      .appendField(new Blockly.FieldTextInput("544"), "MIN")
      .appendField(Blockly.Msg.SERVO_ATTACH_MIN_TEXT2);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.SERVO_ATTACH_TOOLTIP);
  }
};

Blockly.Blocks['servo_write'] = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.SERVO_WRITE_HELPURL);
    this.setColour(Blockly.Blocks.servo.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.servo.image, 64, 64))
      .appendField(Blockly.Msg.SERVO_WRITE_TEXT1)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      .appendField(Blockly.Msg.SERVO_WRITE_TEXT2);
    this.appendValueInput("ANGLE")
      .setCheck("Number")
      .appendField(Blockly.Msg.SERVO_ANGLE_TEXT1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.SERVO_ANGLE_TEXT2);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.SERVO_WRITE_TOOLTIP);
  }
};

Blockly.Blocks['servo_writeus'] = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.SERVO_WRITE_US_HELPURL);
    this.setColour(Blockly.Blocks.servo.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.servo.image, 64, 64))
      .appendField(Blockly.Msg.SERVO_WRITE_TEXT1)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      .appendField(Blockly.Msg.SERVO_WRITE_TEXT2);
    this.appendValueInput("ANGLE_US")
      .setCheck("Number")
      .appendField(Blockly.Msg.SERVO_ANGLE_US_TEXT1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.SERVO_ANGLE_US_TEXT2);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.SERVO_WRITE_US_TOOLTIP);
  }
};

Blockly.Blocks['servo_read'] = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.SERVO_READ_HELPURL);
    this.setColour(Blockly.Blocks.servo.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.servo.image, 64, 64))
      .appendField(Blockly.Msg.SERVO_READ_TEXT1)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      .appendField(Blockly.Msg.SERVO_READ_TEXT2);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.SERVO_READ_TOOLTIP);
  }
};

Blockly.Blocks['servo_attached'] = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.SERVO_ATTACHED_HELPURL);
    this.setColour(Blockly.Blocks.servo.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.servo.image, 64, 64))
      .appendField(Blockly.Msg.SERVO_ATTACHED_TEXT1)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      .appendField(Blockly.Msg.SERVO_ATTACHED_TEXT2);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip(Blockly.Msg.SERVO_ATTACHED_TOOLTIP);
  }
};

Blockly.Blocks['servo_detach'] = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.SERVO_DETACH_HELPURL);
    this.setColour(Blockly.Blocks.servo.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.servo.image, 64, 64))
      .appendField(Blockly.Msg.SERVO_DETACH_TEXT1)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      .appendField(Blockly.Msg.SERVO_DETACH_TEXT2);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.SERVO_DETACH_TOOLTIP);
  }
};
