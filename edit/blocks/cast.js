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

goog.provide('Blockly.Blocks.cast');

goog.require('Blockly.Blocks');

Blockly.Blocks.cast.HUE = 230;

Blockly.Blocks['cast_number'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.CAST_NUMBER_HELPURL);
    this.setColour(Blockly.Blocks.cast.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAST_NUMBER_TITLE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.VARIABLES_TYPE_NUMBER,"(int)"],
        [Blockly.Msg.VARIABLES_TYPE_UNSIGNED_INT,"(unsigned int)"],
        [Blockly.Msg.VARIABLES_TYPE_BYTE,"(byte)"],
        [Blockly.Msg.VARIABLES_TYPE_WORD,"(word)"],
        [Blockly.Msg.VARIABLES_TYPE_LONG,"(long)"],
        [Blockly.Msg.VARIABLES_TYPE_UNSIGNED_LONG,"(unsigned long)"],
        [Blockly.Msg.VARIABLES_TYPE_FLOAT,"(float)"],
        [Blockly.Msg.VARIABLES_TYPE_DOUBLE,"(double)"],
        [Blockly.Msg.VARIABLES_TYPE_CHAR,"(char)"]
      ]), "TYPE");
    this.appendValueInput("VAR")
      .setCheck(profile.common.number_type)
      .appendField(Blockly.Msg.VARIALBLE);
    this.setInputsInline(true);
    this.setOutput(true, profile.common.number_type);
    this.setTooltip(Blockly.Msg.CAST_NUMBER_TOOLTIP);
  }
};

