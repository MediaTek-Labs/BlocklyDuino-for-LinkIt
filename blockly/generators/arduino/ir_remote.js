// these are the generator for the IR library

'use strict';

goog.provide('Blockly.Arduino.ir_remote');

goog.require('Blockly.Arduino');

Blockly.Arduino['ir_remote_get'] = function(block) {
  var value_pin = block.getFieldValue('PIN');
  Blockly.Arduino.definitions_['include_IR_remote'] = '#include <IRremote.h>\n'
  Blockly.Arduino.definitions_['define_IR_buttons'] = 
  	'#define POWER 0x10EFD827\n'+ 
		'#define A 0x10EFF807\n'+
		'#define B 0x10EF7887\n'+
		'#define C 0x10EF58A7\n'+
		'#define UP 0x10EFA05F\n'+
		'#define DOWN 0x10EF00FF\n'+
		'#define LEFT 0x10EF10EF\n'+
		'#define RIGHT 0x10EF807F\n'+
		'#define SELECT 0x10EF20DF\n';
  Blockly.Arduino.definitions_['setup_ir_reader_'+value_pin] =
  		'IRrecv irrecv'+value_pin+'('+value_pin+');\n' +
      'decode_results results'+value_pin+';\n';
      // example: IRrecv irrecv1(1);
      //          decode_results results1;
  Blockly.Arduino.definitions_['ir_remote_shell'] = 
    'unsigned long getDecodedValue(IRrecv receiver, decode_results results) {\n'+
    '  if (receiver.decode(&results)) {\n'+
    '      receiver.resume();\n'+
    '      return results.value;\n'+
    '    }\n'+
    '  return 0;\n'+
    '}\n'
  Blockly.Arduino.setups_['setup_ir_reader_'+value_pin] = 
      'irrecv'+value_pin+'.enableIRIn(); // Start the receiver\n';
      // example: irrecv1.enableIRIn();

  var code = 'getDecodedValue(irrecv'+value_pin+',results'+value_pin+')';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};

Blockly.Arduino['ir_remote_button'] = function(block) {
  var button_choice = block.getFieldValue('BUTTON');
  return [button_choice, Blockly.Arduino.ORDER_ATOMIC];
};
