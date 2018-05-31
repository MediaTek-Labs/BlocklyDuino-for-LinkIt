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
goog.provide('Blockly.Arduino.ultrasonic');

goog.require('Blockly.Arduino');

Blockly.Arduino.ultrasonic_read = function() {
  var trig_pin = this.getFieldValue('TRIG');
  var echo_pin = this.getFieldValue('ECHO');
  var unit = this.getFieldValue('MEASUREMENT');
  var inst_symbol = 'ultrasonic_' + trig_pin + '_' + echo_pin;

  Blockly.Arduino.definitions_['define_ultrasonic_include'] = 
    '#include <Ultrasonic.h>\n';

  Blockly.Arduino.definitions_['define_ultrasonic_inst_' + inst_symbol] = 
    'Ultrasonic ' + inst_symbol + '(' + trig_pin + ', ' + echo_pin + ');\n';

  var code;
  if(unit == "CM"){
    code = inst_symbol + ".convert(" + inst_symbol + '.timing(), Ultrasonic::' + 'CM)';
  }else{
    code = inst_symbol + ".convert(" + inst_symbol + '.timing(), Ultrasonic::' + 'IN)';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
