/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
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
 * @fileoverview Generating Arduino for logic blocks.
 * @author gasolin@gmail.com  (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.involt');

goog.require('Blockly.Arduino');

Blockly.Arduino.involt_directmode = function() {
  var bool = (this.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  Blockly.Arduino.definitions_['define_directmode'] = 'boolean directMode = ' + bool + ';\n';
  var code = '';
  return code;
};

Blockly.Arduino.involt_chromereceive = function() {
  Blockly.Arduino.definitions_['define_chromeDigital'] = 'int chromeDigital[] = {};\n';
  Blockly.Arduino.definitions_['define_stringV'] = 'String V = "V";\n';

  Blockly.Arduino.setups_['setup_serial_'+ profile.default.serial] = 'Serial.begin(115200);\n';
  var code = 'chromeReceive();\n';

  Blockly.Arduino.definitions_['define_chromeSend'] = 'void chromeSend(int pinNumber, int sendValue)\n'+
    '{\n'+
    '  String A = "A";\n'+
    '  String E = "E";\n'+
    '  Serial.println(A+pinNumber+V+sendValue+E);\n'+
    '}\n\n';

  Blockly.Arduino.definitions_['define_chromeReceive'] = 'void chromeReceive()\n'+
    '{\n'+
    '  String chrome;\n'+
    '  String pwm = "P";\n'+
    '  String dig = "D";\n'+
    '  int pin;\n'+
    '  int val;\n'+
    '  int chromeLen;\n'+
    '  if(Serial.available() > 0){\n'+
    "    String chrome = Serial.readStringUntil('¥n');\n"+
    '    int chromeLen = chrome.length();\n'+
    '    String pinRaw = chrome.substring(1,chrome.indexOf(V));\n'+
    '    String valRaw = chrome.substring(chrome.indexOf(V)+1,chromeLen);\n'+
    '    pin = pinRaw.toInt();\n'+
    '    val = valRaw.toInt();\n'+
    '    \n'+
    '    if(directMode){\n'+
    '      if (chrome.indexOf(dig) == 0){\n'+
    '        digitalWrite(pin, val);\n'+
    '      }\n'+
    '      else if (chrome.indexOf(pwm) == 0 ){\n'+
    '        analogWrite(pin, val);\n'+
    '      }\n'+
    '    }\n'+
    '    else{\n'+
    '      chromeDigital[pin]=val;\n'+
    '    }\n'+
    '  }\n'+
    '}\n\n';

  return code;
};

Blockly.Arduino.involt_sendvalue = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'pinMode(' + dropdown_pin + ',OUTPUT);\n';
  return code;
};

Blockly.Arduino.involt_receivevalue = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'chromeSend(0, analogRead(' + dropdown_pin + '));\n';
  return code;
};

