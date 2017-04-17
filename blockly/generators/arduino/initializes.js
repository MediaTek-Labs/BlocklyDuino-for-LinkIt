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

goog.provide('Blockly.Arduino.initializes');

goog.require('Blockly.Arduino');

Blockly.Arduino.initializes_setup = function() {
  var branch = Blockly.Arduino.statementToCode(this, 'CONTENT');
  branch = branch.replace(/(^\s+)|(\s+$)/g, "");
  Blockly.Arduino.setups_['manual_add'] = branch;

  var code = "";
  return code;
};
Blockly.Arduino.initializes_loop = function() {
  var branch = Blockly.Arduino.statementToCode(this, 'CONTENT');
  branch = branch.replace(/(^\s+)|(\s+$)/g, "");
  var code = branch;
  return code;
};
