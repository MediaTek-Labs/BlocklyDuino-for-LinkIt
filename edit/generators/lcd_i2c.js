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

goog.provide('Blockly.Arduino.lcd_i2c');

goog.require('Blockly.Arduino');

Blockly.Arduino.lcd_i2c_setting = function() {
  var dim = this.getFieldValue('LCD_DIM');
  var i2c_addr = this.getFieldValue('I2C_ADDRESS');

  Blockly.Arduino.definitions_['lcd_i2c_def'] = 
    '#include <LiquidCrystal_I2C.h>\n'
    + `LiquidCrystal_I2C lcd_i2c(${i2c_addr});\n`

  var rows = 2;
  var cols = 16;
  switch(dim) {
    case '1602':
    cols = 16;
    rows = 2;
    break;
    case '2004':
    cols = 20;
    rows = 4;
    break;
  }
  
  Blockly.Arduino.setups_['lcd_i2c_setup'] = `lcd_i2c.begin(${cols}, ${rows});`;

  var code = ''
  return code;
};

Blockly.Arduino.lcd_i2c_light = function() {
  var light_on = this.getFieldValue('BACKLIGHT_STATE');

  var code = '';
  if(light_on == 'ON') {
    code = 'lcd_i2c.backlight();\n';
  } else {
    code = 'lcd_i2c.noBacklight();\n';
  }
  
  return code;
}

Blockly.Arduino.lcd_i2c_clear = function() {
  var code = 'lcd_i2c.clear();\n';
  return code;
}

Blockly.Arduino.lcd_i2c_set_cursor = function() {
  var row = Blockly.Arduino.valueToCode(this, 'ROW', Blockly.Arduino.ORDER_NONE) || "0"
  var col = Blockly.Arduino.valueToCode(this, 'COL', Blockly.Arduino.ORDER_NONE) || "0"

  var code = 'lcd_i2c.setCursor(' + col + ',' + row + ');\n';
  return code;
}

Blockly.Arduino.lcd_i2c_put = function() {
  var text = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC)
  var code = 'lcd_i2c.print(' + text + ');\n';
  return code;
}
