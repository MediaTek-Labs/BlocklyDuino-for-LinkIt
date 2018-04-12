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
 * @fileoverview Helper functions for generating Otto blocks.
 * @author hi@vox.vg (Zhi-Wei Cai)
 */

goog.provide('Blockly.Arduino.otto');

goog.require('Blockly.Arduino');

Blockly.Arduino.otto_init = function() {

  var dropdown_yl = this.getFieldValue('YL');
  var dropdown_yr = this.getFieldValue('YR');
  var dropdown_rl = this.getFieldValue('RL');
  var dropdown_rr = this.getFieldValue('RR');

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  Blockly.Arduino.definitions_['define_define_otto_ascii'] = '/*\n                  --------------- \n                 |     O   O     |\n                 |---------------|\n  RIGHT LEG ==>  |               | <== LEFT LEG \n                  --------------- \n                     ||     ||\n                     ||     ||\n RIGHT FOOT ==>   -----     -----  <== LEFT FOOT \n                 |-----     -----|\n*/\n';

  Blockly.Arduino.definitions_['define_define_otto_init_yl'] = '#define OTTO_PIN_LEFT_LEG ' + dropdown_yl;
  Blockly.Arduino.definitions_['define_define_otto_init_yr'] = '#define OTTO_PIN_RIGHT_LEG ' + dropdown_yr;
  Blockly.Arduino.definitions_['define_define_otto_init_rl'] = '#define OTTO_PIN_LEFT_FOOT ' + dropdown_rl;
  Blockly.Arduino.definitions_['define_define_otto_init_rr'] = '#define OTTO_PIN_RIGHT_FOOT ' + dropdown_rr;

  Blockly.Arduino.setups_['setup_otto_init'] = '__otto.initLegs(OTTO_PIN_LEFT_LEG, OTTO_PIN_RIGHT_LEG, OTTO_PIN_LEFT_FOOT, OTTO_PIN_RIGHT_FOOT, false);';

  var code = '';
  return code;
};

Blockly.Arduino.otto_calibrate = function(){

  var yl = Blockly.Arduino.valueToCode(this, 'YL', Blockly.Arduino.ORDER_ATOMIC) || 0;
  var yr = Blockly.Arduino.valueToCode(this, 'YR', Blockly.Arduino.ORDER_ATOMIC) || 0;
  var rl = Blockly.Arduino.valueToCode(this, 'RL', Blockly.Arduino.ORDER_ATOMIC) || 0;
  var rr = Blockly.Arduino.valueToCode(this, 'RR', Blockly.Arduino.ORDER_ATOMIC) || 0;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  Blockly.Arduino.definitions_['define_define_otto_trim_yl'] = '#define OTTO_TRIM_LEFT_LEG ' + yl;
  Blockly.Arduino.definitions_['define_define_otto_trim_yr'] = '#define OTTO_TRIM_RIGHT_LEG ' + yr;
  Blockly.Arduino.definitions_['define_define_otto_trim_rl'] = '#define OTTO_TRIM_LEFT_FOOT ' + rl;
  Blockly.Arduino.definitions_['define_define_otto_trim_rr'] = '#define OTTO_TRIM_RIGHT_FOOT ' + rr;

  if ('setup_otto_init' in Blockly.Arduino.setups_) {
    Blockly.Arduino.setups_['setup_otto_init'] = '__otto.initLegs(OTTO_PIN_LEFT_LEG, OTTO_PIN_RIGHT_LEG, OTTO_PIN_LEFT_FOOT, OTTO_PIN_RIGHT_FOOT, true);';
  }

  Blockly.Arduino.setups_['setup_otto_trim'] = '__otto.setTrims(OTTO_TRIM_LEFT_LEG, OTTO_TRIM_RIGHT_LEG, OTTO_TRIM_LEFT_FOOT, OTTO_TRIM_RIGHT_FOOT);';

  var code = '';
  return code;
};

Blockly.Arduino.otto_home = function(){

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.home();\n';
  return code;
};

Blockly.Arduino.otto_walk = function(){

  var dropdown_direction = this.getFieldValue('DIRECTION');
  var distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC) || 4;
  var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 1000;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.walk(' + distance + ', ' + duration + ', ' + dropdown_direction + ');\n';
  return code;
};

Blockly.Arduino.otto_turn = function(){

  var dropdown_direction = this.getFieldValue('DIRECTION');
  var distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC) || 4;
  var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 1000;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.turn(' + distance + ', ' + duration + ', ' + dropdown_direction + ');\n';
  return code;
};

Blockly.Arduino.otto_bend = function(){

  var dropdown_direction = this.getFieldValue('DIRECTION');
  var distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC) || 1;
  var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 1400;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.bend(' + distance + ', ' + duration + ', ' + dropdown_direction + ');\n';
  return code;
};

