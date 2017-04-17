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

goog.provide('Blockly.Blocks.grove');

goog.require('Blockly.Blocks');

Blockly.Blocks.grove.HUE = 190;

Blockly.Blocks.grove.led_image = filepath.media+'/grove_led.jpg';
Blockly.Blocks.grove.button_image = filepath.media+'/grove_button.jpg';
Blockly.Blocks.grove.touch_image = filepath.media+'/grove_touch.jpg';
Blockly.Blocks.grove.rotary_angle_image = filepath.media+'/grove_rotary_angle.jpg';
Blockly.Blocks.grove.relay_image = filepath.media+'/grove_relay.jpg';
Blockly.Blocks.grove.temperature_sensor_image = filepath.media+'/grove_temperature_sensor.jpg';
Blockly.Blocks.grove.light_sensor_image = filepath.media+'/grove_light_sensor.jpg';
Blockly.Blocks.grove.rgb_lcd_image = filepath.media+'/grove_rgb_lcd.jpg';
Blockly.Blocks.grove.buzzer_image = filepath.media+'/grove_buzzer.jpg';
Blockly.Blocks.grove.sound_sensor_image = filepath.media+'/grove_sound_sensor.jpg';
Blockly.Blocks.grove.ir_receiver_image = filepath.media+'/grove_ir_receiver.jpg';
Blockly.Blocks.grove.ir_emitter_image = filepath.media+'/grove_ir_emitter.jpg';

Blockly.Blocks.grove.rgb_lcd_checkBlocks = function(obj) {
  var legal = null;
  var current = obj.type;
  var blocks = obj.workspace.getAllBlocks();
  for (var i = 0; i < blocks.length; i++) {
    if ((blocks[i].type == 'grove_rgb_lcd_setcolor' ||
         blocks[i].type == 'grove_rgb_lcd_print' ||
         blocks[i].type == 'grove_rgb_lcd_setcursor' ||
         blocks[i].type == 'grove_rgb_lcd_custom_setcursor' ||
         blocks[i].type == 'grove_rgb_lcd_clear' ||
         blocks[i].type == 'grove_rgb_lcd_scrolldisplayleft' ||
         blocks[i].type == 'grove_rgb_lcd_scrolldisplayright' ||
         blocks[i].type == 'grove_rgb_lcd_switch_scroll' ||
         blocks[i].type == 'grove_rgb_lcd_autoscroll' ||
         blocks[i].type == 'grove_rgb_lcd_noautoscroll' ||
         blocks[i].type == 'grove_rgb_lcd_lefttoright' ||
         blocks[i].type == 'grove_rgb_lcd_righttoleft') &&
        legal == null){
      if (blocks[i].type != current)  legal = true;
      else  legal = false;
    }
    if(blocks[i].type == 'grove_rgb_lcd_begin'){
      return true;
    }
  }
  return legal;
};

Blockly.Blocks.grove.grove_ir_receiver_checkBlocks = function(obj) {
  var legal = null;
  var current = obj.type;
  var blocks = obj.workspace.getAllBlocks();
  for (var i = 0; i < blocks.length; i++) {
    if ((blocks[i].type == 'grove_ir_receiver_check_data' ||
         blocks[i].type == 'grove_ir_receiver_receive' ||
         blocks[i].type == 'grove_ir_receiver_data') &&
        legal == null){
      if (blocks[i].type != current)  legal = true;
      else  legal = false;
    }
    if(blocks[i].type == 'grove_ir_receiver_init'){
      return true;
    }
  }
  return legal;
};

Blockly.Blocks['grove_led'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_LED_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_LED_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.led_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.grove_digital), "PIN")
      .appendField(Blockly.Msg.GROVE_LED_STAT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH, "HIGH"], [Blockly.Msg.INOUT_LOW, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_LED_TOOLTIP);
  }
};

Blockly.Blocks['grove_button'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_BUTTON_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_BUTTON_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.button_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.grove_digital), "PIN");
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GROVE_BUTTON_TOOLTIP);
  }
};

Blockly.Blocks['grove_touch'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_TOUCH_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_TOUCH_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.touch_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.grove_digital), "PIN");
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GROVE_TOUCH_TOOLTIP);
  }
};

Blockly.Blocks['grove_light_sensor'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_LIGHT_SENSOR_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_LIGHT_SENSOR_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.light_sensor_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.grove_analog), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_LIGHT_SENSOR_TOOLTIP);
  }
};

