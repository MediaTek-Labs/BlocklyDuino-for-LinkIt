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

goog.provide('Blockly.Arduino.times');

goog.require('Blockly.Arduino');

Blockly.Arduino['delay'] = function() {
  var delay_time = this.getFieldValue('DELAY_TIME');
  var code = 'delay(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino['delay_custom'] = function() {
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000'
  var code = 'delay(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino['delayMicroseconds_custom'] = function() {
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000'
  var code = 'delayMicroseconds(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino['delayMicroseconds'] = function() {
  var delay_time = this.getFieldValue('DELAY_TIME');
  var code = 'delayMicroseconds(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino['millis'] = function() {
  var code = 'millis()';
  return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['micros'] = function() {
  var code = 'micros()';
  return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['rtc_get_time'] = function() {
  Blockly.Arduino.definitions_['define_rtc'] = '#include <LRTC.h>';
  Blockly.Arduino.setups_['setup_rtc'] = 'LRTC.begin();';
  Blockly.Arduino.definitions_['define_rtc_get_time'] = `
String get_time_from_RTC() {
  // get time from the RTC module
  LRTC.get();

  // format to time string 
  static char buffer[] = "YYYY-MM-DDTHH:MM:SS+08";
  sprintf(buffer, "%04ld-%02ld-%02ldT%02ld:%02ld:%02ld+08",
    LRTC.year(),
    LRTC.month(),
    LRTC.day(),
    LRTC.hour(),
    LRTC.minute(),
    LRTC.second());

  return String(buffer);
}\n`
  
  var code = 'get_time_from_RTC()';
  return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['rtc_set_time_from_number'] = function() {
  Blockly.Arduino.definitions_['define_rtc'] = '#include <LRTC.h>';
  Blockly.Arduino.setups_['setup_rtc'] = 'LRTC.begin();';

  var year = Blockly.Arduino.valueToCode(this, 'YEAR', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var month = Blockly.Arduino.valueToCode(this, 'MONTH', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var day = Blockly.Arduino.valueToCode(this, 'DAY', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var hour = Blockly.Arduino.valueToCode(this, 'HOUR', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var min = Blockly.Arduino.valueToCode(this, 'MIN', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var sec = Blockly.Arduino.valueToCode(this, 'SEC', Blockly.Arduino.ORDER_ATOMIC) || '0'

  var code = `LRTC.set(${year}, ${month}, ${day}, ${hour}, ${min}, ${sec});\n`
  return code;
};

Blockly.Arduino['rtc_set_time_from_string'] = function() {
  Blockly.Arduino.definitions_['define_rtc'] = '#include <LRTC.h>';
  Blockly.Arduino.setups_['setup_rtc'] = 'LRTC.begin();';
  Blockly.Arduino.definitions_['define_rtc_set_rtc_from_time_string'] = `
void set_rtc_from_time_string(const String& time_str) {
  // field_index [0,1,2,3,4,5] = [Year,Month,Day,Hour,Minute,Sec]
  int fields[6] = {0};
  sscanf(time_str.c_str(), "%d-%d-%dT%d:%d:%d+08", 
          &fields[0], &fields[1], &fields[2],
          &fields[3], &fields[4], &fields[5]);
  LRTC.set(fields[0], fields[1], fields[2],
           fields[3], fields[4], fields[5]);
}\n`

  var time_str = Blockly.Arduino.valueToCode(this, 'TIME_STRING', Blockly.Arduino.ORDER_ATOMIC) || '"1900-00-00T00:00:00+08"'
  var code = `set_rtc_from_time_string(${time_str});\n`
  return code;
};

Blockly.Arduino['rtc_get_time_field'] = function() {
  Blockly.Arduino.definitions_['define_rtc'] = '#include <LRTC.h>';
  Blockly.Arduino.setups_['setup_rtc'] = 'LRTC.begin();';
  Blockly.Arduino.definitions_['define_rtc_get_field_from_time_string'] = `
int get_field_from_time_string(const String& time_str, int field_index) {
  // field_index [0,1,2,3,4,5] = [Year,Month,Day,Hour,Minute,Sec]
  int fields[6] = {0};
  sscanf(time_str.c_str(), "%d-%d-%dT%d:%d:%d+08", 
          &fields[0], &fields[1], &fields[2],
          &fields[3], &fields[4], &fields[5]);
  if(field_index < 0 || field_index > 5) {
    return 0;
  } else {
    return fields[field_index];
  }
}\n`

  var time_str = Blockly.Arduino.valueToCode(this, 'TIME_STRING', Blockly.Arduino.ORDER_ATOMIC) || '"1900-00-00T00:00:00+08"'
  var field_index = this.getFieldValue('FIELD')
  var code = `get_field_from_time_string(${time_str}, ${field_index})`
  return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['ntp_get_datetime'] = function() {
  Blockly.Arduino.definitions_['define_udp'] = '#include <WiFiUdp.h>';
  Blockly.Arduino.definitions_['define_ctime'] = '#include <ctime>';
  Blockly.Arduino.definitions_['define_ntp_get_datetime'] = `
const char *NTP_server = "time.stdtime.gov.tw";  
const int NTP_PACKET_SIZE = 48;                   // NTP time stamp is in the first 48 bytes of the message  
static byte packetBuffer[NTP_PACKET_SIZE] = {0};  //buffer to hold incoming and outgoing packets
const unsigned int localPort = 2390;              // local port to listen for UDP packets
static WiFiUDP Udp;                               // A UDP instance to let us send and receive packets over UDP

String getNetworkTime() {
  Udp.begin(localPort);
  sendNTPpacket(NTP_server); // send an NTP packet to a time server
  // wait to see if a reply is available
  delay(1000);
  if (Udp.parsePacket()) {
    // We've received a packet, read the data from it
    Udp.read(packetBuffer, NTP_PACKET_SIZE); // read the packet into the buffer

    //the timestamp starts at byte 40 of the received packet and is four bytes,
    // or two words, long. First, esxtract the two words:
    const unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
    const unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
    // combine the four bytes (two words) into a long integer
    // this is NTP time (seconds since Jan 1 1900):
    const unsigned long secsSince1900 = highWord << 16 | lowWord;
    // Unix time starts on Jan 1 1970. In seconds, that's 2208988800:
    const unsigned long seventyYears = 2208988800UL;
    // subtract seventy years:
    const unsigned long epoch = secsSince1900 - seventyYears;
    // Taiwan is UTC+8 = 8 * 60 * 60 seconds
    const time_t taiwan_time = epoch + (8 * 60 * 60);
    // const tm* pTime = gmtime(&taiwan_time);
    static char time_text[] = "YYYY-MM-DDTHH:MM:SS+08";
    strftime(time_text, sizeof(time_text), "%Y-%m-%dT%H:%M:%S+08", gmtime(&taiwan_time));
    return String((const char*)time_text);
  }

  return String("Connection error");
}

// send an NTP request to the time server at the given address
unsigned long sendNTPpacket(const char* host) {
	//Serial.println("1");
	// set all bytes in the buffer to 0
	memset(packetBuffer, 0, NTP_PACKET_SIZE);
	// Initialize values needed to form NTP request
	// (see URL above for details on the packets)
	//Serial.println("2");
	packetBuffer[0] = 0b11100011;   // LI, Version, Mode
	packetBuffer[1] = 0;     // Stratum, or type of clock
	packetBuffer[2] = 6;     // Polling Interval
	packetBuffer[3] = 0xEC;  // Peer Clock Precision
	// 8 bytes of zero for Root Delay & Root Dispersion
	packetBuffer[12]  = 49;
	packetBuffer[13]  = 0x4E;
	packetBuffer[14]  = 49;
	packetBuffer[15]  = 52;

	//Serial.println("3");

	// all NTP fields have been given values, now
	// you can send a packet requesting a timestamp:
	Udp.beginPacket(host, 123); //NTP requests are to port 123
	//Serial.println("4");
	Udp.write(packetBuffer, NTP_PACKET_SIZE);
	//Serial.println("5");
	Udp.endPacket();
	//Serial.println("6");

	return 0;
}
`
  var code = `getNetworkTime()`;
  return [code,Blockly.Arduino.ORDER_ATOMIC];
}