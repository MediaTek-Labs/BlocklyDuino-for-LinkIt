/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating Arduino for list blocks.
 * @author ok.okada.hiroyuki@gmail.com (hiroyuki okada)
 */
'use strict';

goog.provide('Blockly.Arduino.mpr121');

goog.require('Blockly.Arduino');

Blockly.Arduino.mpr121_begin = function () {

  Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_mpr121'] = '#include <Adafruit_MPR121.h>\n' + 'Adafruit_MPR121 cap = Adafruit_MPR121();\n' + 'uint16_t lasttouched = 0;\n' + 'uint16_t currtouched = 0;';

  Blockly.Arduino.setups_['setup_cap_begin'] = 'cap.begin(0x5A);\n';
  
  var code = 'currtouched = cap.touched();\n';  
  return code;
};

Blockly.Arduino.mpr121_touched = function () {
  var ch = Blockly.Arduino.valueToCode(this, 'CH', Blockly.Arduino.ORDER_ATOMIC) || '0';

  Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_mpr121'] = '#include <Adafruit_MPR121.h>\n' + 'Adafruit_MPR121 cap = Adafruit_MPR121();\n' + 'uint16_t lasttouched = 0;\n' + 'uint16_t currtouched = 0;';

  Blockly.Arduino.setups_['setup_cap_begin'] = 'cap.begin(0x5A);\n';
  
  var code = '(currtouched & _BV(' + ch + ')) && !(lasttouched & _BV(' + ch + '))';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mpr121_released = function () {
  var ch = Blockly.Arduino.valueToCode(this, 'CH', Blockly.Arduino.ORDER_ATOMIC) || '0';

  Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_mpr121'] = '#include <Adafruit_MPR121.h>\n' + 'Adafruit_MPR121 cap = Adafruit_MPR121();\n' + 'uint16_t lasttouched = 0;\n' + 'uint16_t currtouched = 0;';

  Blockly.Arduino.setups_['setup_cap_begin'] = 'cap.begin(0x5A);\n';
  
  var code = '!(currtouched & _BV(' + ch + ')) && (lasttouched & _BV(' + ch + '))';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mpr121_value = function () {
  var ch = Blockly.Arduino.valueToCode(this, 'CH', Blockly.Arduino.ORDER_ATOMIC) || '0';

  Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_mpr121'] = '#include <Adafruit_MPR121.h>\n' + 'Adafruit_MPR121 cap = Adafruit_MPR121();\n' + 'uint16_t lasttouched = 0;\n' + 'uint16_t currtouched = 0;';

  Blockly.Arduino.setups_['setup_cap_begin'] = 'cap.begin(0x5A);\n';
  
  var code = 'cap.filteredData(' + ch + ')';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mpr121_reset = function () {

  Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_mpr121'] = '#include <Adafruit_MPR121.h>\n' + 'Adafruit_MPR121 cap = Adafruit_MPR121();\n' + 'uint16_t lasttouched = 0;\n' + 'uint16_t currtouched = 0;';

  Blockly.Arduino.setups_['setup_cap_begin'] = 'cap.begin(0x5A);\n';
  
  var code = 'lasttouched = currtouched;\n';
  
  return code;
};