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
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.lcd');

goog.require('Blockly.Blocks');

Blockly.Blocks.lcd.HUE = 215;

Blockly.Blocks.lcd.image = filepath.media+'/lcd.jpg';

Blockly.Blocks['lcd_init'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_INIT_HELPURL);
    this.setColour(Blockly.Blocks.lcd.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image, 64, 64))
      .appendField(Blockly.Msg.LCD_INIT_TITLE)
      .appendField(Blockly.Msg.LCD_INIT_RS)
      .appendField(new Blockly.FieldDropdown(profile.arduino.digital), "RS")
    this.appendDummyInput()
      .appendField(Blockly.Msg.LCD_INIT_RW)
      .appendField(new Blockly.FieldDropdown(profile.arduino.lcd), "RW")
    this.appendDummyInput()
      .appendField(Blockly.Msg.LCD_INIT_ENABLE)
      .appendField(new Blockly.FieldDropdown(profile.arduino.digital), "ENABLE")
    this.appendDummyInput()
      .appendField(Blockly.Msg.LCD_INIT_D4)
      .appendField(new Blockly.FieldDropdown(profile.arduino.digital), "D4")
    this.appendDummyInput()
      .appendField(Blockly.Msg.LCD_INIT_D5)
      .appendField(new Blockly.FieldDropdown(profile.arduino.digital), "D5")
    this.appendDummyInput()
      .appendField(Blockly.Msg.LCD_INIT_D6)
      .appendField(new Blockly.FieldDropdown(profile.arduino.digital), "D6")
    this.appendDummyInput()
      .appendField(Blockly.Msg.LCD_INIT_D7)
      .appendField(new Blockly.FieldDropdown(profile.arduino.digital), "D7")
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_INIT_TOOLTIP);
  }
};

Blockly.Blocks['lcd_begin'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_BEGIN_HELPURL);
    this.setColour(Blockly.Blocks.lcd.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image, 64, 64))
      .appendField(Blockly.Msg.LCD_BEGIN_TITLE)
      .appendField(Blockly.Msg.COL)
      .appendField(new Blockly.FieldTextInput("16"),"COLS");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ROW)
      .appendField(new Blockly.FieldTextInput("2"),"ROWS");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_BEGIN_TOOLTIP);
  }
};

Blockly.Blocks['lcd_print'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_PRINT_HELPURL);
    this.setColour(Blockly.Blocks.lcd.HUE);
    this.appendValueInput("PRINT")
      .appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image, 64, 64))
      .appendField(Blockly.Msg.LCD_PRINT_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_PRINT_TOOLTIP);
  }
};

Blockly.Blocks['lcd_setcursor'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_SETCURSOR_HELPURL);
    this.setColour(Blockly.Blocks.lcd.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image, 64, 64))
      .appendField(Blockly.Msg.LCD_SETCURSOR_TITLE)
      .appendField(Blockly.Msg.COL)
      .appendField(new Blockly.FieldTextInput("0"),"COL");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ROW)
      .appendField(new Blockly.FieldTextInput("0"),"ROW");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_SETCURSOR_TOOLTIP);
  }
};

Blockly.Blocks['lcd_custom_setcursor'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_SETCURSOR_HELPURL);
    this.setColour(Blockly.Blocks.lcd.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image, 64, 64))
      .appendField(Blockly.Msg.LCD_SETCURSOR_TITLE);
    this.appendValueInput("COL")
      .setCheck("Number")
      .appendField(Blockly.Msg.COL);
    this.appendValueInput("ROW")
      .setCheck("Number")
      .appendField(Blockly.Msg.ROW);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_SETCURSOR_TOOLTIP);
  }
};


Blockly.Blocks['lcd_clear'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_CLEAR_HELPURL);
    this.setColour(Blockly.Blocks.lcd.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image, 64, 64))
      .appendField(Blockly.Msg.LCD_CLEAR_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_CLEAR_TOOLTIP);
  }
};

Blockly.Blocks['lcd_scrolldisplayleft'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_SCROLL_DISPLAY_LEFT_HELPURL);
    this.setColour(Blockly.Blocks.lcd.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image, 64, 64))
      .appendField(Blockly.Msg.LCD_SCROLL_DISPLAY_LEFT_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_SCROLL_DISPLAY_LEFT_TOOLTIP);
  }
};

Blockly.Blocks['lcd_scrolldisplayright'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_SCROLL_DISPLAY_RIGHT_HELPURL);
    this.setColour(Blockly.Blocks.lcd.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image, 64, 64))
      .appendField(Blockly.Msg.LCD_SCROLL_DISPLAY_RIGHT_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_SCROLL_DISPLAY_RIGHT_TOOLTIP);
  }
};

Blockly.Blocks['lcd_switch_scroll'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_AUTOSCROLL_HELPURL);
    this.setColour(Blockly.Blocks.lcd.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image, 64, 64))
      .appendField(Blockly.Msg.LCD_AUTOSCROLL_TITLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ON,"1"],[Blockly.Msg.OFF,"0"]]), 'SW');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_AUTOSCROLL_TOOLTIP);
  }
};

Blockly.Blocks['lcd_autoscroll'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_AUTOSCROLL_HELPURL);
    this.setColour(Blockly.Blocks.lcd.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image, 64, 64))
      .appendField(Blockly.Msg.LCD_AUTOSCROLL_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_AUTOSCROLL_TOOLTIP);
  }
};

Blockly.Blocks['lcd_noautoscroll'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_NOAUTOSCROLL_HELPURL);
    this.setColour(Blockly.Blocks.lcd.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image, 64, 64))
      .appendField(Blockly.Msg.LCD_NOAUTOSCROLL_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_NOAUTOSCROLL_TOOLTIP);
  }
};

Blockly.Blocks['lcd_lefttoright'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_LEFTTORIGHT_HELPURL);
    this.setColour(Blockly.Blocks.lcd.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image, 64, 64))
      .appendField(Blockly.Msg.LCD_LEFTTORIGHT_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_LEFTTORIGHT_TOOLTIP);
  }
};

Blockly.Blocks['lcd_righttoleft'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LCD_RIGHTTOLEFT_HELPURL);
    this.setColour(Blockly.Blocks.lcd.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.lcd.image, 64, 64))
      .appendField(Blockly.Msg.LCD_RIGHTTOLEFT_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_RIGHTTOLEFT_TOOLTIP);
  }
};
