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

goog.provide('Blockly.Arduino.eeprom');

goog.require('Blockly.Arduino');

Blockly.Arduino.eeprom_getsize = function() {
  Blockly.Arduino.definitions_['define_eeprom'] = '#include <EEPROM.h>\n';

  var code = 'EEPROM.length()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.eeprom_read = function() {
  Blockly.Arduino.definitions_['define_eeprom'] = '#include <EEPROM.h>\n';

  var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0'
  

  var code = 'EEPROM.read(' + address + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.eeprom_write = function() {
  Blockly.Arduino.definitions_['define_eeprom'] = '#include <EEPROM.h>\n';

  var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'

  var code = 'EEPROM.write('+ address + ', ' + content + ');\n';
  return code;
};