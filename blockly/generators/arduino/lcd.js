/**
 * Visual Blocks Language
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

goog.provide('Blockly.Arduino.lcd');

goog.require('Blockly.Arduino');

Blockly.Arduino.lcd_init = function() {
  var dropdown_rs = this.getFieldValue('RS');
  var dropdown_enable = this.getFieldValue('ENABLE');
  var dropdown_rw = this.getFieldValue('RW');
  var dropdown_d4 = this.getFieldValue('D4');
  var dropdown_d5 = this.getFieldValue('D5');
  var dropdown_d6 = this.getFieldValue('D6');
  var dropdown_d7 = this.getFieldValue('D7');
  var class_str = "";
  if(dropdown_rw == "-"){
    class_str = 'LiquidCrystal lcd('
      + dropdown_rs + ',' + dropdown_enable + ',' + dropdown_d4 + ','
      + dropdown_d5 + ',' + dropdown_d6 + ',' + dropdown_d7 + ');\n';
  }else{
    class_str = 'LiquidCrystal lcd('
      + dropdown_rs + ',' + dropdown_rw + ',' + dropdown_enable + ',' + dropdown_d4 + ','
      + dropdown_d5 + ',' + dropdown_d6 + ',' + dropdown_d7 + ');\n';
  }

  Blockly.Arduino.definitions_['liquidcrystal'] = '#include <LiquidCrystal.h>\n' + class_str;
  var code = "";
  return code;
};

Blockly.Arduino.lcd_begin = function() {
  var cols = this.getFieldValue('COLS');
  var rows = this.getFieldValue('ROWS');
  var code = 'lcd.begin(' + cols + ',' + rows + ');\n';
  return code;
}

Blockly.Arduino.lcd_print = function() {
  var text = Blockly.Arduino.valueToCode(this, 'PRINT', Blockly.Arduino.ORDER_NONE)
  var code = 'lcd.print(' + text + ');\n';
  return code;
}

Blockly.Arduino.lcd_setcursor = function() {
  var col = this.getFieldValue('COL');
  var row = this.getFieldValue('ROW');
  var code = 'lcd.setCursor(' + col + ',' + row + ');\n';
  return code;
}

Blockly.Arduino.lcd_custom_setcursor = function() {
  var col = Blockly.Arduino.valueToCode(this, 'COL', Blockly.Arduino.ORDER_NONE) || "0"
  var row = Blockly.Arduino.valueToCode(this, 'ROW', Blockly.Arduino.ORDER_NONE) || "0"
  var code = 'lcd.setCursor(' + col + ',' + row + ');\n';
  return code;
}

Blockly.Arduino.lcd_clear = function() {
  var code = 'lcd.clear();\n';
  return code;
}

Blockly.Arduino.lcd_scrolldisplayleft = function() {
  var code = 'lcd.scrollDisplayLeft();\n';
  return code;
}

Blockly.Arduino.lcd_scrolldisplayright = function() {
  var code = 'lcd.scrollDisplayRight();\n';

  return code;
}

Blockly.Arduino.lcd_switch_scroll = function(){
  var sw = this.getFieldValue('SW');
  var code = 'lcd.';
  if( sw == 1) code += 'autoscroll();\n';
  else         code += 'noAutoscroll();\n';
  return code;
}

Blockly.Arduino.lcd_autoscroll = function() {
  var code = 'lcd.autoscroll();\n';
  return code;
}

Blockly.Arduino.lcd_noautoscroll = function() {
  var code = 'lcd.noAutoscroll();\n';
  return code;
}

Blockly.Arduino.lcd_lefttoright = function() {
  var code = 'lcd.leftToRight();\n';
  return code;
}

Blockly.Arduino.lcd_righttoleft = function() {
  var code = 'lcd.rightToLeft();\n';
  return code;
}




