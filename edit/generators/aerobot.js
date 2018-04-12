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
 * @fileoverview Generating Arduino for control blocks.
 * @author gasolin@gmail.com  (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.aerobot');

goog.require('Blockly.Arduino');

Blockly.Arduino.aerobot_move = function() {
  var direction = this.getFieldValue('DIRECTION');

  Blockly.Arduino.definitions_['include_aerobot'] = '#include <AERobot.h>';
  Blockly.Arduino.setups_['init_aerobot'] = 'initAERobot();';
  Blockly.Arduino.setups_['seed_aerobot'] = 'randomSeed(1);\n';

  var code = 'move_' + direction + '();\n';
  return code;
};

Blockly.Arduino.aerobot_rotate = function() {
  var direction = this.getFieldValue('DIRECTION');

  Blockly.Arduino.definitions_['include_aerobot'] = '#include <AERobot.h>';
  Blockly.Arduino.setups_['init_aerobot'] = 'initAERobot();';
  Blockly.Arduino.setups_['seed_aerobot'] = 'randomSeed(1);\n';

  var code = 'rotate_' + direction + '();\n';
  return code;
};

Blockly.Arduino.aerobot_lightsens = function() {
  var sens = this.getFieldValue('SENS');

  Blockly.Arduino.definitions_['include_aerobot'] = '#include <AERobot.h>';
  Blockly.Arduino.setups_['init_aerobot'] = 'initAERobot();\n';
  Blockly.Arduino.setups_['seed_aerobot'] = 'randomSeed(1);\n';

  var code = 'lightSens(' + sens + ');\n';
  return code;
};

Blockly.Arduino.aerobot_distsens = function() {
  var sens = this.getFieldValue('SENS');

  Blockly.Arduino.definitions_['include_aerobot'] = '#include <AERobot.h>';
  Blockly.Arduino.setups_['init_aerobot'] = 'initAERobot();';
  Blockly.Arduino.setups_['seed_aerobot'] = 'randomSeed(1);\n';

  var code = 'distSens(' + sens + ');\n';
  return code;
};

Blockly.Arduino.aerobot_linesens = function() {
  var sens = this.getFieldValue('SENS');

  Blockly.Arduino.definitions_['include_aerobot'] = '#include <AERobot.h>';
  Blockly.Arduino.setups_['init_aerobot'] = 'initAERobot();';
  Blockly.Arduino.setups_['seed_aerobot'] = 'randomSeed(1);\n';

  var code = 'lineSens();\n';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

Blockly.Arduino.aerobot_setled = function() {
  var colour_rgb = this.getFieldValue('RGB');

  Blockly.Arduino.definitions_['include_aerobot'] = '#include <AERobot.h>';
  Blockly.Arduino.setups_['init_aerobot'] = 'initAERobot();';
  Blockly.Arduino.setups_['seed_aerobot'] = 'randomSeed(1);\n';

  var code = 'setLED(' + hexToR(colour_rgb)+','+hexToG(colour_rgb)+',' + hexToB(colour_rgb)+');\n';
  return code;
};

