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
 * @author gasolin@gmail.com (Fred Lin)
 */

'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.times');

goog.require('Blockly.Blocks');

Blockly.Blocks.times.HUE = 90;

Blockly.Blocks['delay'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.TIMES_DELAY_HELPURL);
    this.setColour(Blockly.Blocks.times.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIMES_DELAY_APPENDTEXT)
      .appendField(new Blockly.FieldTextInput("1000"),"DELAY_TIME");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.TIMES_DELAY_TOOLTIP);
  }
};

Blockly.Blocks['delayMicroseconds'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.TIMES_DELAYMICROSECONDS_HELPURL);
    this.setColour(Blockly.Blocks.times.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIMES_DELAYMICROSECONDS_APPENDTEXT)
      .appendField(new Blockly.FieldTextInput("1000"),"DELAY_TIME");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.TIMES_DELAYMICROSECONDS_TOOLTIP);
  }
};

Blockly.Blocks['delay_custom'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.TIMES_DELAY_HELPURL);
    this.setColour(Blockly.Blocks.times.HUE);
    this.appendValueInput("DELAY_TIME")
      .setCheck("Number")
      .appendField(Blockly.Msg.TIMES_DELAY_APPENDTEXT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.TIMES_DELAY_TOOLTIP);
  }
};

Blockly.Blocks['delayMicroseconds_custom'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.TIMES_DELAYMICROSECONDS_HELPURL);
    this.setColour(Blockly.Blocks.times.HUE);
    this.appendValueInput("DELAY_TIME")
        .setCheck("Number")
        .appendField(Blockly.Msg.TIMES_DELAYMICROSECONDS_APPENDTEXT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.TIMES_DELAYMICROSECONDS_TOOLTIP);
  }
};


Blockly.Blocks['micros'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.TIMES_MICROS_HELPURL);
    this.setColour(Blockly.Blocks.times.HUE);
    this.appendDummyInput()
    .appendField(Blockly.Msg.TIMES_MICROS_APPENDTEXT);
    this.setOutput(true,"Number");
    this.setTooltip(Blockly.Msg.TIMES_MICROS_TOOLTIP);
  }
};

Blockly.Blocks['millis'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.TIMES_MILLIS_HELPURL);
    this.setColour(Blockly.Blocks.times.HUE);
    this.appendDummyInput()
    .appendField(Blockly.Msg.TIMES_MILLIS_APPENDTEXT);
    this.setOutput(true,"Number");
    this.setTooltip(Blockly.Msg.TIMES_MILLIS_TOOLTIP);
  }
};
