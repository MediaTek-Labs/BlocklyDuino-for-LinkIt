/**
 * @license
 * Blocks for LinkIt 7697
 *
 * Copyright 2018 MediaTek Inc.
 * https://github.com/MediaTek-Labs/BlocklyDuino-for-LinkIt
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
 * @fileoverview Generating Arduino for list blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Arduino.oled_display');

goog.require('Blockly.Arduino');


Blockly.Arduino.oled_display_setting = function() {
  Blockly.Arduino.definitions_['define_wire'] = '#include "Wire.h"';
  Blockly.Arduino.definitions_['define_u8g2_oled_include'] = '#include "U8g2lib.h"'
    
  // model string should be SSD1306 or SH1106
  let modelString = this.getFieldValue('CHIPSET');
  Blockly.Arduino.definitions_['define_u8g2_oled_declare'] = 'U8G2_' + modelString + '_128X64_NONAME_1_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);';

  Blockly.Arduino.setups_['setup_define_u8g2_oled'] = 'u8g2.begin();\n'
    + '  u8g2.setFont(u8g2_font_6x10_tf);\n'
    + '  u8g2.setFontRefHeightExtendedText();\n'
    + '  u8g2.setDrawColor(1);\n'
    + '  u8g2.setFontPosTop();\n'
    + '  u8g2.setFontDirection(0);\n';

  return '';
};


Blockly.Arduino.oled_display_clear = function() {
  return 'u8g2.clearDisplay();\n';
};

Blockly.Arduino.oled_display_draw_commands = function() {
  var command_code = Blockly.Arduino.statementToCode(this, 'DRAW_CMD');
  
  var code = 'u8g2.firstPage();\n'
   + 'do {\n'
   + command_code 
   + '} while (u8g2.nextPage());\n';

  return code;
};

Blockly.Arduino.oled_display_draw_line = function() {
  var startX = Blockly.Arduino.valueToCode(this, 'START_X', Blockly.Arduino.ORDER_NONE) || "0";
  var startY = Blockly.Arduino.valueToCode(this, 'START_Y', Blockly.Arduino.ORDER_NONE) || "0";
  var endX = Blockly.Arduino.valueToCode(this, 'END_X', Blockly.Arduino.ORDER_NONE) || "0";
  var endY = Blockly.Arduino.valueToCode(this, 'END_Y', Blockly.Arduino.ORDER_NONE) || "0";
  
  var code = `u8g2.drawLine(${startX}, ${startY}, ${endX}, ${endY});\n`;
  return code;
};

Blockly.Arduino.oled_display_draw_box = function() {
  var startX = Blockly.Arduino.valueToCode(this, 'START_X', Blockly.Arduino.ORDER_NONE) || "0";
  var startY = Blockly.Arduino.valueToCode(this, 'START_Y', Blockly.Arduino.ORDER_NONE) || "0";
  var endX = Blockly.Arduino.valueToCode(this, 'END_X', Blockly.Arduino.ORDER_NONE) || "0";
  var endY = Blockly.Arduino.valueToCode(this, 'END_Y', Blockly.Arduino.ORDER_NONE) || "0";
  
  var code = `u8g2.drawBox(${startX}, ${startY}, ${endX}, ${endY});\n`;
  return code;
};

Blockly.Arduino.oled_display_draw_frame = function() {
  var startX = Blockly.Arduino.valueToCode(this, 'START_X', Blockly.Arduino.ORDER_NONE) || "0";
  var startY = Blockly.Arduino.valueToCode(this, 'START_Y', Blockly.Arduino.ORDER_NONE) || "0";
  var endX = Blockly.Arduino.valueToCode(this, 'END_X', Blockly.Arduino.ORDER_NONE) || "0";
  var endY = Blockly.Arduino.valueToCode(this, 'END_Y', Blockly.Arduino.ORDER_NONE) || "0";
  
  var code = `u8g2.drawFrame(${startX}, ${startY}, ${endX}, ${endY});\n`;
  return code;
};

Blockly.Arduino.oled_display_draw_disc = function() {
  var centerX = Blockly.Arduino.valueToCode(this, 'CENTER_X', Blockly.Arduino.ORDER_NONE) || "0";
  var centerY = Blockly.Arduino.valueToCode(this, 'CENTER_Y', Blockly.Arduino.ORDER_NONE) || "0";
  var radius = Blockly.Arduino.valueToCode(this, 'RADIUS', Blockly.Arduino.ORDER_NONE) || "0";
  
  var code = `u8g2.drawDisc(${centerX}, ${centerY}, ${radius});\n`;
  return code;
};

Blockly.Arduino.oled_display_draw_circle = function() {
  var centerX = Blockly.Arduino.valueToCode(this, 'CENTER_X', Blockly.Arduino.ORDER_NONE) || "0";
  var centerY = Blockly.Arduino.valueToCode(this, 'CENTER_Y', Blockly.Arduino.ORDER_NONE) || "0";
  var radius = Blockly.Arduino.valueToCode(this, 'RADIUS', Blockly.Arduino.ORDER_NONE) || "0";
  
  var code = `u8g2.drawCircle(${centerX}, ${centerY}, ${radius});\n`;
  return code;
};

Blockly.Arduino.oled_display_draw_text = function() {
  var startX = Blockly.Arduino.valueToCode(this, 'START_X', Blockly.Arduino.ORDER_NONE) || "0";
  var startY = Blockly.Arduino.valueToCode(this, 'START_Y', Blockly.Arduino.ORDER_NONE) || "0";
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_NONE) || '""';
  
  var code = `u8g2.drawStr(${startX}, ${startY}, String(${content}).c_str());\n`;
  return code;
};

Blockly.Arduino.oled_display_set_font = function() {
  let font = this.getFieldValue('FONT');
  
  var code = `u8g2.setFont(${font});\n`;
  return code;
};