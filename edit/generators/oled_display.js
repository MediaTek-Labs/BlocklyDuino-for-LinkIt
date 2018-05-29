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
  Blockly.Arduino.definitions_['define_u8g2_oled_include'] = '#include <Arduino.h>\n'
    + '#include "U8g2lib.h"\n'
    + '#include "Wire.h"\n';

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
  return 'u8g2.clearDisplay();';
};

Blockly.Arduino.oled_display_draw_commands = function() {
  var command_code = Blockly.Arduino.statementToCode(this, 'DRAW_CMD');
  
  var code = 'u8g2.firstPage();\n'
   + 'do {\n'
   + command_code 
   + '} while (u8g2.nextPage());\n';

  return code;
};


Blockly.Arduino.oled_display_set_cursor = function() {
  var code = ''

  var rowVal = Blockly.Arduino.valueToCode(this, 'ROW', Blockly.Arduino.ORDER_NONE) || "0";
  var colVal = Blockly.Arduino.valueToCode(this, 'COL', Blockly.Arduino.ORDER_NONE) || "0";

  code += 'u8g2.setCursor(' + rowVal + ', ' + colVal + ');\n';

  return code;
};

Blockly.Arduino.oled_display_put = function() {
  var code = ''

  let valueCode = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '""';
  code += 'u8g2.print(' + valueCode + ');\n';

  return code;
};
