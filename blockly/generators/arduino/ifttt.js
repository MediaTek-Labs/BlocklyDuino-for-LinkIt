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

goog.provide('Blockly.Arduino.ifttt');

goog.require('Blockly.Arduino');

Blockly.Arduino.ifttt_get_url = function() {
  var value = new Array(3);
  var event = Blockly.Arduino.valueToCode(this, 'EVENT', Blockly.Arduino.ORDER_ATOMIC) || ''
  var key = Blockly.Arduino.valueToCode(this, 'KEY', Blockly.Arduino.ORDER_ATOMIC) || ''
  value[0] = Blockly.Arduino.valueToCode(this, 'VALUE1', Blockly.Arduino.ORDER_ATOMIC) || ''
  value[1] = Blockly.Arduino.valueToCode(this, 'VALUE2', Blockly.Arduino.ORDER_ATOMIC) || ''
  value[2] = Blockly.Arduino.valueToCode(this, 'VALUE3', Blockly.Arduino.ORDER_ATOMIC) || ''
  event = event.replace(/\"/g, "");
  key = key.replace(/\"/g, "");

  var code = '/trigger/' + event + '/with/key/' + key;
  var flg = 0;
  for(var i=0;i<3;i++){
    if (value[i].length > 0){
      if(flg == 0){
        code += '?';
        flg = 1;
      }
      else if(flg == 1){
        code += '&';
      }
      code += 'value' + (i+1) + '=' + value[i];
    }
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
