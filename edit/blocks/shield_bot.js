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

goog.provide('Blockly.Blocks.shield_bot');

goog.require('Blockly.Blocks');

Blockly.Blocks.shield_bot.HUE = 190;

Blockly.Blocks.shield_bot.image = filepath.media + '/shield_bot.jpg';

Blockly.Blocks.shield_bot.checkBlocks = function(obj) {
    var legal = false;
    var current = obj.type;
    var blocks = obj.workspace.getAllBlocks();
    for (var i = 0; i < blocks.length; i++) {
        if (blocks[i].type == 'shield_bot_setmaxspeed' ||
            blocks[i].type == 'shield_bot_setmaxspeed_lr' ||
            blocks[i].type == 'shield_bot_right_motor' ||
            blocks[i].type == 'shield_bot_motor' ||
            blocks[i].type == 'shield_bot_drive' ||
            blocks[i].type == 'shield_bot_faststop' ||
            blocks[i].type == 'shield_bot_faststop_left' ||
            blocks[i].type == 'shield_bot_faststop_right' ||
            blocks[i].type == 'shield_bot_move' ||
            blocks[i].type == 'shield_bot_readsensor') {
            if (blocks[i].type != current) {
                legal = true;
            }
            break;
        }
    }
    return legal;
};

Blockly.Blocks['shield_bot_setmaxspeed'] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);
        this.setColour(Blockly.Blocks.shield_bot.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image, 64, 64))
            .appendField(Blockly.Msg.SHIELD_BOT_SETMAXSPEED_TITLE)
            .appendField(new Blockly.FieldTextInput("255"), "SPEED");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SHIELD_BOT_SETMAXSPEED_TOOLTIP);
    },
    onchange: function() {
        if (!this.workspace) {
            // Block has en deleted.
            return;
        }
        if (!Blockly.Blocks.shield_bot.checkBlocks(this)) {
            this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING);
        } else {
            this.setWarningText(null);
        }
    }
};

Blockly.Blocks['shield_bot_setmaxspeed_lr'] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);
        this.setColour(Blockly.Blocks.shield_bot.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image, 64, 64))
            .appendField(Blockly.Msg.SHIELD_BOT_SETMAXSPEED_TITLE)
            .appendField(Blockly.Msg.SHIELD_BOT_LEFT_SPEED)
            .appendField(new Blockly.FieldTextInput("255"), "LEFT")
            .appendField(Blockly.Msg.SHIELD_BOT_RIGHT_SPEED)
            .appendField(new Blockly.FieldTextInput("255"), "RIGHT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SHIELD_BOT_SETMAXSPEED_LR_TOOLTIP);
    },
    onchange: function() {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        if (!Blockly.Blocks.shield_bot.checkBlocks(this)) {
          this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING);
        } else {
            this.setWarningText(null);
        }
    }
};

Blockly.Blocks['shield_bot_right_motor'] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);
        this.setColour(Blockly.Blocks.shield_bot.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image, 64, 64))
            .appendField(Blockly.Msg.SHIELD_BOT_RIGHT_MOTOR_TITLE);
        this.appendValueInput("DIRECTION")
            .setCheck("Number")
            .appendField(Blockly.Msg.DIRECTION);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SHIELD_BOT_RIGHT_MOTOR_TOOLTIP);
    },
    onchange: function() {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        if (!Blockly.Blocks.shield_bot.checkBlocks(this)) {
          this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING);
        } else {
            this.setWarningText(null);
        }
    }
};

Blockly.Blocks['shield_bot_motor'] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);
        this.setColour(Blockly.Blocks.shield_bot.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image, 64, 64))
            .appendField(Blockly.Msg.SHIELD_BOT_CONTROL)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.RIGHT, "rightMotor"],
                [Blockly.Msg.LEFT, "leftMotor"]
            ]), "RL");
        this.appendValueInput("DIRECTION")
            .appendField(Blockly.Msg.SHIELD_BOT_MOTOR)
            .setCheck("Number")
            .appendField(Blockly.Msg.DIRECTION);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SHIELD_BOT_LEFT_MOTOR_TOOLTIP);
    },
    onchange: function() {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        if (!Blockly.Blocks.shield_bot.checkBlocks(this)) {
          this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING);
        } else {
            this.setWarningText(null);
        }
    }
};

