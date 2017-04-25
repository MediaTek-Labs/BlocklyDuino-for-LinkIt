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
 * @author hi@vox.vg (Zhi-Wei Cai)
 */
'use strict';

goog.provide('Blockly.Arduino.linkit');

goog.require('Blockly.Arduino');

var controlch;

Blockly.Arduino.linkit_ble_periphral_is_written = function() {
  var characteristic = Blockly.Arduino.valueToCode(this, 'CHARACTERISTIC', Blockly.Arduino.ORDER_ATOMIC) || ''
  var characteristicType = this.getFieldValue('TYPE');
  characteristic = characteristic.replace(/\"/g, "");
  var code = "__periphralCharacteristic.isWritten()";

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_ble_periphral_get_value = function() {
  var characteristic = Blockly.Arduino.valueToCode(this, 'CHARACTERISTIC', Blockly.Arduino.ORDER_ATOMIC) || ''
  var characteristicType = this.getFieldValue('TYPE');
  characteristic = characteristic.replace(/\"/g, "");
  var code = "__periphralCharacteristic.getValue()";

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_ble_Characteristic = function () {
  var characteristic = Blockly.Arduino.valueToCode(this, 'CHARACTERISTIC', Blockly.Arduino.ORDER_ATOMIC) || ''
  var characteristicType = this.getFieldValue('TYPE');
  var code = "\n";
  characteristic = characteristic.replace(/\"/g, "");
  Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_periphral_include'] = '#include <LBLEPeriphral.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_periphral_include_characteristic'] = 'LBLECharacteristicInt __periphralCharacteristic("' + characteristic + '", ' + characteristicType + ');';


  return code;
}

Blockly.Arduino.linkit_ble_periphral = function() {

  var name = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC) || ''
  var service = Blockly.Arduino.valueToCode(this, 'SERVICE', Blockly.Arduino.ORDER_ATOMIC) || ''

  name = name.replace(/\"/g, "");
  service = service.replace(/\"/g, "");

  Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_periphral_include'] = '#include <LBLEPeriphral.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_periphral_include_service'] = 'LBLEService __periphralService("' + service + '");';

  Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
  Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(1000); }\n';

  Blockly.Arduino.setups_['define_linkit_ble_periphral_service_config'] = '__periphralService.addAttribute(__periphralCharacteristic);';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_config'] = 'LBLEPeripheral.addService(__periphralService);';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_setup'] = 'LBLEPeripheral.begin();';

  Blockly.Arduino.setups_['define_linkit_ble_periphral_advertisement_setup'] = 'LBLEAdvertisementData __advertisement;';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_advertisement_name_setup'] = '__advertisement.configAsConnectableDevice("' + name + '");';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_advertisement_advertise'] = 'LBLEPeripheral.advertise(__advertisement);';

  var branch = Blockly.Arduino.statementToCode(this, 'BLE_CONTENT');
  branch = branch.replace(/(^\s+)|(\s+$)/g, "");
  Blockly.Arduino.setups_['manual_add456'] = branch;

  var code = "\n";
  return code;
};

/* origin:
Blockly.Arduino.linkit_ble_periphral = function() {

  var name = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC) || ''
  var service = Blockly.Arduino.valueToCode(this, 'SERVICE', Blockly.Arduino.ORDER_ATOMIC) || ''
  var characteristic = Blockly.Arduino.valueToCode(this, 'CHARACTERISTIC', Blockly.Arduino.ORDER_ATOMIC) || ''
  var characteristicType = this.getFieldValue('TYPE');

  name = name.replace(/\"/g, "");
  service = service.replace(/\"/g, "");
  characteristic = characteristic.replace(/\"/g, "");

  Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_periphral_include'] = '#include <LBLEPeriphral.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_periphral_include_service'] = 'LBLEService __periphralService("' + service + '");';
  Blockly.Arduino.definitions_['define_linkit_ble_periphral_include_characteristic'] = 'LBLECharacteristicInt __periphralCharacteristic("' + characteristic + '", ' + characteristicType + ');';

  Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
  Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(1000); }\n';

  Blockly.Arduino.setups_['define_linkit_ble_periphral_service_config'] = '__periphralService.addAttribute(__periphralCharacteristic);';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_config'] = 'LBLEPeripheral.addService(__periphralService);';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_setup'] = 'LBLEPeripheral.begin();';

  Blockly.Arduino.setups_['define_linkit_ble_periphral_advertisement_setup'] = 'LBLEAdvertisementData __advertisement;';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_advertisement_name_setup'] = '__advertisement.configAsConnectableDevice("' + name + '");';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_advertisement_advertise'] = 'LBLEPeripheral.advertise(__advertisement);';

  var code = "\n";
  return code;
};
*/

Blockly.Arduino.linkit_ble_central_get_peripheral_with_index = function() {

  var index = Blockly.Arduino.valueToCode(this, 'INDEX', Blockly.Arduino.ORDER_ATOMIC) || ''
  index = index.replace(/\"/g, "");

  Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_central_include'] = '#include <LBLECentral.h>';

  Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
  Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(1000); }\n';
  Blockly.Arduino.setups_['define_linkit_ble_setup_central_scan'] = 'LBLECentral.scan();';

  var code = '__scanner.getName(' + index + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_ble_central_scan_count = function() {

  Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_central_include'] = '#include <LBLECentral.h>';

  Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
  Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(1000); }\n';
  Blockly.Arduino.setups_['define_linkit_ble_setup_central_scan'] = 'LBLECentral.scan();';

  var code = 'LBLECentral.getPeripheralCount()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_ble_central_scan = function() {

  Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_central_include'] = '#include <LBLECentral.h>';

  Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
  Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(1000); }\n';
  Blockly.Arduino.setups_['define_linkit_ble_setup_central_scan'] = 'LBLECentral.scan();';

  var code = "\n";
  return code;
};

Blockly.Arduino.linkit_ble_ibeacon = function() {

  var uuid = Blockly.Arduino.valueToCode(this, 'UUID', Blockly.Arduino.ORDER_ATOMIC) || ''
  var majorId = Blockly.Arduino.valueToCode(this, 'MAJOR', Blockly.Arduino.ORDER_ATOMIC) || ''
  var minorId = Blockly.Arduino.valueToCode(this, 'MINOR', Blockly.Arduino.ORDER_ATOMIC) || ''
  var rssi = Blockly.Arduino.valueToCode(this, 'RSSI', Blockly.Arduino.ORDER_ATOMIC) || ''
  uuid = uuid.replace(/\"/g, "");
  majorId = majorId.replace(/\"/g, "");
  minorId = minorId.replace(/\"/g, "");
  rssi = rssi.replace(/\"/g, "");

  Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_periphral_include'] = '#include <LBLEPeriphral.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_ibeacon_init'] = 'LBLEAdvertisementData __beaconData;';

  Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';

  Blockly.Arduino.setups_['define_linkit_ble_ibeacon_config'] = '__beaconData.configAsIBeacon("' + uuid + '", ' + majorId + ', ' + minorId + ', ' + rssi + ');';
  Blockly.Arduino.setups_['define_linkit_ble_ibeacon_advertise'] = 'LBLEPeripheral.advertise(__beaconData);';

  var code = "\n";
  return code;
};

Blockly.Arduino.linkit_ble_wait_until_ready = function() {

  Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';

  Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
  Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(1000); }\n';

  var code = "\n";
  return code;
};

Blockly.Arduino.linkit_ble_get_address = function() {

  Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';

  Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';

  var code = "LBLE.getDeviceAddress()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_ble_ready = function() {

  Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';

  Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';

  var code = "LBLE.ready()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.mcs = function() {
  var deviceid = Blockly.Arduino.valueToCode(this, 'DEVICEID', Blockly.Arduino.ORDER_ATOMIC) || ''
  var devicekey = Blockly.Arduino.valueToCode(this, 'DEVICEKEY', Blockly.Arduino.ORDER_ATOMIC) || ''

  deviceid = deviceid.replace(/\"/g, "");
  devicekey = devicekey.replace(/\"/g, "");

  Blockly.Arduino.definitions_['define_linkit_wifi_include2'] = '#include "MCS.h"\n';
  Blockly.Arduino.definitions_['set_MCS_device'] = 'MCSDevice mcs("'+deviceid+'", "'+devicekey+'");\n';
  var branch = Blockly.Arduino.statementToCode(this, 'CONTENT');
  branch = branch.replace(/(^\s+)|(\s+$)/g, "");

  Blockly.Arduino.setups_['manual_add123'] = branch;

  Blockly.Arduino.setups_['mcs_wait_until_connected'] = "while(!mcs.connected()) { mcs.connect(); }\n";
  var code = '\n';
  return code;
};

Blockly.Arduino.mcs_set_control_channel = function() {
  var control_channel_id = Blockly.Arduino.valueToCode(this, 'CONTROL_CHANNEL', Blockly.Arduino.ORDER_ATOMIC) || ''
  control_channel_id = control_channel_id.replace(/\"/g, "");
  Blockly.Arduino.definitions_['set_MCS_control'+control_channel_id] = 'MCSControllerOnOff '+control_channel_id+'("'+control_channel_id+'");';
  Blockly.Arduino.setups_['mcs_add_channel'+control_channel_id] = 'mcs.addChannel('+control_channel_id+');\n';
  var code = '';
  return code;
};

Blockly.Arduino.mcs_set_display_channel = function() {
  var display_channel_id = Blockly.Arduino.valueToCode(this, 'DISPLAY_CHANNEL', Blockly.Arduino.ORDER_ATOMIC) || ''
  display_channel_id = display_channel_id.replace(/\"/g, "");
  Blockly.Arduino.definitions_['set_MCS_display'+display_channel_id] = 'MCSDisplayOnOff '+display_channel_id+'("'+display_channel_id+'");\n';
  Blockly.Arduino.setups_['mcs_add_channel'+display_channel_id] = 'mcs.addChannel('+display_channel_id+');\n';
  var code = '';
  return code;
};

Blockly.Arduino.mcs_add_channel = function() {
  var add_channel = Blockly.Arduino.valueToCode(this, 'ADD_CHANNEL', Blockly.Arduino.ORDER_ATOMIC) || ''
  add_channel = add_channel.replace(/\"/g, "");
  Blockly.Arduino.setups_['mcs_add_channel'+add_channel] = 'mcs.addChannel('+add_channel+');\n';
  var code = '';
  return code;
};

Blockly.Arduino.mcs_connected = function() {
  var code = "mcs.connected()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.mcs_reconnect = function() {
  var code = "mcs.connect();\n";
  return code;
};

Blockly.Arduino.mcs_wait_until_connected = function() {
  Blockly.Arduino.setups_['mcs_wait_until_connected'] = "while(!mcs.connected()) { mcs.connect(); }\n";
  var code = '';
  return code;
};

Blockly.Arduino.mcs_channel_valid = function() {
  var channel_valid = Blockly.Arduino.valueToCode(this, 'CHANNEL_VALID', Blockly.Arduino.ORDER_ATOMIC) || ''
  channel_valid = channel_valid.replace(/\"/g, "");
  var code = channel_valid+".valid()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.mcs_channel_value = function() {
  var type = this.getFieldValue('TYPE');
  var channel_value = Blockly.Arduino.valueToCode(this, 'CHANNEL_VALUE', Blockly.Arduino.ORDER_ATOMIC) || ''
  channel_value = channel_value.replace(/\"/g, "");

  controlch = channel_value;

  var code = channel_value+".value()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.mcs_channel2_value = function() {
  var type = this.getFieldValue('TYPE');
  var channel_value = Blockly.Arduino.valueToCode(this, 'CHANNEL2_VALUE', Blockly.Arduino.ORDER_ATOMIC) || ''
  channel_value = channel_value.replace(/\"/g, "");

  var channel2_value = Blockly.Arduino.valueToCode(this, 'SET_VALUE', Blockly.Arduino.ORDER_ATOMIC) || ''
  channel2_value = channel2_value.replace(/\"/g, "");

  /*var n = Blockly.Arduino.valueToCode(Blockly.Arduino.mcs_channel_value, 'CHANNEL_VALUE', Blockly.Arduino.ORDER_ATOMIC) || ''
  n = n.replace(/\"/g, "");*/
  var code = channel_value+".set("+channel2_value+".value());\n";
  return code;
};

Blockly.Arduino.mcs_process = function() {
  Blockly.Arduino.setups_['add_serialport'] = 'Serial.begin(9600);';

  var code = "while (!mcs.connected()) {\n";
  code = code+"mcs.connect();\n";
  code = code+"if (mcs.connected()) { Serial.println("+'"MCS 已重新連線"'+"); }\n}\n";
  code = code+"mcs.process(1000);\n";
  return code;
};
Blockly.Arduino.mcs_channel_wait_until_read_value = function() {
  var channel = Blockly.Arduino.valueToCode(this, 'CHANNEL', Blockly.Arduino.ORDER_ATOMIC) || ''
  channel = channel.replace(/\"/g, "");
  Blockly.Arduino.setups_['mcs_channel_wait_until_read_value'+channel] = "while(!"+channel+".valid()) { "+channel+".value(); }\n";
  var code = '';
  return code;
};

Blockly.Arduino.mcs_channel_updated = function() {
  var channel_updated = Blockly.Arduino.valueToCode(this, 'CHANNEL_UPDATED', Blockly.Arduino.ORDER_ATOMIC) || ''
  channel_updated = channel_updated.replace(/\"/g, "");
  var code = channel_updated+".updated()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_wifi_wait_until_ready = function() {

  var ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC) || ''
  var password = Blockly.Arduino.valueToCode(this, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC) || ''
  ssid = ssid.replace(/\"/g, "");
  password = password.replace(/\"/g, "");

  Blockly.Arduino.definitions_['define_linkit_wifi_include'] = '#include <LWiFi.h>';
  Blockly.Arduino.definitions_['define_linkit_wifi_ssid'] = 'char _lwifi_ssid[] = "' + ssid + '";';
  Blockly.Arduino.definitions_['define_linkit_wifi_pass'] = 'char _lwifi_pass[] = "' + password + '";';

  Blockly.Arduino.setups_['define_linkit_wifi_setup'] = 'while (WiFi.begin(_lwifi_ssid, _lwifi_pass) != WL_CONNECTED) { delay(1000); }\n';

  var code = "\n";
  return code;
};

Blockly.Arduino.linkit_wifi_ready_advanced = function() {

  var ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC) || ''
  var password = Blockly.Arduino.valueToCode(this, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC) || ''
  ssid = ssid.replace(/\"/g, "");
  password = password.replace(/\"/g, "");

  Blockly.Arduino.definitions_['define_linkit_wifi_include'] = '#include <LWiFi.h>';
  Blockly.Arduino.definitions_['define_linkit_wifi_ssid'] = 'char _lwifi_ssid[] = "' + ssid + '";';
  Blockly.Arduino.definitions_['define_linkit_wifi_pass'] = 'char _lwifi_pass[] = "' + password + '";';

  var code = "(WiFi.begin(_lwifi_ssid, _lwifi_pass) == WL_CONNECTED)";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_wifi_ready = function() {
  var code = "(WiFi.begin(_lwifi_ssid, _lwifi_pass) == WL_CONNECTED)";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_wifi = function() {

  var ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC) || ''
  var password = Blockly.Arduino.valueToCode(this, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC) || ''
  ssid = ssid.replace(/\"/g, "");
  password = password.replace(/\"/g, "");

  Blockly.Arduino.definitions_['define_linkit_wifi_include'] = '#include <LWiFi.h>';
  Blockly.Arduino.definitions_['define_linkit_wifi_ssid'] = 'char _lwifi_ssid[] = "' + ssid + '";';
  Blockly.Arduino.definitions_['define_linkit_wifi_pass'] = 'char _lwifi_pass[] = "' + password + '";';

  var code = "WiFi.begin(_lwifi_ssid, _lwifi_pass)";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.linkit_wifi_disconnect = function() {
  var code = "WiFi.disconnect();";
  return code;
};

Blockly.Arduino.linkit_wifi_ignore_result = function() {

  var ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC) || ''
  var password = Blockly.Arduino.valueToCode(this, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC) || ''
  ssid = ssid.replace(/\"/g, "");
  password = password.replace(/\"/g, "");

  Blockly.Arduino.definitions_['define_linkit_wifi_include'] = '#include <LWiFi.h>';
  Blockly.Arduino.definitions_['define_linkit_wifi_ssid'] = 'char _lwifi_ssid[] = "' + ssid + '";';
  Blockly.Arduino.definitions_['define_linkit_wifi_pass'] = 'char _lwifi_pass[] = "' + password + '";';

  Blockly.Arduino.setups_['define_linkit_wifi_setup'] = 'WiFi.begin(_lwifi_ssid, _lwifi_pass);';

  var code = "\n";
  return code;
};

Blockly.Arduino.linkit_wifi_status = function() {
  var code = this.getFieldValue('String');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
