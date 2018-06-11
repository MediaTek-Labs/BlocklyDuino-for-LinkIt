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
goog.provide('Blockly.Arduino.mfrc522');

goog.require('Blockly.Arduino');

Blockly.Arduino.mfrc522_read = function() {
  var inst_symbol = 'mfrc522';

  Blockly.Arduino.definitions_['define_spi_include'] = '#include <SPI.h>\n';
  Blockly.Arduino.definitions_['define_mfrc522_include'] = '#include <MFRC522.h>\n';
  Blockly.Arduino.definitions_['define_mfrc522_inst'] = 'MFRC522 rfid(/*SS_PIN*/ 10, /*RST_PIN*/ 9);\n';
  Blockly.Arduino.definitions_['define_mfrc522_readid'] = `
String mfrc522_readID()
{
  String ret;
  if (rfid.PICC_IsNewCardPresent() && rfid.PICC_ReadCardSerial())
  {
    MFRC522::PICC_Type piccType = rfid.PICC_GetType(rfid.uid.sak);

    for (byte i = 0; i < rfid.uid.size; i++) {
      ret += (rfid.uid.uidByte[i] < 0x10 ? "0" : "");
      ret += String(rfid.uid.uidByte[i], HEX);
    }
  }
  
  // Halt PICC
  rfid.PICC_HaltA();

  // Stop encryption on PCD
  rfid.PCD_StopCrypto1();
  return ret;
}\n`;

  Blockly.Arduino.setups_['setup_mfrc522'] = 'SPI.begin();\n' +
    '  rfid.PCD_Init();\n'

  var code = 'mfrc522_readID()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
