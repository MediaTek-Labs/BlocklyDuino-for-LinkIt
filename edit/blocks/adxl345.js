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

goog.provide('Blockly.Blocks.adxl');

goog.require('Blockly.Blocks');

Blockly.Blocks.adxl.HUE = 70;

Blockly.Blocks['adxl345_read'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ADXL345_HELPURL);
    this.setColour(Blockly.Blocks.adxl.HUE);
    this.setTooltip(Blockly.Msg.ADXL345_TOOLTIP);

    this.appendDummyInput()
        .appendField(Blockly.Msg.ADXL345_TITLE)
        .appendField(new Blockly.FieldDropdown([["ADXL345", "DUMMY"]]), "SENSOR");

    this.appendDummyInput()
      .appendField(Blockly.Msg.SIGNAL_PIN)
      .appendField(new Blockly.FieldDropdown([["I2C","PIN"]]), "PIN");

    this.appendDummyInput()
      .appendField(Blockly.Msg.MESUREMENT_TYPE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ADXL345_READ_X,"X"],[Blockly.Msg.ADXL345_READ_Y,"Y"],[Blockly.Msg.ADXL345_READ_Z,"Z"]]), "AXIS")
      .appendField(Blockly.Msg.ADXL345_UNIT);
      
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has beeen deleted.
      return;
    }
    // this.setWarningText(Blockly.Msg.ADXL345_WARNING);
  }
};

Blockly.Blocks['adxl345_read_attitude'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ADXL345_HELPURL);
    this.setColour(Blockly.Blocks.adxl.HUE);
    this.setTooltip(Blockly.Msg.ADXL345_TOOLTIP);

    this.appendDummyInput()
        .appendField(Blockly.Msg.ADXL345_TITLE)
        .appendField(new Blockly.FieldDropdown([["ADXL345", "DUMMY"]]), "SENSOR");

    this.appendDummyInput()
      .appendField(Blockly.Msg.SIGNAL_PIN)
      .appendField(new Blockly.FieldDropdown([["I2C","PIN"]]), "PIN");

    this.appendDummyInput()
      .appendField(Blockly.Msg.ADXL345_ATTITUDE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.ADXL345_PITCH,"Pitch"],
        [Blockly.Msg.ADXL345_ROLL,"Roll"],
      ]), "ATTITUDE")
      .appendField(Blockly.Msg.ADXL345_DEGREE);
      
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has beeen deleted.
      return;
    }
    // this.setWarningText(Blockly.Msg.ADXL345_WARNING);
  }
};

Blockly.Blocks['adxl345_detect'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ADXL345_HELPURL);
    this.setColour(Blockly.Blocks.adxl.HUE);

    this.appendDummyInput()
      .appendField(Blockly.Msg.ADXL345_TITLE)
      .appendField(new Blockly.FieldDropdown([["ADXL345", "DUMMY"]]), "SENSOR")
      .appendField(Blockly.Msg.ADXL345_DETECT)

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has beeen deleted.
      return;
    }
  }
};

Blockly.Blocks['adxl345_gesture_detected'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ADXL345_HELPURL);
    this.setColour(Blockly.Blocks.adxl.HUE);

    this.appendDummyInput()
      .appendField(Blockly.Msg.ADXL345_TITLE)
      .appendField(new Blockly.FieldDropdown([["ADXL345", "DUMMY"]]), "SENSOR")
      .appendField(Blockly.Msg.ADXL345_GESTURE_DETECTED)
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.ADXL345_TAP, 'Tap'],
        [Blockly.Msg.ADXL345_DOUBLE_TAP, 'DoubleTap'],
        [Blockly.Msg.ADXL345_MOTION, 'Activity'],
      ]), "GESTURE");
          
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has beeen deleted.
      return;
    }
  }
};