Blockly.Blocks['grove_rotary_angle'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_ROTARY_ANGLE_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_ROTARY_ANGLE_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rotary_angle_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.grove_analog), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_ROTARY_ANGLE_TOOLTIP);
  }
};

Blockly.Blocks['grove_tilt_switch'] = {
  init: function() {
    this.setHelpUrl('http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Tilt_switch');
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_TILT_SWITCH_TITLE)
      .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/9/95/Tilt1.jpg/400px-Tilt1.jpg", 64, 64))
      .appendField(Blockly.Msg.GROVE_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.grove_digital), "PIN");
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GROVE_TILT_SWITCH_TOOLTIP);
  }
};

Blockly.Blocks['grove_buzzer'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_BUZZER_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_BUZZER_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.buzzer_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.grove_digital), "PIN")
      .appendField(Blockly.Msg.GROVE_STAT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH, "HIGH"], [Blockly.Msg.INOUT_LOW, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_BUZZER_TOOLTIP);
  }
};

Blockly.Blocks['grove_relay'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_RELAY_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_RELAY_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.relay_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.grove_digital), "PIN")
      .appendField(Blockly.Msg.GROVE_STAT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH, "HIGH"], [Blockly.Msg.INOUT_LOW, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_RELAY_TOOLTIP);
  }
};

Blockly.Blocks['grove_temporature_sensor'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_TEMP_SENSOR_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_TEMP_SENSOR_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.temperature_sensor_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.grove_analog), "PIN")
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_TEMP_SENSOR_TOOLTIP);
  }
};

Blockly.Blocks['grove_serial_lcd_print'] = {
  init: function() {
    this.setHelpUrl('http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Serial_LCD');
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField("Serial LCD")
      .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/6/6a/LCD1.jpg/400px-LCD1.jpg", 64, 64))
      .appendField("PIN#")
      .appendField(new Blockly.FieldDropdown(profile.default.grove_digital), "PIN");
    this.appendValueInput("TEXT", 'String')
      .setCheck('String')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("print line1");
    this.appendValueInput("TEXT2", 'String')
      .setCheck('String')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("print line2")
    this.appendValueInput("DELAY_TIME", 'Number')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Delay");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('print text on an 16 character by 2 line LCD.');
  }
};

//grove lcd power on/off
Blockly.Blocks['grove_serial_lcd_power'] = {
  helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED',
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField("Serial LCD")
      .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/6/6a/LCD1.jpg/400px-LCD1.jpg", 64, 64))
      .appendField("PIN#")
      .appendField(new Blockly.FieldDropdown(profile.default.grove_digital), "PIN");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Power")
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INPUT_ON, "ON"], [Blockly.Msg.INPUT_OFF, "OFF"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Turn LCD power on/off');
  }
};

//scroll left/right/no scroll/blink/noblink
Blockly.Blocks['grove_serial_lcd_effect'] = {
  init: function() {
    this.setHelpUrl('http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED');
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField("Serial LCD")
      .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/6/6a/LCD1.jpg/400px-LCD1.jpg", 64, 64))
      .appendField("PIN#")
      .appendField(new Blockly.FieldDropdown(profile.default.grove_digital), "PIN");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Effect")
      .appendField(new Blockly.FieldDropdown([["Scroll Left", "LEFT"], ["Scroll Right", "RIGHT"], ["Scroll Auto", "AUTO"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Turn LCD power on/off');
  }
};

Blockly.Blocks['grove_sound_sensor'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_SOUND_SENSOR_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_SOUND_SENSOR_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.sound_sensor_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.grove_analog), "PIN")
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_SOUND_SENSOR_TOOLTIP);
  }
};

Blockly.Blocks['grove_pir_motion_sensor'] = {
  helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_PIR_Motion_Sensor',
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField("PIR Motion Sensor")
      .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/f/fd/Twig-PIR_Motion_Sensor.jpg/400px-Twig-PIR_Motion_Sensor.jpg", 64, 64))
      .appendField("PIN#")
      .appendField(new Blockly.FieldDropdown(profile.default.grove_digital), "PIN")
    this.setOutput(true, 'Number');
    this.setTooltip('When anyone moves in it\'s detecting range, the sensor outputs HIGH.');
  }
};

