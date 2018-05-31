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

Blockly.Arduino.adxl345_read = function() {
  Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>'
  Blockly.Arduino.definitions_['define_adafruit_sensor_include'] = '#include <Adafruit_Sensor.h>'
  Blockly.Arduino.definitions_['define_adafruit_adxl345_u'] = '#include <Adafruit_ADXL345_U.h>'
  Blockly.Arduino.definitions_['define_adafruit_adxl_inst'] = 'Adafruit_ADXL345_Unified adxl345(12345);';

  Blockly.Arduino.setups_['setup_adxl345'] = 'adxl345.begin();\n'
    + '  adxl345.setDataRate(ADXL345_DATARATE_400_HZ);\n'
    + '  adxl345.setDataRange(ADXL345_RANGE_16_G);\n';
 
  var code = '';
  switch(this.getFieldValue('AXIS')){
      case 'X':
        code += 'adxl345.getX()';
      break;
      case 'Y':
        code += 'adxl345.getY()';
      break;
      case 'Z':
        code += 'adxl345.getZ()';
      break;
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
