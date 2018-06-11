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
 * @fileoverview Blocks for I2C MPU9250 sensors.
 * @author MediaTek Labs
 */
'use strict';

goog.provide('Blockly.Arduino.mpu9250');

goog.require('Blockly.Arduino');

Blockly.Arduino.mpu9250_setup = function() {
  Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>'
  Blockly.Arduino.definitions_['define_sensor_include'] = '#include <mpu9250_blockly.h>'
  Blockly.Arduino.definitions_['define_mpu9250_inst'] = 'MPU9250Block mpu9250;';
  Blockly.Arduino.setups_['setup_mpu9250'] = 'mpu9250.begin();';
}

Blockly.Arduino.mpu9250_read_acc = function() {
  Blockly.Arduino.mpu9250_setup();
  var code = 'mpu9250.getAcc' + this.getFieldValue('AXIS') + '()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mpu9250_read_gyro = function() {
  Blockly.Arduino.mpu9250_setup();
  var code = 'mpu9250.getGyro' + this.getFieldValue('AXIS') + '()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mpu9250_read_mag = function() {
  Blockly.Arduino.mpu9250_setup();
  var code = 'mpu9250.getMag' + this.getFieldValue('AXIS') + '()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mpu9250_read_north = function() {
  Blockly.Arduino.mpu9250_setup();
  var code = 'mpu9250.getDegreeToMagNorth()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};