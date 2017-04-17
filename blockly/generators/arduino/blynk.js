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
 * @author ok.okada.hiroyuki@gmail.com (hiroyuki okada)
 */
'use strict';

goog.provide('Blockly.Arduino.blynk');

goog.require('Blockly.Arduino');

Blockly.Arduino.blynk_ethernet_begin = function () {
  var version = this.getFieldValue('VERSION');
  var auth = Blockly.Arduino.valueToCode(this, 'AUTH', Blockly.Arduino.ORDER_ATOMIC) || ''
  var mac = Blockly.Arduino.valueToCode(this, 'MAC_ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED'
  mac = mac.replace(/"/g, "");

  Blockly.Arduino.definitions_['define_spi'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['define_ethernet'] = '#include <Ethernet.h>';
  Blockly.Arduino.definitions_['define_blynk_simple_ethernet'] = '#define BLYNK_PRINT Serial\n' +
    '#include <BlynkSimpleEthernet.h>\n';
  Blockly.Arduino.definitions_['define_arduino_mac'] = 'byte mac[] = {' + mac + '};\n';

  Blockly.Arduino.setups_['setup_serial_' + profile.default.serial] = 'Serial.begin(' + profile.default.serial + ');\n';

  Blockly.Arduino.setups_['setup_blynk_begin'] = 'Blynk.begin(' + auth + ', BLYNK_DEFAULT_DOMAIN,BLYNK_DEFAULT_PORT,mac);\n'

  var code = 'Blynk.run();\n';
  return code;
};

Blockly.Arduino.blynk_write = function () {
  var pin = this.getFieldValue('PIN');
  var statements_action = Blockly.Arduino.statementToCode(this, 'ACTION');

  Blockly.Arduino.definitions_['define_blynk_virtual_' + pin] = 'BLYNK_WRITE(V' + pin + ')\n' +
    '{\n' +
    statements_action +
    '}\n';

  return "";
};

Blockly.Arduino.blynk_param = function () {
  var type = this.getFieldValue('TYPE');

  var code = 'param.' + type + '()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.blynk_merge_param = function () {
  var index = this.getFieldValue('INDEX');
  var type = this.getFieldValue('TYPE');

  var code = 'param[' + index + '].' + type + '()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.blynk_virtual_write = function () {
  var pin = this.getFieldValue('PIN');
  var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0'

  var code = 'Blynk.virtualWrite(V' + pin + ', ' + value + ');\n';
  return code;
};

Blockly.Arduino.blynk_email = function () {
  var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || ''
  var title = Blockly.Arduino.valueToCode(this, 'TITLE', Blockly.Arduino.ORDER_ATOMIC) || ''
  var body = Blockly.Arduino.valueToCode(this, 'BODY', Blockly.Arduino.ORDER_ATOMIC) || ''

  var code = 'Blynk.email(' + address + ', ' + title + ', ' + body + ');\n';
  return code;
};

Blockly.Arduino.blynk_notify = function () {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || ''

  var code = 'Blynk.notify(' + text + ');\n';
  return code;
};


Blockly.Arduino.blynk_tweet = function () {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || ''

  var code = 'Blynk.tweet(' + text + ');\n';
  return code;
};

Blockly.Arduino.blynk_connect = function () {
  var code = 'Blynk.connect()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
