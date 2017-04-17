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

goog.provide('Blockly.Arduino.interrupts');

goog.require('Blockly.Arduino');

Blockly.Arduino.interrupts_attach = function() {
  var pin = this.getFieldValue('PIN');
  var mode = this.getFieldValue('MODE');
  var content = Blockly.Arduino.statementToCode(this, 'CONTENT');

  Blockly.Arduino.setups_['setup_interrupt_' + pin] = 'attachInterrupt(' + pin + ',' + 'interrupt_' + pin + ',' + mode + ');';

  Blockly.Arduino.definitions_['define_interrupt_' + pin] = 'void interrupt_' + pin +'(){\n'
    + content
    + '}\n';
  return '';
}

Blockly.Arduino.interrupts_detach = function() {
  var pin = this.getFieldValue('PIN');

  var code = 'detachInterrupt(' + pin + ');\n';
  return code;
}

Blockly.Arduino.interrupts = function() {
  return 'interrupts();\n';
}

Blockly.Arduino.interrupts_no = function() {
  return 'noInterrupts();\n';
}

