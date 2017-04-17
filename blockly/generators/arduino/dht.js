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
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Arduino.dht');

goog.require('Blockly.Arduino');

Blockly.Arduino.dht_read = function() {
  var sensor = this.getFieldValue('SENSOR');
  var pin = this.getFieldValue('PIN');
  var type = this.getFieldValue('TYPE');

  var code = '';
  switch(type){
      case 'h':
//      code += 'floatToStr(dht_' + pin + '_' + sensor + '.readHumidity()) + "%"';
        code += '(int)(dht_' + pin + '_' + sensor + '.readHumidity())';
      break;
      case 'C':
//        code += 'floatToStr(dht_' + pin + '_' + sensor + '.readTemperature()) + "C"';
          code += '(int)(dht_' + pin + '_' + sensor + '.readTemperature())';
      break;
      case 'F':
//        code += 'floatToStr(dht_' + pin + '_' + sensor + '.readTemperature(true)) + "F"';
          code += '(int)(dht_' + pin + '_' + sensor + '.readTemperature(true))';
      break;
  }


  Blockly.Arduino.definitions_['define_dht_'+ pin + '_' + sensor] = '#include <DHT.h>\n'
    + 'DHT dht_' + pin + '_' + sensor + '(' + pin + ',' + sensor + ');\n';

  Blockly.Arduino.setups_['setup_dht_' + pin + '_' + sensor] = 'dht_' + pin + '_' + sensor + '.begin();\n'
/*
  Blockly.Arduino.definitions_['define_dht_floatToStr'] = 'String floatToStr(float val){\n'
    + '  int buf = (int)val;\n'
    + '  String str = String(buf);\n'
    + '  str += ".";\n'
    + '  str += String((int)(val*10)-buf*10);\n'
    + '  return str;\n'
    + '}\n';
*/
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
