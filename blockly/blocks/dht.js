/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
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
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.dht');

goog.require('Blockly.Blocks');

Blockly.Blocks.dht.HUE = 215;

Blockly.Blocks.dht.image = filepath.media+'/dht11.jpg';

Blockly.Blocks['dht_read'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.DHT_HELPURL);
    this.setColour(Blockly.Blocks.dht.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.dht.image, 64, 64))
      .appendField(Blockly.Msg.DHT_READ_SENSOR)
      .appendField(new Blockly.FieldDropdown(profile.default.dht), "SENSOR");
    this.appendDummyInput()
      .appendField(Blockly.Msg.DHT_READ_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendDummyInput()
      .appendField(Blockly.Msg.DHT_READ_TYPE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.DHT_READ_H,"h"],[Blockly.Msg.DHT_READ_C,"C"],[Blockly.Msg.DHT_READ_F,"F"]]), "TYPE");
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.DHT_READ_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    this.setWarningText(Blockly.Msg.DHT_WARNING);
  }
};
