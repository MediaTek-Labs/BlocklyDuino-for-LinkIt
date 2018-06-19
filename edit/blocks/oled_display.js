/**
 * @license
 * Blockly for LinkIt 7697
 *
 * Copyright 2018 MediaTek Inc.
 * https://github.com/MediaTek-Labs/BlocklyDuino-for-LinkIt
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
 * @fileoverview Blocks for I2C interface OLED displays.
 * @author MediaTek Labs
 */
'use strict';

goog.provide('Blockly.Blocks.oled_display');

goog.require('Blockly.Blocks');

Blockly.Blocks.oled_display.HUE = 70;

Blockly.Blocks['oled_display_setting'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.oled_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.INITIALIZES_SETUP_APPENDTEXT)
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(new Blockly.FieldDropdown([["SSD1306", "SSD1306"], ["SH1106", "SH1106"]]), "CHIPSET")
        .appendField(Blockly.Msg.SIGNAL_PIN)
        .appendField(new Blockly.FieldDropdown([["I2C","PIN"]]), "PIN")
        .appendField(Blockly.Msg.GROVE_OLED_DISPLAY_RESOLUTION)
        .appendField(new Blockly.FieldDropdown([["128x64","128x64"]]), "RESOLUTION");
        
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP);
  }
};

Blockly.Blocks['oled_display_clear'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.oled_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_CLEAR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP);
  }
};

Blockly.Blocks['oled_display_draw_commands'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.oled_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_COMMANDS)

    this.appendStatementInput('DRAW_CMD')

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP);
  }
};

Blockly.Blocks['oled_display_draw_line'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.oled_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_LINE_START)
    this.appendValueInput('START_X')
        .setCheck('Number')
        .appendField("X");
    this.appendValueInput('START_Y')
        .setCheck('Number')
        .appendField("Y");
    
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_LINE_END);
    this.appendValueInput('END_X')
        .setCheck('Number')
        .appendField("X");
    this.appendValueInput('END_Y')
        .setCheck('Number')
        .appendField("Y");

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP);
  }
};

Blockly.Blocks['oled_display_draw_box'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.oled_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_BOX_START)
    this.appendValueInput('START_X')
        .setCheck('Number')
        .appendField("X");
    this.appendValueInput('START_Y')
        .setCheck('Number')
        .appendField("Y");
    
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_BOX_END);
    this.appendValueInput('END_X')
        .setCheck('Number')
        .appendField("X");
    this.appendValueInput('END_Y')
        .setCheck('Number')
        .appendField("Y");

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP);
  }
};

Blockly.Blocks['oled_display_draw_frame'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.oled_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_FRAME_START)
    this.appendValueInput('START_X')
        .setCheck('Number')
        .appendField("X");
    this.appendValueInput('START_Y')
        .setCheck('Number')
        .appendField("Y");
    
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_FRAME_END);
    this.appendValueInput('END_X')
        .setCheck('Number')
        .appendField("X");
    this.appendValueInput('END_Y')
        .setCheck('Number')
        .appendField("Y");

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP);
  }
};

Blockly.Blocks['oled_display_draw_disc'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.oled_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_DISC_CENTER)
    this.appendValueInput('CENTER_X')
        .setCheck('Number')
        .appendField("X");
    this.appendValueInput('CENTER_Y')
        .setCheck('Number')
        .appendField("Y");
    
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_DISC_RADIUS)
    this.appendValueInput('RADIUS')
        .setCheck('Number')

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP);
  }
};


Blockly.Blocks['oled_display_draw_circle'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.oled_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_CIRCLE_CENTER)
    this.appendValueInput('CENTER_X')
        .setCheck('Number')
        .appendField("X");
    this.appendValueInput('CENTER_Y')
        .setCheck('Number')
        .appendField("Y");
    
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_CIRCLE_RADIUS)
    this.appendValueInput('RADIUS')
        .setCheck('Number')

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP);
  }
};


Blockly.Blocks['oled_display_draw_text'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.oled_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_TEXT_START)
    this.appendValueInput('START_X')
        .setCheck('Number')
        .appendField("X");
    this.appendValueInput('START_Y')
        .setCheck('Number')
        .appendField("Y");
    
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_TEXT_CONTENT)
    this.appendValueInput('CONTENT')
        .setCheck('String')

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP);
  }
};

Blockly.Blocks['oled_display_set_font'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.oled_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_SET_FONT)
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.OLED_DISPLAY_SET_FONT_SMALL, "u8g2_font_6x10_mf"], 
          [Blockly.Msg.OLED_DISPLAY_SET_FONT_LARGE, "u8g2_font_8x13_mf"]
        ]), "FONT")
        
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP);
  }
};