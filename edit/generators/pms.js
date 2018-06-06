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
goog.provide('Blockly.Arduino.pms');

goog.require('Blockly.Arduino');

Blockly.Arduino.pms_read = function() {
  var rxpin = this.getFieldValue('RX_PIN');
  var txpin = this.getFieldValue('TX_PIN');
  var pmlvl = this.getFieldValue('PM_LEVEL');
  var result_symbol = inst_symbol + '_data';
  
  Blockly.Arduino.definitions_['define_pms_include'] = 
    '#include <PMS.h>\n' + 
    '#include <SoftwareSerial.h>\n';

  Blockly.Arduino.definitions_['define_pms_receive_inst'] = 
    'SoftwareSerial pmsSerial' + '(' + rxpin + ', ' + txpin + ');\n' +
    'PMS pms(pmsSerial);\n' +
    'PMS::DATA pmsData;\n';

  Blockly.Arduino.definitions_['define_pms_receive_helper_func_pm1'] = 
    'int pms_read_PM1()\n{\n'
    + '  pms.read(pmsData);\n'
    + '  return pmsData.PM_AE_UG_1_0;\n'
    + '}\n';
  
  Blockly.Arduino.definitions_['define_pms_receive_helper_func_pm2'] = 
    'int pms_read_PM2()\n{\n'
    + '  pms.read(pmsData);\n'
    + '  return pmsData.PM_AE_UG_2_5;\n'
    + '}\n';

    Blockly.Arduino.definitions_['define_pms_receive_helper_func_pm10'] = 
    'int pms_read_PM10()\n{\n'
    + '  pms.read(pmsData);\n'
    + '  return pmsData.PM_AE_UG_10_0;\n'
    + '}\n';

  Blockly.Arduino.setups_['setup_pms_receive_inst'] = 
    'pmsSerial.begin(9600);\n';

  var code = pmlvl + '()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
