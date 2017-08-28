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

  Blockly.Arduino.definitions_['define_define_otto_ascii'] = '/*\n           --------------- \n          |     O   O     |\n          |---------------|\n  YR ==>  |               | <== YL \n           --------------- \n              ||     ||\n              ||     ||\n  RR ==>   -----     -----  <== RL \n          |-----     -----|\n*/\n';

  Blockly.Arduino.definitions_['define_define_otto_init_yl'] = '#define OTTO_PIN_YL ' + dropdown_yl;
  Blockly.Arduino.definitions_['define_define_otto_init_yr'] = '#define OTTO_PIN_YR ' + dropdown_yr;
  Blockly.Arduino.definitions_['define_define_otto_init_rl'] = '#define OTTO_PIN_RL ' + dropdown_rl;
  Blockly.Arduino.definitions_['define_define_otto_init_rr'] = '#define OTTO_PIN_RR ' + dropdown_rr;

  Blockly.Arduino.setups_['setup_otto_init'] = '__otto.initLegs(OTTO_PIN_YL, OTTO_PIN_YR, OTTO_PIN_RL, OTTO_PIN_RR, false);';

  var code = ''
  return code;
};

Blockly.Arduino.otto_calibrate = function(){

  var yl = Blockly.Arduino.valueToCode(this, 'YL', Blockly.Arduino.ORDER_ATOMIC) || 0;
  var yr = Blockly.Arduino.valueToCode(this, 'YR', Blockly.Arduino.ORDER_ATOMIC) || 0;
  var rl = Blockly.Arduino.valueToCode(this, 'RL', Blockly.Arduino.ORDER_ATOMIC) || 0;
  var rr = Blockly.Arduino.valueToCode(this, 'RR', Blockly.Arduino.ORDER_ATOMIC) || 0;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  Blockly.Arduino.definitions_['define_define_otto_trim_yl'] = '#define OTTO_TRIM_YL ' + yl;
  Blockly.Arduino.definitions_['define_define_otto_trim_yr'] = '#define OTTO_TRIM_YR ' + yr;
  Blockly.Arduino.definitions_['define_define_otto_trim_rl'] = '#define OTTO_TRIM_RL ' + rl;
  Blockly.Arduino.definitions_['define_define_otto_trim_rr'] = '#define OTTO_TRIM_RR ' + rr;

  Blockly.Arduino.setups_['setup_otto_trim'] = '__otto.setTrims(OTTO_TRIM_YL, OTTO_TRIM_YR, OTTO_TRIM_RL, OTTO_TRIM_RR);';

  var code = ''
  return code;
};

Blockly.Arduino.otto_home = function(){

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.home();\n'
  return code;
};

Blockly.Arduino.otto_walk = function(){

  var dropdown_direction = this.getFieldValue('DIRECTION');
  var distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC) || 4;
  var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 1000;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.walk(' + distance + ', ' + duration + ', ' + dropdown_direction + ');\n'
  return code;
};

Blockly.Arduino.otto_turn = function(){

  var dropdown_direction = this.getFieldValue('DIRECTION');
  var distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC) || 4;
  var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 1000;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.turn(' + distance + ', ' + duration + ', ' + dropdown_direction + ');\n'
  return code;
};

Blockly.Arduino.otto_bend = function(){

  var dropdown_direction = this.getFieldValue('DIRECTION');
  var distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC) || 1;
  var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 1400;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.bend(' + distance + ', ' + duration + ', ' + dropdown_direction + ');\n'
  return code;
};

Blockly.Arduino.otto_shake_leg = function(){

  var dropdown_direction = this.getFieldValue('DIRECTION');
  var distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC) || 1;
  var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 2000;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.shakeLeg(' + distance + ', ' + duration + ', ' + dropdown_direction + ');\n'
  return code;
};

Blockly.Arduino.otto_freestyle = function(){

  var dropdown_style = this.getFieldValue('STYLE');
  var distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC) || 1;
  var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 1000;
  var height = Blockly.Arduino.valueToCode(this, 'HEIGHT', Blockly.Arduino.ORDER_ATOMIC) || 20;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.' + dropdown_style + '(' + distance + ', ' + duration + ', ' + height + ');\n'
  return code;
};

Blockly.Arduino.otto_moonwalk = function(){

  var dropdown_direction = this.getFieldValue('DIRECTION');
  var distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC) || 4;
  var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 1000;
  var height = Blockly.Arduino.valueToCode(this, 'HEIGHT', Blockly.Arduino.ORDER_ATOMIC) || 20;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.moonwalker(' + distance + ', ' + duration + ', ' + height + ', ' + dropdown_direction + ');\n'
  return code;
};

Blockly.Arduino.otto_crusaito = function(){

  var dropdown_direction = this.getFieldValue('DIRECTION');
  var distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC) || 4;
  var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 1000;
  var height = Blockly.Arduino.valueToCode(this, 'HEIGHT', Blockly.Arduino.ORDER_ATOMIC) || 20;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.crusaito(' + distance + ', ' + duration + ', ' + height + ', ' + dropdown_direction + ');\n'
  return code;
};

Blockly.Arduino.otto_flapping = function(){

  var dropdown_direction = this.getFieldValue('DIRECTION');
  var distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC) || 4;
  var duration = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || 1000;
  var height = Blockly.Arduino.valueToCode(this, 'HEIGHT', Blockly.Arduino.ORDER_ATOMIC) || 20;

  Blockly.Arduino.definitions_['define_include_otto'] = '#include <Otto.h>\n';
  Blockly.Arduino.definitions_['define_define_otto_item'] = 'Otto __otto;\n';

  var code = '__otto.flapping(' + distance + ', ' + duration + ', ' + height + ', ' + dropdown_direction + ');\n'
  return code;
};