Blockly.Blocks['shield_bot_drive'] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);
        this.setColour(Blockly.Blocks.shield_bot.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image, 64, 64))
            .appendField(Blockly.Msg.SHIELD_BOT_DRIVE_TITLE);
        this.appendValueInput("LEFT")
            .setCheck("Number")
            .appendField(Blockly.Msg.LEFT);
        this.appendValueInput("RIGHT")
            .setCheck("Number")
            .appendField(Blockly.Msg.RIGHT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SHIELD_BOT_DRIVE_TOOLTIP);
    },
    onchange: function() {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        if (!Blockly.Blocks.shield_bot.checkBlocks(this)) {
          this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING);
        } else {
            this.setWarningText(null);
        }
    }
};

Blockly.Blocks['shield_bot_faststop'] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);
        this.setColour(Blockly.Blocks.shield_bot.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image, 64, 64))
            .appendField(Blockly.Msg.SHIELD_BOT_faststop_TITLE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SHIELD_BOT_FASTSTOP_TOOLTIP);
    },
    onchange: function() {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        if (!Blockly.Blocks.shield_bot.checkBlocks(this)) {
          this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING);
        } else {
            this.setWarningText(null);
        }
    }
};

Blockly.Blocks['shield_bot_faststop_left'] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);
        this.setColour(Blockly.Blocks.shield_bot.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image, 64, 64))
            .appendField(Blockly.Msg.SHIELD_BOT_FASTSTOP_LEFT_TITLE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SHIELD_BOT_FASTSTOP_LEFT_TOOLTIP);
    },
    onchange: function() {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        if (!Blockly.Blocks.shield_bot.checkBlocks(this)) {
          this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING);
        } else {
            this.setWarningText(null);
        }
    }
};

Blockly.Blocks['shield_bot_faststop_right'] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);
        this.setColour(Blockly.Blocks.shield_bot.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image, 64, 64))
            .appendField(Blockly.Msg.SHIELD_BOT_FASTSTOP_RIGHT_TITLE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SHIELD_BOT_FASTSTOP_RIGHT_TOOLTIP);
    },
    onchange: function() {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        if (!Blockly.Blocks.shield_bot.checkBlocks(this)) {
          this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING);
        } else {
            this.setWarningText(null);
        }
    }
};

Blockly.Blocks['shield_bot_move'] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);
        this.setColour(Blockly.Blocks.shield_bot.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image, 64, 64))
            .appendField(Blockly.Msg.SHIELD_BOT_MOVE_TITLE)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.SHIELD_BOT_FORWARD, "forward"],
                [Blockly.Msg.SHIELD_BOT_BACKWARD, "backward"],
                [Blockly.Msg.SHIELD_BOT_STOP, "stop"],
                [Blockly.Msg.SHIELD_BOT_STOPLEFT, "stopLeft"],
                [Blockly.Msg.SHIELD_BOT_STOPRIGHT, "stopRight"]
            ]), "MOVE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SHIELD_BOT_MOVE_TOOLTIP);
    },
    onchange: function() {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        if (!Blockly.Blocks.shield_bot.checkBlocks(this)) {
          this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING);
        } else {
            this.setWarningText(null);
        }
    }
};

Blockly.Blocks['shield_bot_readsensor'] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.SHIELD_BOT_HELPURL);
        this.setColour(Blockly.Blocks.shield_bot.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Blocks.shield_bot.image, 64, 64))
            .appendField(Blockly.Msg.SHIELD_BOT_READ_SENSOR_TITLE)
            .appendField(Blockly.Msg.INDEX)
            .appendField(new Blockly.FieldDropdown(profile.default.shield_bot_sensor), "SENSOR");
        this.setOutput(true);
        this.setTooltip(Blockly.Msg.SHIELD_BOT_READ_SENSOR_TOOLTIP);
    },
    onchange: function() {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        if (!Blockly.Blocks.shield_bot.checkBlocks(this)) {
          this.setWarningText(Blockly.Msg.SHEILD_BOT_WARNING);
        } else {
            this.setWarningText(null);
        }
    }
};
