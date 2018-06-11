/**
 * @license
 * Blockly for LinkIt 7697
 * https://github.com/MediaTek-Labs/BlocklyDuino-for-LinkIt
 *
 * Copyright 2018 MediaTek Inc.
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
 * @fileoverview List blocks for Blockly.
 * @author MediaTek Labs
 */
'use strict';

goog.provide('Blockly.Blocks.mpu9250');

goog.require('Blockly.Blocks');

Blockly.Blocks.mpu9250.HUE = 70;

Blockly.Blocks['mpu9250_read_acc'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.MPU9250_HELPURL);
    this.setColour(Blockly.Blocks.mpu9250.HUE);
    this.setTooltip(Blockly.Msg.MPU9250_TOOLTIP);

    this.appendDummyInput()
        .appendField(Blockly.Msg.MPU9250_TITLE)
        .appendField(new Blockly.FieldDropdown([["MPU9250", "DUMMY"]]), "SENSOR");

    this.appendDummyInput()
      .appendField(Blockly.Msg.SIGNAL_PIN)
      .appendField(new Blockly.FieldDropdown([["I2C","PIN"]]), "PIN");

    this.appendDummyInput()
      .appendField(Blockly.Msg.MPU9250_ACC)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MPU9250_READ_X,"X"],[Blockly.Msg.MPU9250_READ_Y,"Y"],[Blockly.Msg.MPU9250_READ_Z,"Z"]]), "AXIS")
      .appendField(Blockly.Msg.MPU9250_ACC_UNIT);
      
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has beeen deleted.
      return;
    }
    // this.setWarningText(Blockly.Msg.MPU9250_WARNING);
  }
};

Blockly.Blocks['mpu9250_read_gyro'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.MPU9250_HELPURL);
    this.setColour(Blockly.Blocks.mpu9250.HUE);
    this.setTooltip(Blockly.Msg.MPU9250_TOOLTIP);

    this.appendDummyInput()
        .appendField(Blockly.Msg.MPU9250_TITLE)
        .appendField(new Blockly.FieldDropdown([["MPU9250", "DUMMY"]]), "SENSOR");

    this.appendDummyInput()
      .appendField(Blockly.Msg.SIGNAL_PIN)
      .appendField(new Blockly.FieldDropdown([["I2C","PIN"]]), "PIN");

    this.appendDummyInput()
      .appendField(Blockly.Msg.MPU9250_GYRO)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MPU9250_READ_X,"X"],[Blockly.Msg.MPU9250_READ_Y,"Y"],[Blockly.Msg.MPU9250_READ_Z,"Z"]]), "AXIS")
      .appendField(Blockly.Msg.MPU9250_GYRO_UNIT);
      
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has beeen deleted.
      return;
    }
    // this.setWarningText(Blockly.Msg.MPU9250_WARNING);
  }
};

Blockly.Blocks['mpu9250_read_mag'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.MPU9250_HELPURL);
    this.setColour(Blockly.Blocks.mpu9250.HUE);
    this.setTooltip(Blockly.Msg.MPU9250_TOOLTIP);

    this.appendDummyInput()
        .appendField(Blockly.Msg.MPU9250_TITLE)
        .appendField(new Blockly.FieldDropdown([["MPU9250", "DUMMY"]]), "SENSOR");

    this.appendDummyInput()
      .appendField(Blockly.Msg.SIGNAL_PIN)
      .appendField(new Blockly.FieldDropdown([["I2C","PIN"]]), "PIN");

    this.appendDummyInput()
      .appendField(Blockly.Msg.MPU9250_MAG)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MPU9250_READ_X,"X"],[Blockly.Msg.MPU9250_READ_Y,"Y"],[Blockly.Msg.MPU9250_READ_Z,"Z"]]), "AXIS")
      .appendField(Blockly.Msg.MPU9250_MAG_UNIT);
      
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has beeen deleted.
      return;
    }
    // this.setWarningText(Blockly.Msg.MPU9250_WARNING);
  }
};

Blockly.Blocks['mpu9250_read_north'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.MPU9250_HELPURL);
    this.setColour(Blockly.Blocks.mpu9250.HUE);
    this.setTooltip(Blockly.Msg.MPU9250_TOOLTIP);

    this.appendDummyInput()
        .appendField(Blockly.Msg.MPU9250_TITLE)
        .appendField(new Blockly.FieldDropdown([["MPU9250", "DUMMY"]]), "SENSOR");

    this.appendDummyInput()
      .appendField(Blockly.Msg.SIGNAL_PIN)
      .appendField(new Blockly.FieldDropdown([["I2C","PIN"]]), "PIN");

    this.appendDummyInput()
      .appendField(Blockly.Msg.MPU9250_NORTH)
      
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has beeen deleted.
      return;
    }
  }
};

