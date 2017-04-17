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

goog.provide('Blockly.Arduino.shield_bot');

goog.require('Blockly.Arduino');

Blockly.Arduino.shield_bot_setmaxspeed = function() {
  var speed = this.getFieldValue('SPEED');
  speed = speed.replace( /[(|)]/g, '' );

  if(speed > 255) speed = 255;
  else if(speed < 0)  speed = 0;

  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.setMaxSpeed(' + String(speed) + ');\n';
  return code;
};

Blockly.Arduino.shield_bot_setmaxspeed_lr = function() {
  var left = this.getFieldValue('LEFT');
  var right = this.getFieldValue('RIGHT');
  left = left.replace( /[(|)]/g, '' );
  right = right.replace( /[(|)]/g, '' );
  if(left > 255)  left = 255;
  else if(left < 0)  left = 0;
  if(right > 255)  right  = 255;
  else if(right < 0)  right = 0;

  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.setMaxSpeed(' + String(left) + ',' + String(right) + ');\n';
  return code;
};

Blockly.Arduino.shield_bot_motor = function() {
  var rl = this.getFieldValue('RL');
  var direction = Blockly.Arduino.valueToCode(this, 'DIRECTION', Blockly.Arduino.ORDER_ATOMIC) || '0'
  direction = direction.replace( /[(|)]/g, '' );

  if (direction > 127) direction = 127;
  else if(direction < -128) direction = -128;

  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.' + rl + '(' + String(direction) + ');\n';
  return code;
};

Blockly.Arduino.shield_bot_move = function() {
  var move = this.getFieldValue('MOVE');

  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.' + move + '();\n';
  return code;
};

Blockly.Arduino.shield_bot_drive = function() {
  var left = Blockly.Arduino.valueToCode(this, 'LEFT', Blockly.Arduino.ORDER_ATOMIC) || '127'
  var right = Blockly.Arduino.valueToCode(this, 'RIGHT', Blockly.Arduino.ORDER_ATOMIC) || '127'
  left = left.replace( /[(|)]/g, '' );
  right = right.replace( /[(|)]/g, '' );
  if(left > 127)  left = 127;
  else if(left < -128)  left = -128;
  if(right > 127)  right  = 127;
  else if(right < -128)  right = -128;

  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.drive(' + String(left) + ',' + String(right) +');\n';
  return code;
};

Blockly.Arduino.shield_bot_faststop = function() {
  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.fastStop();\n';
  return code;
};

Blockly.Arduino.shield_bot_faststop_left = function() {
  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.fastStopLeft();\n';
  return code;
};

Blockly.Arduino.shield_bot_faststop_right = function() {
  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.fastStopRight();\n';
  return code;
};

Blockly.Arduino.shield_bot_readsensor = function() {
  var sensor = this.getFieldValue('SENSOR');

  Blockly.Arduino.definitions_['include_shield_bot'] = '#include <Shieldbot.h>';
  Blockly.Arduino.definitions_['define_shield_bot'] = 'Shieldbot shieldbot = Shieldbot();\n';

  var code = 'shieldbot.readS' + sensor + '()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