Blockly.Blocks['grove_line_finder'] = {
  init: function() {
    this.setHelpUrl('http://www.seeedstudio.com/wiki/Grove_-_Line_Finder');
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField("Line Finder")
      .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/8/82/Grovelinefinder1.jpg/400px-Grovelinefinder1.jpg", 64, 64))
      .appendField("PIN#")
      .appendField(new Blockly.FieldDropdown(profile.default.grove_digital), "PIN");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Output digital signal so the robot can reliably follow a black line on a white background');
  }
};

Blockly.Blocks['grove_ultrasonic_ranger'] = {
  init: function() {
    this.setHelpUrl('http://www.seeedstudio.com/wiki/Grove_-_Ultrasonic_Ranger');
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField("Ultrasonic Ranger")
      .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/b/b0/Twig_-_Ultrasonic_Ranger2.jpg/200px-Twig_-_Ultrasonic_Ranger2.jpg", 64, 64))
      .appendField("PIN#")
      .appendField(new Blockly.FieldDropdown(profile.default.grove_digital), "PIN")
      .appendField("unit")
      .appendField(new Blockly.FieldDropdown([["cm", "cm"],  ["inch", "inch"]]), "UNIT");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Non-contact distance measurement module');
  }
};

Blockly.Blocks['grove_motor_shield'] = {
  init: function() {
    this.setHelpUrl('http://www.seeedstudio.com/wiki/Motor_Shield');
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField("Motor")
      .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/4/4d/Smotoshield2.jpg/400px-Smotoshield2.jpg", 64, 64))
      .appendField(new Blockly.FieldDropdown([["Stop", "stop"], ["Forward", "forward"], ["Right", "right"], ["Left", "left"], ["Backward", "backward"]]), "DIRECTION");
    /*this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed");*/
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Drive two brushed DC motors');
  }
};

Blockly.Blocks['grove_thumb_joystick'] = {
  init: function() {
    this.setHelpUrl('http://www.seeedstudio.com/wiki/Grove_-_Thumb_Joystick');
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField("Thumb Joystick")
      .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/e/e0/Twig_-_Thumb_Joystick_v0.9b.jpg/200px-Twig_-_Thumb_Joystick_v0.9b.jpg", 64, 64))
      .appendField("PIN#")
      .appendField(new Blockly.FieldDropdown(profile.default.grove_analog), "PIN")
      .appendField("axis")
      .appendField(new Blockly.FieldDropdown([["x", "x"],  ["y", "y"]]), "AXIS");
    this.setOutput(true, 'Number');
    this.setTooltip('output two analog values(200~800) representing two directions');
  }
};

