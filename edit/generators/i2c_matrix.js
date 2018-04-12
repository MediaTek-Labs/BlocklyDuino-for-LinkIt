goog.provide('Blockly.Arduino.i2c_matrix');

goog.require('Blockly.Arduino');

Blockly.Arduino.i2c_matrix_begin = function() {
  var dropdown_address = this.getFieldValue('ADDRESS');
  var type = this.getFieldValue('TYPE');
  Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>\n';
  Blockly.Arduino.definitions_['define_adafruit_ledbackpack'] = '#include "Adafruit_LEDBackpack.h"\n';
  Blockly.Arduino.definitions_['define_adafruit_gfx'] = '#include "Adafruit_GFX.h"\n';
  Blockly.Arduino.definitions_['define_' + type] = 'Adafruit_' + type + ' matrix = Adafruit_' + type + '();\n';
  Blockly.Arduino.setups_['setup_' + type + '_' + dropdown_address] = 'matrix.begin(' + dropdown_address + ');';
  var code = "";
  return "";
};

Blockly.Arduino.i2c_matrix_clear = function() {
  var code = "matrix.clear();\n";
  return code;
};

Blockly.Arduino.i2c_matrix_setcursor = function() {
  var col = Blockly.Arduino.valueToCode(this, 'COL', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var row = Blockly.Arduino.valueToCode(this, 'ROW', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var code = "matrix.setCursor("+ col + "," + row + ");\n";
  return code;
};

Blockly.Arduino.i2c_matrix_print = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || ''
  var code = "matrix.print("+ content + ");\n";
  return code;
};

Blockly.Arduino.i2c_matrix_settextsize = function() {
  var size = this.getFieldValue('SIZE');
  var code = "matrix.setTextSize("+ size + ");\n";
  return code;
};

Blockly.Arduino.i2c_matrix_settextcolor = function() {
  var color = this.getFieldValue('COLOR');
  var code = "matrix.setTextColor(" + color + ");\n";
  return code;
};

Blockly.Arduino.i2c_matrix_settextwrap = function() {
  var bool = (this.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  var code = "matrix.setTextWrap("+bool + ");\n";
  return code;
};

Blockly.Arduino.i2c_matrix_drawpixel = function() {
  var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var code = "matrix.drawPixel(" + x + "," + y + "," + color + ");\n";
  return code;
};

Blockly.Arduino.i2c_matrix_drawcircle = function() {
  var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var d = Blockly.Arduino.valueToCode(this, 'D', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var code = "matrix.drawCircle(" + x + "," + y + "," + d + "," + color + ");\n";
  return code;
};

Blockly.Arduino.i2c_matrix_drawrect = function() {
  var x0 = Blockly.Arduino.valueToCode(this, 'X0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y0 = Blockly.Arduino.valueToCode(this, 'Y0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var x1 = Blockly.Arduino.valueToCode(this, 'X1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y1 = Blockly.Arduino.valueToCode(this, 'Y1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var code = "matrix.drawRect(" + x0 + "," + y0 + "," + x1 + "," + y1 + "," + color + ");\n";
  return code;
};

Blockly.Arduino.i2c_matrix_drawline = function() {
  var x0 = Blockly.Arduino.valueToCode(this, 'X0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y0 = Blockly.Arduino.valueToCode(this, 'Y0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var x1 = Blockly.Arduino.valueToCode(this, 'X1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y1 = Blockly.Arduino.valueToCode(this, 'Y1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var code = "matrix.drawLine(" + x0 + "," + y0 + "," + x1 + "," + y1 + "," + color + ");\n";
  return code;
};

Blockly.Arduino.i2c_matrix_fillrect = function() {
  var x0 = Blockly.Arduino.valueToCode(this, 'X0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y0 = Blockly.Arduino.valueToCode(this, 'Y0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var x1 = Blockly.Arduino.valueToCode(this, 'X1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y1 = Blockly.Arduino.valueToCode(this, 'Y1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var code = "matrix.fillRect(" + x0 + "," + y0 + "," + x1 + "," + y1 + "," + color + ");\n";
  return code;
};

Blockly.Arduino.i2c_matrix_setrotation = function() {
  var angle = this.getFieldValue('ANGLE');
  var code = "matrix.setRotation(" + angle + ");\n";
  return code;
};

Blockly.Arduino.i2c_matrix_writedisplay = function() {
  var code = "matrix.writeDisplay();\n";
  return code;
};

Blockly.Arduino.i2c_matrix_writedigitnum = function() {
  var pos = this.getFieldValue('POSITION');
  var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var bool = Blockly.Arduino.valueToCode(this, 'DOTS', Blockly.Arduino.ORDER_NONE) || 'false';
  var code = "matrix.writeDigitNum(" + pos + "," + num + "," + bool + ");\n";
  return code;
};

Blockly.Arduino.i2c_matrix_drawcolon = function() {
  var bool = Blockly.Arduino.valueToCode(this, 'DOTS', Blockly.Arduino.ORDER_NONE) || 'false';
  var code = "matrix.drawColon("+ bool + ");\n";
  return code;
};
