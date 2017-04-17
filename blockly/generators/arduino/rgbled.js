/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating Arduino for list blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Arduino.rgbled');

goog.require('Blockly.Arduino');

Blockly.Arduino.rgbled_begin = function() {
  var num = this.getFieldValue('NUM');
  var pin = this.getFieldValue('PIN');
  var brightness = this.getFieldValue('BRIGHTNESS');

  Blockly.Arduino.definitions_['define_include_neopixel'] = '#include <Adafruit_NeoPixel.h>\n'
  Blockly.Arduino.definitions_['define_rgbled'] = 'Adafruit_NeoPixel rgbled = Adafruit_NeoPixel(' + num + ',' + pin + ',NEO_RGB + NEO_KHZ400);\n';
  Blockly.Arduino.setups_['setup_rgbled_begin'] = 'rgbled.begin();\n'
  Blockly.Arduino.setups_['setup_rgbled_brightness'] = 'rgbled.setBrightness('+ brightness + ');\n'

  var code = '';
  return code;
};

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

Blockly.Arduino.rgbled_setpixelcolor = function() {
  var target = this.getFieldValue('TARGET');
  var colour_rgb = this.getFieldValue('RGB');
  var code = 'rgbled.setPixelColor(' + target + ',rgbled.Color(' +hexToR(colour_rgb)+','+hexToG(colour_rgb)+',' + hexToB(colour_rgb)+'));\n';
  return code;
};

Blockly.Arduino.rgbled_setpixelcolor2 = function() {
  var target = Blockly.Arduino.valueToCode(this, 'TARGET', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var colour_rgb = this.getFieldValue('RGB');

  var code = 'rgbled.setPixelColor(' + target + ',rgbled.Color(' +hexToR(colour_rgb)+','+hexToG(colour_rgb)+',' + hexToB(colour_rgb)+'));\n';
  return code;
};

Blockly.Arduino.rgbled_custom_setpixelcolor = function() {
  var target = Blockly.Arduino.valueToCode(this, 'TARGET', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var r = Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC) || '255'
  var g = Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var b = Blockly.Arduino.valueToCode(this, 'B', Blockly.Arduino.ORDER_ATOMIC) || '0'

  var code = 'rgbled.setPixelColor(' + target + ', rgbled.Color(' + r + ',' + g +',' + b + '));\n';
  return code;
};

Blockly.Arduino.rgbled_show = function() {
  var code = 'rgbled.show();\n';
  return code;
};
