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

goog.provide('Blockly.Arduino.htu21d');

goog.require('Blockly.Arduino');

Blockly.Arduino.htu21d = function() {
  Blockly.Arduino.definitions_['define_htu21d_inst'] = '#include <Wire.h>\n'
    + '#include "SparkFunHTU21D.h"\n'
    + 'HTU21D htu21d_inst;\n';

  Blockly.Arduino.setups_['setup_htu21d_inst'] = 'htu21d_inst.begin();\n';

  var code = '';
  switch(this.getFieldValue('MEASUREMENT')){
    case 'HUMIDITY':
      code += '(float)(htu21d_inst' + '.readHumidity())';
      break;
    case 'TEMPERATURE_C':
      code += '(float)(htu21d_inst' + '.readTemperature())';
      break;
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