Blockly.Blocks['grove_rgb_led'] = {
  init: function() {
    this.setHelpUrl('http://www.seeedstudio.com/wiki/index.php?title=Twig_-_Chainable_RGB_LED');
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField("Chainable RGB LED")
      .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/depot/images/product/chanbalelednb1.jpg", 64, 64))
      .appendField("PIN#")
      .appendField(new Blockly.FieldDropdown(profile.default.grove_digital), "PIN")
    this.appendDummyInput("COLOR0")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Color 1")
      .appendField(new Blockly.FieldColour("#00ff00"), "RGB0");
    this.setMutator(new Blockly.Mutator(['grove_rgb_led_item']));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('256 color LED, currently Chainable feature is not support');
    this.itemCount_ = 1;
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    for (var x = 0; x < this.itemCount_; x++) {
      var colour_rgb = this.getFieldValue('RGB0');
      //alert(colour_rgb);
      container.setAttribute('RGB' + x, colour_rgb);
    }
    return container;
  },
  domToMutation: function(xmlElement) {
    for (var x = 0; x < this.itemCount_; x++) {
      this.removeInput('COLOR' + x);
    }
    this.itemCount_ = window.parseInt(xmlElement.getAttribute('items'), 10);
    for (var x = 0; x < this.itemCount_; x++) {
      var color = window.parseInt(xmlElement.getAttribute('RGB'+x), "#00ff00");
      var input = this.appendDummyInput('COLOR' + x);
      //if (x == 0) {
      input.setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color "+(x+1))
        .appendField(new Blockly.FieldColour(color), "RGB" + x);
      //}
    }
    if (this.itemCount_ == 0) {
      this.appendDummyInput('COLOR0')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color 1")
        .appendField(new Blockly.FieldColour("#00ff00"), "RGB0");
    }
  },
  decompose: function(workspace) {
    var containerBlock = Blockly.Block.obtain(workspace,
                                              'grove_rgb_led_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.itemCount_; x++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'grove_rgb_led_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function(containerBlock) {
    // Disconnect all input blocks and remove all inputs.
    if (this.itemCount_ == 0) {
      this.removeInput('COLOR0');
    } else {
      for (var x = this.itemCount_ - 1; x >= 0; x--) {
        //console.log("cnt:"+x);
        this.removeInput('COLOR' + x);
      }
    }
    /*var top;
    if(this.itemCount_ > 0){
      top = this.itemCount_-1;
    } else {
      top = 0;
    }
    console.log("top:"+top);*/
    this.itemCount_ = 0;
    // Rebuild the block's inputs.
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    while (itemBlock) {
      var colour_rgb = this.getFieldValue('RGB' + this.itemCount_);
      if(colour_rgb==null){
        colour_rgb = "00ff00";
      }
      //console.log("blk:"+this.itemCount_);
      /*if(top>this.itemCount_){
        this.removeInput('COLOR' + this.itemCount_);
      }*/
      var input = this.appendDummyInput('COLOR' + this.itemCount_);
      //if (this.itemCount_ == 0) {
      input.setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color " + (this.itemCount_+1))
        .appendField(new Blockly.FieldColour(colour_rgb), "RGB" + this.itemCount_);
      //}
      // Reconnect any child blocks.
      if (itemBlock.valueConnection_) {
        input.connection.connect(itemBlock.valueConnection_);
      }
      this.itemCount_++;
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    if (this.itemCount_ == 0) {
      this.appendDummyInput('COLOR0')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color 1")
        .appendField(new Blockly.FieldColour("#00ff00"), "RGB0");
    }
  }
  /*saveConnections: function(containerBlock) {
    // Store a pointer to any connected child blocks.
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var x = 0;
    while (itemBlock) {
      var input = this.getInput('COLOR' + x);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      x++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  }*/
};

Blockly.Blocks['grove_rgb_led_container'] = {
  // Container.
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField("Container");
    this.appendStatementInput('STACK');
    this.setTooltip("Add, remove items to reconfigure this chain");
    this.contextMenu = false;
  }
};

Blockly.Blocks['grove_rgb_led_item'] = {
  // Add items.
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField("Item");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("Add an item to the chain");
    this.contextMenu = false;
  }
};

Blockly.Blocks['grove_bluetooth_slave'] = {
  category: 'Network',
  init: function() {
    this.setHelpUrl('http://www.seeedstudio.com/wiki/Grove_-_Serial_Bluetooth');
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField("Bluetooth Slave")
      .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/File:Twigbt00.jpg", 64, 64))
      .appendField("PIN#")
      .appendField(new Blockly.FieldDropdown(profile.default.grove_digital), "PIN")
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Name")
      .appendField(new Blockly.FieldTextInput('blocklyduino'), 'NAME');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Pincode")
      .appendField(new Blockly.FieldTextInput('0000'), 'PINCODE');
    this.appendStatementInput("RCV")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Receive");
    this.appendStatementInput("SNT")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Send");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Bluetooth V2.0+EDR slave. Support single slave per board');
  }
};
//http://www.seeedstudio.com/wiki/File:Twig-Temp%26Humi.jpg
//http://www.seeedstudio.com/wiki/Grove-_Temperature_and_Humidity_Sensor

//http://www.seeedstudio.com/wiki/Grove_-_125KHz_RFID_Reader

/*
void setup()
{
  pinMode( 3 , OUTPUT);
  pinMode( 1 , INPUT);
}

void loop()
{
  if (digitalRead( 1))
  {
    digitalWrite( 3 , HIGH);
  }
  else
  {
    digitalWrite( 1 , LOW);
  }
}
*/

Blockly.Blocks['grove_rgb_lcd_setcolor'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image, 64, 64))
      .appendField(Blockly.Msg.COLOR)
      .appendField(new Blockly.FieldColour("#00ff00"), "RGB");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_SETCOLOR_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['grove_rgb_lcd_begin'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_RGB_LCD_BEGIN_TITLE)
      .appendField(Blockly.Msg.COL)
      .appendField(new Blockly.FieldTextInput("16"),"COLS");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ROW)
      .appendField(new Blockly.FieldTextInput("2"),"ROWS");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_BEGIN_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_BEGIN_WARNING);
  }
};

