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
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author ok.okada.hiroyuki@gmail.com (hiroyuki okada)
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.blynk');

goog.require('Blockly.Blocks');

Blockly.Blocks.blynk.HUE = 65;

Blockly.Blocks.blynk.image = filepath.media+'/blynk.png';

Blockly.Blocks['blynk_ethernet_begin'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image, 64, 64))
      .appendField(Blockly.Msg.BLYNK_ETHERNET_BEGIN_TITLE)
    //      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ETHERNET_VERSION_1,""],[Blockly.Msg.ETHERNET_VERSION_2,"2"]]), 'VERSION')
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ETHERNET_VERSION_1,""]], 'VERSION'));
    this.appendValueInput("AUTH")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.BLYNK_AUTH);
    this.appendValueInput("MAC_ADDRESS")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAC_ADDRESS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_ETHERNET_BEGIN_TOOLTIP);
  }
};

Blockly.Blocks['blynk_write'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image, 64, 64))
      .appendField(Blockly.Msg.BLYNK_WRITE_TITLE);
    this.appendDummyInput()
      .appendField("V")
      .appendField(new Blockly.FieldTextInput("0"),"PIN");
    this.appendStatementInput("ACTION")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_WRITE_TOOLTIP);
  }
};

Blockly.Blocks['blynk_param'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image, 64, 64))
      .appendField(Blockly.Msg.BLYNK_PARAM_TITLE)
      .appendField(Blockly.Msg.DATA_TYPE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INTEGER,"asInt"],[Blockly.Msg.DOUBLE,"asDouble"],[Blockly.Msg.STRING,"asStr"]]), 'TYPE');
    this.setInputsInline(true);
    this.setOutput(true,["Number","Boolean"]);
    this.setTooltip(Blockly.Msg.BLYNK_PARAM_TOOLTIP);
  }
};

Blockly.Blocks['blynk_merge_param'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image, 64, 64))
      .appendField(Blockly.Msg.BLYNK_MERGE_PARAM_TITLE)
      .appendField(Blockly.Msg.INDEX)
      .appendField(new Blockly.FieldDropdown(profile.default.blynk_merge_index), "INDEX")
      .appendField(Blockly.Msg.DATA_TYPE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INTEGER,"asInt"],[Blockly.Msg.DOUBLE,"asDouble"],[Blockly.Msg.STRING,"asStr"]]), 'TYPE');
    this.setOutput(true,["Number","Boolean"]);
    this.setTooltip(Blockly.Msg.BLYNK_MERGE_PARAM_TOOLTIP);
  }
};

Blockly.Blocks['blynk_virtual_write'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image, 64, 64))
      .appendField(Blockly.Msg.BLYNK_VIRTUAL_WRITE_TITLE);
    this.appendDummyInput()
      .appendField("V")
      .appendField(new Blockly.FieldTextInput("0"),"PIN");
    this.appendValueInput("VALUE")
      .setCheck("Number","Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_VIRTUAL_WRITE_TOOLTIP);
  }
};

Blockly.Blocks['blynk_email'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image, 64, 64))
      .appendField(Blockly.Msg.BLYNK_EMAIL_TITLE);
    this.appendValueInput("ADDRESS")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.EMAIL_ADDRESS);
    this.appendValueInput("TITLE")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.EMAIL_TITLE);
    this.appendValueInput("BODY")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.EMAIL_BODY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_EMAIL_TOOLTIP);
  }
};

Blockly.Blocks['blynk_notify'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image, 64, 64))
      .appendField(Blockly.Msg.BLYNK_NOTIFY_TITLE);
    this.appendValueInput("TEXT")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_EMAIL_TOOLTIP);
  }
};

Blockly.Blocks['blynk_tweet'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image, 64, 64))
      .appendField(Blockly.Msg.BLYNK_TWEET_TITLE);
    this.appendValueInput("TEXT")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_TWEET_TOOLTIP);
  }
};

Blockly.Blocks['blynk_connect'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.blynk.image, 64, 64))
      .appendField(Blockly.Msg.BLYNK_CONNECT_TITLE);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.BLYNK_CONNECT_TOOLTIP);
  }
};
