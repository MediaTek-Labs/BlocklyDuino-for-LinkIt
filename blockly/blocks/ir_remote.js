/**
 * @fileoverview Blockly blocks to use a SparkFun IT remote control
 * @author gabrielkrell (Gabriel Krell)
 */
'use strict';

goog.provide('Blockly.Blocks.ir_remote');

goog.require('Blockly.Blocks');

Blockly.Blocks.ir_remote.HUE = 225;

Blockly.Blocks.ir_remote.image = filepath.media+'/ir_remote.png';

Blockly.Blocks['ir_remote_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.ir_remote.image, 64, 64))
        .appendField(Blockly.Msg.IR_REMOTE_GET)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, "Unsigned_Long");
    this.setColour(Blockly.Blocks.ir_remote.HUE);
    this.setTooltip(Blockly.Msg.IR_REMOTE_TOOLTIP_GET);
    this.setHelpUrl(Blockly.Msg.IR_REMOTE_BUTTON_HELPURL);
  }
};

Blockly.Blocks['ir_remote_button'] = {
  init: function() {
    var BUTTONS =
      [[Blockly.Msg.IR_REMOTE_BUTTON_POWER, 'POWER'],
       [Blockly.Msg.IR_REMOTE_BUTTON_A, 'A'],
       [Blockly.Msg.IR_REMOTE_BUTTON_B, 'B'],
       [Blockly.Msg.IR_REMOTE_BUTTON_C, 'C'],
       [Blockly.Msg.IR_REMOTE_BUTTON_UP, 'UP'],
       [Blockly.Msg.IR_REMOTE_BUTTON_DOWN, 'DOWN'],
       [Blockly.Msg.IR_REMOTE_BUTTON_LEFT, 'LEFT'],
       [Blockly.Msg.IR_REMOTE_BUTTON_RIGHT, 'RIGHT'],
       [Blockly.Msg.IR_REMOTE_BUTTON_SELECT, 'SELECT']]
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.Blocks.ir_remote.image, 64, 64))
        .appendField(new Blockly.FieldDropdown(BUTTONS), 'BUTTON')
        .appendField(Blockly.Msg.IR_REMOTE_BUTTON_BUTTON);
    this.setOutput(true, "Unsigned_Long");
    this.setColour(Blockly.Blocks.ir_remote.HUE);
    this.setHelpUrl(Blockly.Msg.IR_REMOTE_BUTTON_HELPURL);
    var thisBlock = this;
    this.setTooltip(function() {
      var currButton = thisBlock.getFieldValue('BUTTON');
      var TOOLTIPS =  {
        'POWER': Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_POWER,
        'A': Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_A,
        'B': Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_B,
        'C': Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_C,
        'UP': Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_UP,
        'DOWN': Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_DOWN,
        'LEFT': Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_LEFT,
        'RIGHT': Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_RIGHT,
        'SELECT': Blockly.Msg.IR_REMOTE_TOOLTIP_BUTTON_SELECT
      };
      return TOOLTIPS[currButton];
    });
  }
};
