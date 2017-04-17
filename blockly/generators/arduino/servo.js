/**
 * Visual Blocks Language
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

goog.provide('Blockly.Arduino.servo');

goog.require('Blockly.Arduino');

Blockly.Arduino.servo_attach = function() {
  var pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_class_servo_'+ pin] = 'Servo myservo' + pin + ';';
  var code = 'myservo' + pin + '.attach(' + pin + ');\n';
  return code;
};

Blockly.Arduino.servo_custom_attach = function() {
  var pin = this.getFieldValue('PIN');
  var max = this.getFieldValue('MAX');
  var min = this.getFieldValue('MIN');
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_class_servo_'+ pin] = 'Servo myservo' + pin + ';';
  var code = 'myservo' + pin + '.attach(' + pin + ',' + min + ',' + max + ');\n';
  return code;
};

Blockly.Arduino.servo_write = function() {
  var pin = this.getFieldValue('PIN');
  var angle = Blockly.Arduino.valueToCode(this, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '90'
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_class_servo_' + pin] = 'Servo myservo' + pin + ';';
  Blockly.Arduino.setups_['servo_' + pin] = 'myservo' + pin + '.attach(' + pin + ');';
  var code = 'myservo' + pin + '.write(' + angle + ');\n';
  return code;
};

Blockly.Arduino.servo_writeus = function() {
  var pin = this.getFieldValue('PIN');
  var angle = Blockly.Arduino.valueToCode(this, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '1500'
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_class_servo_'+ pin] = 'Servo myservo' + pin + ';';
  Blockly.Arduino.setups_['servo_' + pin] = 'myservo' + pin + '.attach('+ pin + ');';
  var code = 'myservo' + pin + '.writeMicroseconds(' + angle + ');\n';
  return code;
};

Blockly.Arduino.servo_read = function() {
  var pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_class_servo_'+ pin] = 'Servo myservo' + pin + ';';
  var code = 'myservo' + pin + '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.servo_attached = function() {
  var pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_class_servo_'+ pin] = 'Servo myservo' + pin + ';';
  var code = 'myservo' + pin + '.attached()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.servo_detach = function() {
  var pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['define_class_servo_'+ pin] = 'Servo myservo' + pin + ';';
  var code = 'myservo' + pin + '.detach();\n';
  return code;
};
