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

Blockly.Arduino.ultrasonic_setting = function() {
  var trig_pin = this.getFieldValue('TRIG');
  var echo_pin = this.getFieldValue('ECHO');
  var reset_pin = this.getFieldValue('RESET');

  Blockly.Arduino.definitions_['define_sonic_timeout'] = 'int Sonic_Time_out = 3000;\n';

  Blockly.Arduino.setups_['setup_output_' + trig_pin] = 'pinMode(' + trig_pin + ', OUTPUT);';
  Blockly.Arduino.setups_['setup_output_' + echo_pin] = 'pinMode(' + echo_pin + ', INPUT);';
  Blockly.Arduino.setups_['setup_output_' + reset_pin] = 'pinMode(' + reset_pin + ', OUTPUT);';

  Blockly.Arduino.definitions_['define_Sonic_Timing'] = 'long Sonic_Timing(){\n'+
    "  digitalWrite(" + trig_pin + ", LOW);\n" +
    "  delayMicroseconds(2);\n" +
    "  digitalWrite(" + trig_pin + ", HIGH);\n" +
    "  delayMicroseconds(10);\n" +
    "  digitalWrite(" + trig_pin + ", LOW);\n" +
    "  long duration = pulseIn(" + echo_pin + ",HIGH,Sonic_Time_out);\n" +
    "  if ( duration == 0 ){\n" +
    "    duration = Sonic_Time_out;\n" +
    "    digitalWrite(" + reset_pin + ", HIGH);\n" +
    "    delay(25);\n" +
    "    digitalWrite(" + reset_pin + " ,LOW);\n" +
    "    delay(225);\n" +
    "  }\n"+
    "  return duration;\n"+
    "}\n";

  var code = '';
  return code;
};

Blockly.Arduino.ultrasonic_maxrange = function() {
  var unit = this.getFieldValue('UNIT');
  var max_range = this.getFieldValue('MAXRANGE');
  if(unit == "CM"){
    Blockly.Arduino.definitions_['define_sonic_timeout'] = 'int Sonic_Time_out = ' + max_range + '*2*29;\n';
  }else{
    Blockly.Arduino.definitions_['define_sonic_timeout'] = 'int Sonic_Time_out = ' + max_range + '*2*72;\n';
  }
  var code = "";
  return code;
}

Blockly.Arduino.ultrasonic_distance = function() {
  var code;
  var unit = this.getFieldValue('UNIT');
  if(unit == "CM"){
    code = "Sonic_Timing()/29/2";
  }else{
    code = "Sonic_Timing()/74/2";
  }
  return [code,Blockly.Arduino.ORDER_ATOMIC];
};