Blockly.Arduino.otto_shake_leg = function(){

  var dropdown_direction = this.getFieldValue('DIRECTION');
  var distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC) || 1;
  var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 2000;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.shakeLeg(' + distance + ', ' + duration + ', ' + dropdown_direction + ');\n';
  return code;
};

Blockly.Arduino.otto_freestyle = function(){

  var dropdown_style = this.getFieldValue('STYLE');
  var distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC) || 1;
  var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 1000;
  var height = Blockly.Arduino.valueToCode(this, 'HEIGHT', Blockly.Arduino.ORDER_ATOMIC) || 20;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.' + dropdown_style + '(' + distance + ', ' + duration + ', ' + height + ');\n';
  return code;
};

Blockly.Arduino.otto_moonwalk = function(){

  var dropdown_direction = this.getFieldValue('DIRECTION');
  var distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC) || 4;
  var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 1000;
  var height = Blockly.Arduino.valueToCode(this, 'HEIGHT', Blockly.Arduino.ORDER_ATOMIC) || 20;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.moonwalker(' + distance + ', ' + duration + ', ' + height + ', ' + dropdown_direction + ');\n';
  return code;
};

Blockly.Arduino.otto_crusaito = function(){

  var dropdown_direction = this.getFieldValue('DIRECTION');
  var distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC) || 4;
  var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 1000;
  var height = Blockly.Arduino.valueToCode(this, 'HEIGHT', Blockly.Arduino.ORDER_ATOMIC) || 20;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.crusaito(' + distance + ', ' + duration + ', ' + height + ', ' + dropdown_direction + ');\n';
  return code;
};

Blockly.Arduino.otto_flapping = function(){

  var dropdown_direction = this.getFieldValue('DIRECTION');
  var distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC) || 4;
  var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 1000;
  var height = Blockly.Arduino.valueToCode(this, 'HEIGHT', Blockly.Arduino.ORDER_ATOMIC) || 20;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.flapping(' + distance + ', ' + duration + ', ' + height + ', ' + dropdown_direction + ');\n';
  return code;
};

Blockly.Arduino.otto_height = function() {

  var code = this.getFieldValue('HEIGHT');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.otto_ultrasonic_init = function() {

  var dropdown_trigger = this.getFieldValue('TRIGGER_PIN');
  var dropdown_echo = this.getFieldValue('ECHO_PIN');

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  Blockly.Arduino.definitions_['define_define_otto_ultrasonic_init_trigger'] = '#define OTTO_PIN_ULTRASONIC_TRIGGER ' + dropdown_trigger;
  Blockly.Arduino.definitions_['define_define_otto_ultrasonic_init_echo'] = '#define OTTO_PIN_ULTRASONIC_ECHO ' + dropdown_echo;

  Blockly.Arduino.setups_['setup_otto_ultrasonic_init'] = '__otto.initUltrasonic(OTTO_PIN_ULTRASONIC_TRIGGER, OTTO_PIN_ULTRASONIC_ECHO);';

  var code = '';
  return code;
};

Blockly.Arduino.otto_ultrasonic_distance = function() {

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.getDistance()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.otto_buzzer_init = function() {

  var dropdown_pin = this.getFieldValue('PIN');

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  Blockly.Arduino.definitions_['define_define_otto_buzzer_init'] = '#define OTTO_PIN_BUZZER ' + dropdown_pin;

  Blockly.Arduino.setups_['setup_otto_buzzer_init'] = '__otto.initBuzzer(OTTO_PIN_BUZZER);';

  var code = '';
  return code;
};

Blockly.Arduino.otto_buzzer_sing = function() {

  var dropdown_sing = this.getFieldValue('SING');

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.sing(' + dropdown_sing + ');\n';
  return code;
};

Blockly.Arduino.otto_mouth = function() {

  var dropdown_mouth = this.getFieldValue('MOUTH');

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.putMouth(' + dropdown_mouth + ');\n';
  return code;
};

Blockly.Arduino.otto_led_matrix_init = function() {

  var dropdown_din = this.getFieldValue('DIN');
  var dropdown_cs = this.getFieldValue('CS');
  var dropdown_clk = this.getFieldValue('CLK');
  var dropdown_dir = this.getFieldValue('DIR');

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  Blockly.Arduino.definitions_['define_define_otto_led_matrix_init_din'] = '#define OTTO_PIN_LED_DIN ' + dropdown_din;
  Blockly.Arduino.definitions_['define_define_otto_led_matrix_init_din'] = '#define OTTO_PIN_LED_CS_PIN ' + dropdown_cs;
  Blockly.Arduino.definitions_['define_define_otto_led_matrix_init_din'] = '#define OTTO_PIN_LED_CLK_PIN ' + dropdown_clk;

  Blockly.Arduino.setups_['setup_otto_led_matrix_init'] = '__otto.initLEDMatrix(OTTO_PIN_LED_DIN, OTTO_PIN_LED_CS_PIN, ' + dropdown_dir + ');';

  var code = '';
  return code;
};
