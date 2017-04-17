goog.provide('Blockly.Arduino.i2c_sevenseg');

goog.require('Blockly.Arduino');

Blockly.Arduino.i2c_sevenseg_begin = function() {
  var dropdown_address = this.getFieldValue('ADDRESS');
  Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_adafruit_ledbackpack'] = '#include "Adafruit_LEDBackpack.h"';
  Blockly.Arduino.definitions_['define_adafruit_gfx'] = '#include "Adafruit_GFX.h"';
  Blockly.Arduino.definitions_['define_sevenseg'] = 'Adafruit_7segment sevenseg = Adafruit_7segment();\n';
  Blockly.Arduino.setups_['setup_sevenseg_' + dropdown_address] = 'sevenseg.begin(' + dropdown_address + ');';
  var code = "";
  return "";
};

Blockly.Arduino.i2c_sevenseg_print = function() {
  var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '7777'
  if(num > 9999){
    num = 9999;
  }else if(num < 0){
    num = 1;
  }
  var code = "sevenseg.print("+ num + ");\n";
  return code;
};

Blockly.Arduino.i2c_sevenseg_writedisplay = function() {
  var code = "sevenseg.writeDisplay();\n";
  return code;
};

Blockly.Arduino.i2c_sevenseg_writedigitnum = function() {
  var pos = Blockly.Arduino.valueToCode(this, 'POSITION', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var bool = Blockly.Arduino.valueToCode(this, 'DOTS', Blockly.Arduino.ORDER_NONE) || 'false';
  if(num > 9)  num = 9;
  var code = "sevenseg.writeDigitNum(" + pos + "," + num + "," + bool + ");\n";
  return code;
};

Blockly.Arduino.i2c_sevenseg_drawcolon = function() {
  var bool = Blockly.Arduino.valueToCode(this, 'DOTS', Blockly.Arduino.ORDER_NONE) || 'false';
  var code = "sevenseg.drawColon("+ bool + ");\n";
  return code;
};

Blockly.Arduino.i2c_sevenseg_boolean = function() {
  var code = (this.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
