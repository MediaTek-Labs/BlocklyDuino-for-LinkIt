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

Blockly.Blocks['ntp_get_datetime'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.TIMES_MILLIS_HELPURL);
    this.setColour(Blockly.Blocks.times.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIMES_DATETIME_FROM_WIFI_APPENDTEXT);
    
    // This block should return yyyy-mm-ddThh:mm:ss (based on ISO8601 but removes fractions)
    this.setOutput(true, "String");
    this.setTooltip(Blockly.Msg.TIMES_DATETIME_FROM_WIFI_TOOLTIP);
    
  }
};

Blockly.Blocks['rtc_set_time_from_string'] = {
  init: function() {
    // This block should parse the input string yyyy-mm-ddThh:mm:ss+08 (ISO8601)
    // and call LRTC.set() accordingly
    this.setHelpUrl(Blockly.Msg.TIMES_DATETIME_RTC_HELPURL);
    this.setColour(Blockly.Blocks.times.HUE); 
    this.appendValueInput("TIME_STRING")
      .setCheck(["String", "Text"])
      .appendField(Blockly.Msg.TIMES_DATETIME_SET_RTC_STRING_APPENDTEXT);
    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TIMES_DATETIME_SET_RTC_STRING_TOOLTIP);
    
  }
};

Blockly.Blocks['rtc_get_time'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.TIMES_DATETIME_RTC_HELPURL);
    this.setColour(Blockly.Blocks.times.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIMES_DATETIME_GET_RTC);
    
    // This block should return yyyy-mm-ddThh:mm:ss (based on ISO8601 but removes fractions)
    this.setOutput(true, "String");
    this.setTooltip(Blockly.Msg.TIMES_DATETIME_GET_RTC_TOOLTIP);
  }
};

Blockly.Blocks['rtc_get_time_field'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.TIMES_DATETIME_RTC_HELPURL);
    this.setColour(Blockly.Blocks.times.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIMES_DATETIME_GET_RTC_UNIT)
      .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_YEAR, '0'],
          [Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_MONTH, '1'],
          [Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_DAY, '2'],
          [Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_HOUR, '3'],
          [Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_MIN, '4'],
          [Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_SEC, '5'],
      ]), 'FIELD');
    
    this.appendValueInput("TIME_STRING")
      .setCheck(["String"]);
    
    // This block should parsed number
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.TIMES_DATETIME_GET_RTC_UNIT_TOOLTIP);
  }
};

Blockly.Blocks['rtc_set_time_from_number'] = {
  init: function() {
    // This block takes numerical values 
    // and call LRTC.set() accordingly
    this.setHelpUrl(Blockly.Msg.TIMES_DATETIME_RTC_HELPURL);
    this.setColour(Blockly.Blocks.times.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIMES_DATETIME_SET_RTC_NUMBER_APPENDTEXT);
    
    this.appendValueInput("YEAR")
      .setCheck(["Number"])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_YEAR);
    this.appendValueInput("MONTH")
      .setCheck(["Number"])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_MONTH);
    this.appendValueInput("DAY")
      .setCheck(["Number"])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_DAY);
    this.appendValueInput("HOUR")
      .setCheck(["Number"])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_HOUR);
    this.appendValueInput("MIN")
      .setCheck(["Number"])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_MIN);
    this.appendValueInput("SEC")
      .setCheck(["Number"])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TIMES_DATETIME_RTC_APPENDTEXT_SEC);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TIMES_DATETIME_SET_RTC_NUMBER_TOOLTIP);
  }
};
