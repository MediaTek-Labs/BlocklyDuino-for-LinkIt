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
goog.provide('Blockly.Arduino.infra_red');

goog.require('Blockly.Arduino');

Blockly.Arduino.infra_red_send = function() {
  var command_int = Blockly.Arduino.valueToCode(this, 'COMMAND_INT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  
  Blockly.Arduino.definitions_['define_infra_red_include'] = 
    '#include <IRremote.h>\n';

  Blockly.Arduino.definitions_['define_infra_red_send_inst'] = 
    'IRsend irsend;\n';

  var code = 'irsend.sendRC5(' + command_int + ', 32);\n';
  return code;
};

Blockly.Arduino.infra_red_receive = function() {
  var command_int = this.getFieldValue('COMMAND_INT');
  var pin = this.getFieldValue('PIN');
  var inst_symbol = 'irrecv_' + pin;
  var result_symbol = inst_symbol + '_result';
  var default_value = 0
  
  Blockly.Arduino.definitions_['define_infra_red_include'] = 
    '#include <IRremote.h>\n';

  Blockly.Arduino.definitions_['define_infra_red_receive_inst_pin' + pin] = 
    'IRrecv ' + inst_symbol + '(' + pin + ');\n' +
    'decode_results ' + result_symbol + ';\n'

  Blockly.Arduino.definitions_['define_infra_red_receive_helper_func'] = 
    'int infra_red_decode(IRrecv& recv, decode_results& results, int default_value) {\n'
    + '  if (recv.decode(&results)) {\n'
    + '    recv.resume(); // Receive the next value\n'
    + '    return results.value;\n'
    + '  }\n'
    + '  return default_value;\n'
    + '}\n';

  Blockly.Arduino.setups_['setup_infra_red_receive_inst_pin' + pin] = 
    inst_symbol + '.enableIRIn();\n';

  var code = 'infra_red_decode(' + inst_symbol + ', ' + result_symbol + ', ' + default_value + ')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
