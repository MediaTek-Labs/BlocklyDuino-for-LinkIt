/**
 * @license
 * Visual Blocks Editor
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

goog.provide('Blockly.Blocks.otto');

goog.require('Blockly.Blocks');

Blockly.Blocks.otto.HUE = 100;

Blockly.Blocks['otto_init'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_INIT_TITLE)
      .appendField(Blockly.Msg.OTTO_LEFT_LEG)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "YL")
      .appendField(Blockly.Msg.OTTO_RIGHT_LEG)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "YR")
      .appendField(Blockly.Msg.OTTO_LEFT_FOOT)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "RL")
      .appendField(Blockly.Msg.OTTO_RIGHT_FOOT)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "RR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OTTO_INIT_TOOLTIP);
  }
};

Blockly.Blocks['otto_calibrate'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_CALIBRATE_TITLE)
    this.appendValueInput('YL')
      .setCheck('Number')
      .appendField(Blockly.Msg.OTTO_LEFT_LEG);
    this.appendValueInput('YR')
      .setCheck('Number')
      .appendField(Blockly.Msg.OTTO_RIGHT_LEG);
    this.appendValueInput('RL')
      .setCheck('Number')
      .appendField(Blockly.Msg.OTTO_LEFT_FOOT);
    this.appendValueInput('RR')
      .setCheck('Number')
      .appendField(Blockly.Msg.OTTO_RIGHT_FOOT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OTTO_CALIBRATE_TOOLTIP);
  }
};

Blockly.Blocks['otto_home'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_HOME_TITLE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OTTO_CALIBRATE_TOOLTIP);
  }
};

Blockly.Blocks['otto_walk'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_WALK_TITLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.OTTO_DIRECTION_FORWARD, "FORWARD"],  [Blockly.Msg.OTTO_DIRECTION_BACKWARD, "BACKWARD"]]), "DIRECTION");
    this.appendValueInput('DISTANCE')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_DISTANCE_UNIT);
    this.appendValueInput('DURATION')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_DURATION_UNIT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OTTO_WALK_TOOLTIP);
  }
};

Blockly.Blocks['otto_turn'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_TURN_TITLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.OTTO_DIRECTION_LEFT, "LEFT"], [Blockly.Msg.OTTO_DIRECTION_RIGHT, "RIGHT"]]), "DIRECTION");
    this.appendValueInput('DISTANCE')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_DISTANCE_UNIT);
    this.appendValueInput('DURATION')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_DURATION_UNIT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OTTO_TURN_TOOLTIP);
  }
};

Blockly.Blocks['otto_bend'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_BEND_TITLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.OTTO_DIRECTION_LEFT, "LEFT"], [Blockly.Msg.OTTO_DIRECTION_RIGHT, "RIGHT"]]), "DIRECTION");
    this.appendValueInput('DISTANCE')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_DISTANCE_UNIT);
    this.appendValueInput('DURATION')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_DURATION_UNIT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OTTO_BEND_TOOLTIP);
  }
};

Blockly.Blocks['otto_shake_leg'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_SHAKE_LEG_TITLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.OTTO_DIRECTION_LEFT, "LEFT"], [Blockly.Msg.OTTO_DIRECTION_RIGHT, "RIGHT"]]), "DIRECTION");
    this.appendValueInput('DISTANCE')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_DISTANCE_UNIT);
    this.appendValueInput('DURATION')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_DURATION_UNIT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OTTO_SHAKE_LEG_TOOLTIP);
  }
};

Blockly.Blocks['otto_freestyle'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_FREESTYLE_TITLE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.OTTO_STYLE_UP_DOWN, "updown"],
        [Blockly.Msg.OTTO_STYLE_ASC_TURN, "ascendingTurn"],
        [Blockly.Msg.OTTO_STYLE_SWING, "swing"],
        [Blockly.Msg.OTTO_STYLE_TIP_TOE_SWING, "tiptoeSwing"],
        [Blockly.Msg.OTTO_STYLE_JITTER, "jitter"]]), "STYLE");
    this.appendValueInput('DISTANCE')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_DISTANCE_UNIT);
    this.appendValueInput('DURATION')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_DURATION_UNIT);
    this.appendValueInput('HEIGHT')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_HEIGHT_UNIT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OTTO_FREESTYLE_TOOLTIP);
  }
};

Blockly.Blocks['otto_flapping'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_FLAPPING_TITLE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.OTTO_DIRECTION_FORWARD, "FORWARD"],
        [Blockly.Msg.OTTO_DIRECTION_BACKWARD, "BACKWARD"]]), "DIRECTION");
    this.appendValueInput('DISTANCE')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_DISTANCE_UNIT);
    this.appendValueInput('DURATION')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_DURATION_UNIT);
    this.appendValueInput('HEIGHT')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_HEIGHT_UNIT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OTTO_FLAPPING_TOOLTIP);
  }
};

Blockly.Blocks['otto_crusaito'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_CRUSAITO_TITLE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.OTTO_DIRECTION_FORWARD, "FORWARD"],
        [Blockly.Msg.OTTO_DIRECTION_BACKWARD, "BACKWARD"]]), "DIRECTION");
    this.appendValueInput('DISTANCE')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_DISTANCE_UNIT);
    this.appendValueInput('DURATION')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_DURATION_UNIT);
    this.appendValueInput('HEIGHT')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_HEIGHT_UNIT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OTTO_CRUSAITO_TOOLTIP);
  }
};

Blockly.Blocks['otto_moonwalk'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_MOONWALK_TITLE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.OTTO_DIRECTION_LEFT, "LEFT"],
        [Blockly.Msg.OTTO_DIRECTION_RIGHT, "RIGHT"]]), "DIRECTION");
    this.appendValueInput('DISTANCE')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_DISTANCE_UNIT);
    this.appendValueInput('DURATION')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_DURATION_UNIT);
    this.appendValueInput('HEIGHT')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_HEIGHT_UNIT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OTTO_MOONWALK_TOOLTIP);
  }
};

Blockly.Blocks['otto_height'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_HEIGHT_TITLE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.OTTO_HEIGHT_SMALL, "SMALL"],
        [Blockly.Msg.OTTO_DIRECTION_MEDIUM, "MEDIUM"],
        [Blockly.Msg.OTTO_DIRECTION_BIG, "BIG"]]), "HEIGHT");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.OTTO_HEIGHT_TOOLTIP);
  }
};

Blockly.Blocks['otto_ultrasonic_init'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_ULTRASONIC_INIT_TITLE)
      .appendField(Blockly.Msg.OTTO_TRIGGER_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "TRIGGER_PIN")
      .appendField(Blockly.Msg.OTTO_ECHO_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "ECHO_PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OTTO_ULTRASONIC_INIT_TOOLTIP);
  }
};

Blockly.Blocks['otto_ultrasonic_distance'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_ULTRASONIC_DISTANCE_TITLE);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.OTTO_ULTRASONIC_DISTANCE_TOOLTIP);
  }
};

Blockly.Blocks['otto_buzzer_init'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_BUZZER_INIT_TITLE)
      .appendField(Blockly.Msg.OTTO_BUZZER_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OTTO_BUZZER_INIT_TOOLTIP);
  }
};

Blockly.Blocks['otto_buzzer_sing'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OTTO_HELPURL);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OTTO_BUZZER_SING_TITLE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.OTTO_BUZZER_SING_CONNECTION, "S_connection"],
        [Blockly.Msg.OTTO_BUZZER_SING_DISCONNECTION, "S_disconnection"],
        [Blockly.Msg.OTTO_BUZZER_SING_BUTTON_PUSHED, "S_buttonPushed"],
        [Blockly.Msg.OTTO_BUZZER_SING_MODEL_1, "S_mode1"],
        [Blockly.Msg.OTTO_BUZZER_SING_MODEL_2, "S_mode2"],
        [Blockly.Msg.OTTO_BUZZER_SING_MODEL_3, "S_mode3"],
        [Blockly.Msg.OTTO_BUZZER_SING_SUPRISE, "S_surprise"],
        [Blockly.Msg.OTTO_BUZZER_SING_OH_OH_1, "S_OhOoh"],
        [Blockly.Msg.OTTO_BUZZER_SING_OH_OH_2, "S_OhOoh2"],
        [Blockly.Msg.OTTO_BUZZER_SING_CUDDLY, "S_cuddly"],
        [Blockly.Msg.OTTO_BUZZER_SING_SLEEPING, "S_sleeping"],
        [Blockly.Msg.OTTO_BUZZER_SING_HAPPY, "S_happy"],
        [Blockly.Msg.OTTO_BUZZER_SING_SUPER_HAPPY, "S_superHappy"],
        [Blockly.Msg.OTTO_BUZZER_SING_HAPPY_SHORT, "S_happy_short"],
        [Blockly.Msg.OTTO_BUZZER_SING_SAD, "S_sad"],
        [Blockly.Msg.OTTO_BUZZER_SING_CONFUSED, "S_confused"],
        [Blockly.Msg.OTTO_BUZZER_SING_FART_1, "S_fart1"],
        [Blockly.Msg.OTTO_BUZZER_SING_FART_2, "S_fart2"],
        [Blockly.Msg.OTTO_BUZZER_SING_FART_3, "S_fart3"]]), "SING");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OTTO_BUZZER_INIT_TOOLTIP);
  }
};
