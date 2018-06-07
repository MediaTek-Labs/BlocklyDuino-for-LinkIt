/**
 * @license
 * Blockly for LinkIt 7697
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
 * @fileoverview Blocks for I2C ADXL345 sensors.
 * @author MediaTek Labs
 */
'use strict';

goog.provide('Blockly.Arduino.adxl');

goog.require('Blockly.Arduino');

Blockly.Arduino.adxl345_setup = function() {
  Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>'
  Blockly.Arduino.definitions_['define_sensor_include'] = '#include <adxl345_blockly.h>'
  Blockly.Arduino.definitions_['define_adxl_inst'] = 'ADXL345Block adxl345;';
  Blockly.Arduino.setups_['setup_adxl345'] = 'adxl345.begin();';
}

Blockly.Arduino.adxl345_read = function() {
  Blockly.Arduino.adxl345_setup();
  var code = 'adxl345.get' + this.getFieldValue('AXIS') + '()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.adxl345_read_attitude = function() {
  Blockly.Arduino.adxl345_setup();
  var code = 'adxl345.get' + this.getFieldValue('ATTITUDE') + '()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.adxl345_detect = function() {
  Blockly.Arduino.adxl345_setup();
  var code = 'adxl345.detectGesture();\n';
  return code;
};

Blockly.Arduino.adxl345_gesture_detected = function() {
  Blockly.Arduino.adxl345_setup();
  var code = 'adxl345.is' + this.getFieldValue('GESTURE') + 'Detected()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};