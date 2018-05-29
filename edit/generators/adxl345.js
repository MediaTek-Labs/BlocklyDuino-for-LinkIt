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

goog.provide('Blockly.Arduino.adxl345');

goog.require('Blockly.Arduino');

Blockly.Arduino.adxl345 = function() {
  Blockly.Arduino.definitions_['define_adxl345_inst'] = '#include <Wire.h>\n'
    + '#include <Adafruit_Sensor.h>\n'
    + '#include <Adafruit_ADXL345_U.h>\n'
    + 'Adafruit_ADXL345_Unified adxl345_inst = Adafruit_ADXL345_Unified(12345);\n';

  Blockly.Arduino.setups_['setup_adxl345_inst'] = 'adxl345_inst.begin();\n'
    + '  adxl345_inst.setDataRate(ADXL345_DATARATE_400_HZ);\n'
    + '  adxl345_inst.setDataRange(ADXL345_RANGE_16_G);\n';
 
  var code = '';
  switch(this.getFieldValue('AXIS')){
      case 'X':
        code += 'adxl345_inst.getX()';
      break;
      case 'Y':
        code += 'adxl345_inst.getY()';
      break;
      case 'Z':
        code += 'adxl345_inst.getZ()';
      break;
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
