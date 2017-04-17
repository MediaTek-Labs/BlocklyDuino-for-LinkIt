//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b

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
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */

goog.provide('Blockly.Blocks.aerobot');

goog.require('Blockly.Blocks');

Blockly.Blocks.aerobot.HUE = 200;

Blockly.Blocks.aerobot.image = filepath.media + '/aerobot.jpg';

Blockly.Blocks.aerobot.checkBlocks = function(obj) {
  var legal = false;
  var current = obj.type;
  var blocks = obj.workspace.getAllBlocks();
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i].type == 'aerobot_move' ||
        blocks[i].type == 'aerobot_rotate' ||
        blocks[i].type == 'aerobot_lightsens' ||
        blocks[i].type == 'aerobot_linesens' ||
        blocks[i].type == 'aerobot_setled' ||
        blocks[i].type == 'aerobot_distsens') {
      if (blocks[i].type != current) {
        legal = true;
      }
      break;
    }
  }
  return legal;
};

Blockly.Blocks['aerobot_move'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.AEROBOT_HELPURL);
    this.setColour(Blockly.Blocks.aerobot.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.aerobot.image, 64, 64))
      .appendField(Blockly.Msg.AEROBOT_MOVE_TITLE)
      .appendField(new Blockly.FieldDropdown([
      [Blockly.Msg.AEROBOT_FORWARD, "forward"],
      [Blockly.Msg.AEROBOT_BACKWARD, "backward"],
      [Blockly.Msg.AEROBOT_STOP, "stop"],
      [Blockly.Msg.AEROBOT_TURN_LEFT, "cw"],
      [Blockly.Msg.AEROBOT_TURN_RIGHT, "ccw"]
    ]), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AEROBOT_MOVE_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    if (!Blockly.Blocks.aerobot.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.AEROBOT_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['aerobot_rotate'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.AEROBOT_HELPURL);
    this.setColour(Blockly.Blocks.aerobot.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.aerobot.image, 64, 64))
      .appendField(Blockly.Msg.AEROBOT_ROTATE_TITLE)
      .appendField(new Blockly.FieldDropdown([
      [Blockly.Msg.AEROBOT_ROTATE_LEFT, "cw"],
      [Blockly.Msg.AEROBOT_ROTATE_RIGHT, "ccw"]
    ]), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AEROBOT_ROTATE_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    if (!Blockly.Blocks.aerobot.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.AEROBOT_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['aerobot_lightsens'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.AEROBOT_HELPURL);
    this.setColour(Blockly.Blocks.aerobot.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.aerobot.image, 64, 64))
      .appendField(Blockly.Msg.AEROBOT_LIGHTSENS_TITLE)
      .appendField(new Blockly.FieldDropdown([
      [Blockly.Msg.AEROBOT_CENTER, "CENTER"],
      [Blockly.Msg.AEROBOT_RIGHT, "RIGHT"],
      [Blockly.Msg.AEROBOT_LEFT, "LEFT"]
    ]), "SENS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AEROBOT_LIGHTSENS_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    if (!Blockly.Blocks.aerobot.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.AEROBOT_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['aerobot_distsens'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.AEROBOT_HELPURL);
    this.setColour(Blockly.Blocks.aerobot.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.aerobot.image, 64, 64))
      .appendField(Blockly.Msg.AEROBOT_DISTSENS_TITLE)
      .appendField(new Blockly.FieldDropdown([
      [Blockly.Msg.AEROBOT_CENTER, "CENTER"],
      [Blockly.Msg.AEROBOT_RIGHT, "RIGHT"],
      [Blockly.Msg.AEROBOT_LEFT, "LEFT"]
    ]), "SENS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AEROBOT_LIGHTSENS_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    if (!Blockly.Blocks.aerobot.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.AEROBOT_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['aerobot_linesens'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.AEROBOT_HELPURL);
    this.setColour(Blockly.Blocks.aerobot.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.aerobot.image, 64, 64))
      .appendField(Blockly.Msg.AEROBOT_LINESENS_TITLE)
      .appendField(new Blockly.FieldDropdown([
      [Blockly.Msg.AEROBOT_CENTER, "CENTER"],
      [Blockly.Msg.AEROBOT_RIGHT, "RIGHT"],
      [Blockly.Msg.AEROBOT_LEFT, "LEFT"],
      [Blockly.Msg.AEROBOT_NONE, "NONE"]
    ]), "SENS");
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.AEROBOT_LINESENS_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    if (!Blockly.Blocks.aerobot.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.AEROBOT_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['aerobot_setled'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.AEROBOT_HELPURL);
    this.setColour(Blockly.Blocks.aerobot.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.aerobot.image, 64, 64))
      .appendField(Blockly.Msg.AEROBOT_SETLED_TITLE)
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR)
      .appendField(new Blockly.FieldColour("#00ff00"), "RGB");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AEROBOT_SETLED_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    if (!Blockly.Blocks.aerobot.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.AEROBOT_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};


