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

  var dht_inst = sensor.toLowerCase() + '_p' + pin

  Blockly.Arduino.definitions_['define_dht_include'] = '#include <DHT.h>'
  Blockly.Arduino.definitions_['define_dht_' + dht_inst] = 'DHT ' + dht_inst + '(' + pin + ', ' + sensor + ');';  
  Blockly.Arduino.setups_['setup_dht_' + pin + '_' + sensor] = dht_inst + '.begin();'

  var code = '';
  switch(type){
      case 'h':
        code += dht_inst + '.readHumidity()';
      break;
      case 'C':
        code += dht_inst + '.readTemperature()';
      break;
      case 'F':
        code += dht_inst + '.readTemperature(true)';
      break;
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