Blockly.Blocks['grove_rgb_lcd_print'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendValueInput("PRINT")
      .appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_RGB_LCD_PRINT_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_PRINT_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['grove_rgb_lcd_setcursor'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_RGB_LCD_SETCURSOR_TITLE)
      .appendField(Blockly.Msg.COL)
      .appendField(new Blockly.FieldTextInput("0"),"COL");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ROW)
      .appendField(new Blockly.FieldTextInput("0"),"ROW");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_SETCURSOR_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['grove_rgb_lcd_custom_setcursor'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_RGB_LCD_SETCURSOR_TITLE);
    this.appendValueInput("COL")
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COL);
    this.appendValueInput("ROW")
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROW);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_SETCURSOR_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['grove_rgb_lcd_clear'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_RGB_LCD_CLEAR_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_CLEAR_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['grove_rgb_lcd_scrolldisplayleft'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_RGB_LCD_SCROLL_DISPLAY_LEFT_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_SCROLL_DISPLAY_LEFT_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['grove_rgb_lcd_scrolldisplayright'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_LCD_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_LCD_SCROLL_DISPLAY_RIGHT_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.GROVE_LCD_SCROLL_DISPLAY_RIGHT_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['grove_rgb_lcd_switch_scroll'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_RGB_LCD_AUTOSCROLL_TITLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ON,"1"],[Blockly.Msg.OFF,"0"]]), 'SW');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_AUTOSCROLL_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['grove_rgb_lcd_autoscroll'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_RGB_LCD_AUTOSCROLL_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_AUTOSCROLL_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['grove_rgb_lcd_noautoscroll'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_RGB_LCD_NOAUTOSCROLL_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_NOAUTOSCROLL_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['grove_rgb_lcd_lefttoright'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_RGB_LCD_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_RGB_LCD_LEFTTORIGHT_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_LEFTTORIGHT_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['grove_rgb_lcd_righttoleft'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_LCD_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_RGB_LCD_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.rgb_lcd_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_RGB_LCD_RIGHTTOLEFT_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.GROVE_RGB_LCD_RIGHTTOLEFT_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.grove.rgb_lcd_checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.GROVE_RGB_LCD_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['grove_ir_receiver_init'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_IR_RECEIVER_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_IR_RECEIVER_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.ir_receiver_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_IR_RECEIVER_INIT_TITLE)
      .appendField(Blockly.Msg.PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.grove_digital), "PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.GROVE_IR_REVEIVER_INIT_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    this.setWarningText(Blockly.Msg.GROVE_IR_RECEIVER_INIT_WARNING);
  }
};

Blockly.Blocks['grove_ir_receiver_check_data'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_IR_RECEIVER_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_IR_RECEIVER_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.ir_receiver_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_IR_RECEIVER_CHECK_DATA_TITLE);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.GROVE_IR_RECEIVER_CHECK_DATA_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.grove.grove_ir_receiver_checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.GROVE_IR_RECEIVER_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['grove_ir_receiver_receive'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_IR_RECEIVER_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_IR_RECEIVER_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.ir_receiver_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_IR_RECEIVER_RECEIVE_TITLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.GROVE_IR_RECEIVER_RECEIVE_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.grove.grove_ir_receiver_checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.GROVE_IR_RECEIVER_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['grove_ir_receiver_data'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_IR_RECEIVER_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_IR_RECEIVER_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.ir_receiver_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_IR_RECEIVER_DATA_TITLE);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.GROVE_IR_RECEIVER_DATA_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.grove.grove_ir_receiver_checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.GROVE_IR_RECEIVER_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['grove_ir_emitter_send'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_IR_EMITTER_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_IR_EMITTER_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.grove.ir_emitter_image, 64, 64))
      .appendField(Blockly.Msg.GROVE_IR_EMITTER_SEND_TITLE);
    this.appendValueInput("DATA")
      .setCheck("Number")
      .appendField(Blockly.Msg.DATA);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.GROVE_IR_EMMITER_SEND_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    this.setWarningText(Blockly.Msg.GROVE_IR_EMITTER_WARNING);
  }
};
