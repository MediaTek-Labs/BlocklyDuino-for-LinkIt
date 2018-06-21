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
  var variableName = characteristic.replace(/-/g, '_');
  variableName = variableName.toLowerCase();
  var code = '__' + variableName + '.isWritten()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_ble_periphral_write = function() {
  var characteristic = Blockly.Arduino.valueToCode(this, 'CHARACTERISTIC', Blockly.Arduino.ORDER_ATOMIC) || ''
  var val = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || ''
  var type = this.getFieldValue('TYPE');
  characteristic = characteristic.replace(/\"/g, "");
  var variableName = characteristic.replace(/-/g, '_');
  variableName = variableName.toLowerCase();
  if(type == "int"){
    var code = '__' + variableName + '.setValue('+val+');';
  }
  else{
    var code = '__' + variableName + '.setValue("'+val+'");';
  }
  code+="\n";
  return code;
};

Blockly.Arduino.linkit_ble_periphral_get_value = function() {
  var characteristic = Blockly.Arduino.valueToCode(this, 'CHARACTERISTIC', Blockly.Arduino.ORDER_ATOMIC) || ''
  var characteristicType = this.getFieldValue('TYPE');
  characteristic = characteristic.replace(/\"/g, "");
  var variableName = characteristic.replace(/-/g, '_');
  variableName = variableName.toLowerCase();
  var code = '__' + variableName + '.getValue()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_ble_Characteristic = function () {
  var characteristic = Blockly.Arduino.valueToCode(this, 'CHARACTERISTIC', Blockly.Arduino.ORDER_ATOMIC) || ''
  var characteristicAttribute = this.getFieldValue('TYPE');
  var characteristicType = this.getFieldValue('CHARACTERISTIC_TYPE');
  var code = "\n";
  characteristic = characteristic.replace(/\"/g, "");
  var variableName = characteristic.replace(/-/g, '_');
  variableName = variableName.toLowerCase();

  Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_periphral_include'] = '#include <LBLEPeriphral.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_periphral_include_characteristic' + variableName] = '' + characteristicType + ' __' + variableName + '("' + characteristic + '", ' + characteristicAttribute + ');';

  Blockly.Arduino.setups_['define_linkit_ble_periphral__service_config' + variableName] = '__periphralService.addAttribute(__' + variableName + ');';

  return code;
}
Blockly.Arduino.linkit_ble_eddy = function () {
  var url = Blockly.Arduino.valueToCode(this, 'URL', Blockly.Arduino.ORDER_ATOMIC) || ''
  var protocol = this.getFieldValue('TYPE');
  url = url.replace(/\"/g, "");

  // http://a.bc
  if (url.length < 11 ||
      (!url.startsWith("http://") &&
      !url.startsWith("https://"))) {
          return '// ' + Blockly.Msg.LINKIT_SET_BLE_PERIPHRAL_EDDY_URL_INVALID;
  }

  var eddyType = "";
  if (url.startsWith("http://")) {
      eddyType = "EDDY_HTTP";
      url = url.substring(7);
  } else {
      eddyType = "EDDY_HTTPS";
      url = url.substring(8);
  }

  if (url.length > 17) {
      url = url.substring(0,17);
  }

  Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_periphral_include'] = '#include <LBLEPeriphral.h>';

  Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
  Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(100); }\n';

  Blockly.Arduino.setups_['define_linkit_ble_beacon_advertisement_setup'] = 'LBLEAdvertisementData __beaconData;';
  Blockly.Arduino.setups_['define_linkit_ble_beacon_config_setup'] = '__beaconData.configAsEddystoneURL(' + eddyType + ', "' + url + '");';
  Blockly.Arduino.setups_['define_linkit_ble_beacon_advertisement_advertise'] = 'LBLEPeripheral.advertise(__beaconData);';

  return '';
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
  Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(100); }\n';

  var branch = Blockly.Arduino.statementToCode(this, 'BLE_CONTENT');
  branch = branch.replace(/(^\s+)|(\s+$)/g, "");
  Blockly.Arduino.setups_['define_linkit_ble_periphral_service_config'] = branch;

  //Blockly.Arduino.setups_['define_linkit_ble_periphral_service_config'] = '__periphralService.addAttribute(__periphralCharacteristic);';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_config'] = 'LBLEPeripheral.addService(__periphralService);';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_advertisement_name_set'] = 'LBLEPeripheral.setName("' + name + '");';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_setup'] = 'LBLEPeripheral.begin();';

  Blockly.Arduino.setups_['define_linkit_ble_periphral_advertisement_setup'] = 'LBLEAdvertisementData __advertisement;';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_advertisement_name_setup'] = '__advertisement.configAsConnectableDevice("' + name + '");';
  Blockly.Arduino.setups_['define_linkit_ble_periphral_advertisement_advertise'] = 'LBLEPeripheral.advertise(__advertisement);';

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
  Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(100); }\n';

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
  Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(100); }\n';
  Blockly.Arduino.setups_['define_linkit_ble_setup_central_scan'] = 'LBLECentral.scan();';

  var code = '__scanner.getName(' + index + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_ble_central_scan_count = function() {

  Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_central_include'] = '#include <LBLECentral.h>';

  Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
  Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(100); }\n';
  Blockly.Arduino.setups_['define_linkit_ble_setup_central_scan'] = 'LBLECentral.scan();';

  var code = 'LBLECentral.getPeripheralCount()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_ble_central_scan = function() {

  Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';
  Blockly.Arduino.definitions_['define_linkit_ble_central_include'] = '#include <LBLECentral.h>';

  Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
  Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(100); }\n';
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
  Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(100); }\n';

  Blockly.Arduino.setups_['define_linkit_ble_ibeacon_config'] = '__beaconData.configAsIBeacon("' + uuid + '", ' + majorId + ', ' + minorId + ', ' + rssi + ');';
  Blockly.Arduino.setups_['define_linkit_ble_ibeacon_advertise'] = 'LBLEPeripheral.advertise(__beaconData);';

  var code = "\n";
  return code;
};

Blockly.Arduino.linkit_ble_wait_until_ready = function() {

  Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';

  Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';
  Blockly.Arduino.setups_['define_linkit_ble_setup_wait_loop'] = 'while (!LBLE.ready()) { delay(100); }\n';

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

  Blockly.Arduino.definitions_['define_mcs_include2'] = '#include "MCS.h"\n';
  Blockly.Arduino.definitions_['set_MCS_device'] = 'MCSDevice mcs("'+deviceid+'", "'+devicekey+'");\n';
  var branch = Blockly.Arduino.statementToCode(this, 'CONTENT');
  branch = branch.replace(/(^\s+)|(\s+$)/g, "");

  var code = branch;

  code += "while(!mcs.connected()) { mcs.connect(); }\n";
  return code;
};

Blockly.Arduino.mcs_set_control_channel = function() {
  var control_channel_id = Blockly.Arduino.valueToCode(this, 'CONTROL_CHANNEL', Blockly.Arduino.ORDER_ATOMIC) || ''
  control_channel_id = control_channel_id.replace(/\"/g, "");
  var type = this.getFieldValue('TYPE');
  Blockly.Arduino.setups_['mcs_add_channel'+control_channel_id] = 'mcs.addChannel('+control_channel_id+');';
  if (type == "boolean"){
    Blockly.Arduino.definitions_['set_MCS_control'+control_channel_id] = 'MCSControllerOnOff '+control_channel_id+'("'+control_channel_id+'");';
  }
  else if(type == "category"){
    Blockly.Arduino.definitions_['set_MCS_control'+control_channel_id] = 'MCSControllerCategory '+control_channel_id+'("'+control_channel_id+'");';
  }

  else if(type == "float"){
    Blockly.Arduino.definitions_['set_MCS_control'+control_channel_id] = 'MCSControllerFloat '+control_channel_id+'("'+control_channel_id+'");';
  }

  else if(type == "String"){
    Blockly.Arduino.definitions_['set_MCS_control'+control_channel_id] = 'MCSControllerString '+control_channel_id+'("'+control_channel_id+'");';
  }

  else{
    Blockly.Arduino.definitions_['set_MCS_control'+control_channel_id] = 'MCSControllerInteger '+control_channel_id+'("'+control_channel_id+'");';
  }
  var code = '';
  return code;
};

Blockly.Arduino.mcs_set_display_channel = function() {
  var display_channel_id = Blockly.Arduino.valueToCode(this, 'DISPLAY_CHANNEL', Blockly.Arduino.ORDER_ATOMIC) || ''
  display_channel_id = display_channel_id.replace(/\"/g, "");
  Blockly.Arduino.setups_['mcs_add_channel'+display_channel_id] = 'mcs.addChannel('+display_channel_id+');';
  var type = this.getFieldValue('TYPE');

  if (type == "boolean"){
    Blockly.Arduino.definitions_['set_MCS_display'+display_channel_id] = 'MCSDisplayOnOff '+display_channel_id+'("'+display_channel_id+'");';
  }
  else if(type == "category"){
    Blockly.Arduino.definitions_['set_MCS_display'+display_channel_id] = 'MCSDisplayCategory '+display_channel_id+'("'+display_channel_id+'");';
  }

  else if(type == "float"){
    Blockly.Arduino.definitions_['set_MCS_display'+display_channel_id] = 'MCSDisplayFloat '+display_channel_id+'("'+display_channel_id+'");';
  }

  else if(type == "String"){
    Blockly.Arduino.definitions_['set_MCS_display'+display_channel_id] = 'MCSDisplayString '+display_channel_id+'("'+display_channel_id+'");';
  }
  else{
    Blockly.Arduino.definitions_['set_MCS_display'+display_channel_id] = 'MCSDisplayInteger '+display_channel_id+'("'+display_channel_id+'");';
  }
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
  var channel_value = Blockly.Arduino.valueToCode(this, 'CHANNEL_VALUE', Blockly.Arduino.ORDER_ATOMIC) || ''
  channel_value = channel_value.replace(/\"/g, "");

  controlch = channel_value;

  var code = channel_value+".value()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.mcs_channel2_value = function() {
  var channel_value = Blockly.Arduino.valueToCode(this, 'CHANNEL2_VALUE', Blockly.Arduino.ORDER_ATOMIC) || ''
  channel_value = channel_value.replace(/\"/g, "");

  var channel2_value = Blockly.Arduino.valueToCode(this, 'SET_VALUE', Blockly.Arduino.ORDER_ATOMIC) || ''
  channel2_value = channel2_value.replace(/\"/g, "");

  /*var n = Blockly.Arduino.valueToCode(Blockly.Arduino.mcs_channel_value, 'CHANNEL_VALUE', Blockly.Arduino.ORDER_ATOMIC) || ''
  n = n.replace(/\"/g, "");*/
  var code = channel_value+'.set('+channel2_value+');\n';
  return code;
};

Blockly.Arduino.mcs_process = function() {
  Blockly.Arduino.setups_['add_serialport'] = 'Serial.begin(9600);';

  var code = 'while (!mcs.connected()) {\n';
  code = code+'  mcs.connect();\n';
  code = code+'  if (mcs.connected()) { Serial.println("MCS Reconnected."); }\n';
  code = code+'}\n';
  code = code+'mcs.process(100);\n';
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
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------- MCS Lite -----------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
//

Blockly.Arduino.mcslite = function() {
  var deviceid = Blockly.Arduino.valueToCode(this, 'DEVICEIDL', Blockly.Arduino.ORDER_ATOMIC) || ''
  var devicekey = Blockly.Arduino.valueToCode(this, 'DEVICEKEYL', Blockly.Arduino.ORDER_ATOMIC) || ''
  var serv = Blockly.Arduino.valueToCode(this, 'SERV', Blockly.Arduino.ORDER_ATOMIC) || ''
  var port = Blockly.Arduino.valueToCode(this, 'PORT', Blockly.Arduino.ORDER_ATOMIC) || ''

  deviceid = deviceid.replace(/\"/g, "");
  devicekey = devicekey.replace(/\"/g, "");
  serv = serv .replace(/\"/g, "");
  Blockly.Arduino.definitions_['define_mcs_include2'] = '#include "MCS.h"\n';
  Blockly.Arduino.definitions_['set_MCS_device'] = 'MCSLiteDevice mcs("'+deviceid+'", "'+devicekey+'", "'+serv+'", '+port.toString()+');\n';
  var branch = Blockly.Arduino.statementToCode(this, 'CONTENT');
  branch = branch.replace(/(^\s+)|(\s+$)/g, "");

  var code = branch;

  code += "while(!mcs.connected()) { mcs.connect(); }\n";
  return code;
  /*code += 'request += "GET /deviceId/";\n'
  code += 'request += String(deviceId);\n'
  code += 'request += "/deviceKey/";\n'
  code += 'request += String(deviceKey);\n'
  code += 'request += "/viewer HTTP/1.1\\r\\n";\n'
  code += 'request += "Upgrade: websocket\\r\\n";\n'
  code += 'request += "Connection: Upgrade\\r\\n";\n'
  code += 'request += "Sec-WebSocket-Version: 13\\r\\n";\n'
  code += 'request += "Sec-WebSocket-Key: L159VM0TWUzyDxwJEIEzjw==\\r\\n";\n'
  code += 'request += "Host: ";\n'
  code += 'request += String(server);\n'
  code += 'request += "\\r\\nOrigin: null\\r\\n\\r\\n";\n'*/
};

//---------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------- End of MCSLite ---------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------


Blockly.Arduino.linkit_wifi_wait_until_ready = function() {

  var ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC) || ''
  var password = Blockly.Arduino.valueToCode(this, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC) || ''
  ssid = ssid.replace(/\"/g, "");
  password = password.replace(/\"/g, "");

  Blockly.Arduino.definitions_['define_linkit_wifi_include'] = '#include <LWiFi.h>';
  Blockly.Arduino.definitions_['define_linkit_wifi_ssid'] = 'char _lwifi_ssid[] = "' + ssid + '";';
  Blockly.Arduino.definitions_['define_linkit_wifi_pass'] = 'char _lwifi_pass[] = "' + password + '";';

  var code = 'while (WiFi.begin(_lwifi_ssid, _lwifi_pass) != WL_CONNECTED) { delay(1000); }\n';

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

Blockly.Arduino.linkit_lremote = function() {
  var orientation = this.getFieldValue('ORIENTATION'); 
  var deviceid = Blockly.Arduino.valueToCode(this, 'DEVICEID', Blockly.Arduino.ORDER_ATOMIC) || '';
  var row = Blockly.Arduino.valueToCode(this, 'ROW', Blockly.Arduino.ORDER_ATOMIC) || '';
  var column = Blockly.Arduino.valueToCode(this, 'COLUMN', Blockly.Arduino.ORDER_ATOMIC) || '';

  deviceid = deviceid.replace(/\"/g, ""); 
  row = row.replace(/\"/g, ""); 
  column = column.replace(/\"/g, ""); 

  Blockly.Arduino.definitions_['define_linkit_lremote_include'] = '#include <LRemote.h>'; 

  var branch = Blockly.Arduino.statementToCode(this, 'CONTENT'); 
  branch = branch.replace(/(^\s+)|(\s+$)/g, "");

  if(orientation == "vertical")
  	orientation = "RC_PORTRAIT"; 
  else if(orientation == "horizontal")
  	orientation = "RC_LANDSCAPE"; 
  else
    orientation = ""; 

  var code =    'LRemote.setName("' + deviceid + '"); \n'; 
  code = code + 'LRemote.setOrientation(' + orientation + '); \n'; 
  code = code + 'LRemote.setGrid(' + column + ', ' + row + '); \n'; 
  code = code + '  ' + branch + '\n';   
  code = code + 'LRemote.begin(); \n'; 

  return code; 
  
};

Blockly.Arduino.linkit_lremote_settext = function() {
  var name = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var column = Blockly.Arduino.valueToCode(this, 'COLUMN', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var row = Blockly.Arduino.valueToCode(this, 'ROW', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var width = Blockly.Arduino.valueToCode(this, 'WIDTH', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var height = Blockly.Arduino.valueToCode(this, 'HEIGHT', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var colour = this.getFieldValue('COLOUR'); 

  name = name.replace(/\"/g, ""); 
  content = content.replace(/\"/g, ""); 
  row = row.replace(/\"/g, ""); 
  column = column.replace(/\"/g, ""); 
  width = width.replace(/\"/g, ""); 
  height = height.replace(/\"/g, ""); 

  if(colour == "orange")
    colour = "RC_ORANGE"; 
  else if(colour == "blue")
    colour = "RC_BLUE"; 
  else if(colour == "green")
    colour = "RC_GREEN"; 
  else if(colour == "pink")
    colour = "RC_PINK"; 
  else if(colour == "gray")
    colour = "RC_GREY"; 
  else if(colour == "yellow")
    colour = "RC_YELLOW"; 
  else 
    colour = ""; 

  Blockly.Arduino.definitions_['define_linkit_lremote_setText_' + name] = 'LRemoteLabel ' + name + '; '; 
  
  var code = '\n'; 
  code = code + name + '.setPos(' + column + ', ' + row + '); \n';
  code = code + name + '.setText(\"' + content + '\"); \n'; 
  code = code + name + '.setSize(' + width + ', ' + height + '); \n'; 
  code = code + name + '.setColor(' + colour + '); \n'; 
  code = code + 'LRemote.addControl(' + name + '); \n\n'; 

  return code; 
}


Blockly.Arduino.linkit_lremote_setbuttonsquare = function() {
  var name = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var column = Blockly.Arduino.valueToCode(this, 'COLUMN', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var row = Blockly.Arduino.valueToCode(this, 'ROW', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var width = Blockly.Arduino.valueToCode(this, 'WIDTH', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var height = Blockly.Arduino.valueToCode(this, 'HEIGHT', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var colour = this.getFieldValue('COLOUR'); 

  name = name.replace(/\"/g, ""); 
  content = content.replace(/\"/g, ""); 
  row = row.replace(/\"/g, ""); 
  column = column.replace(/\"/g, ""); 
  width = width.replace(/\"/g, ""); 
  height = height.replace(/\"/g, ""); 

  if(colour == "orange")
    colour = "RC_ORANGE"; 
  else if(colour == "blue")
    colour = "RC_BLUE"; 
  else if(colour == "green")
    colour = "RC_GREEN"; 
  else if(colour == "pink")
    colour = "RC_PINK"; 
  else if(colour == "gray")
    colour = "RC_GREY"; 
  else if(colour == "yellow")
    colour = "RC_YELLOW"; 
  else 
    colour = ""; 

  Blockly.Arduino.definitions_['define_linkit_lremote_setButtonSquare_' + name] = 'LRemoteButton ' + name + '; '; 
  
  var code =  '\n'; 
  code = code + name + '.setPos(' + column + ', ' + row + '); \n';
  code = code + name + '.setText(\"' + content + '\"); \n'; 
  code = code + name + '.setSize(' + width + ', ' + height + '); \n'; 
  code = code + name + '.setColor(' + colour + '); \n'; 
  code = code + 'LRemote.addControl(' + name + '); \n\n'; 

  return code; 
}

Blockly.Arduino.linkit_lremote_setbuttoncircle = function() {
  var name = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var column = Blockly.Arduino.valueToCode(this, 'COLUMN', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var row = Blockly.Arduino.valueToCode(this, 'ROW', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var width = Blockly.Arduino.valueToCode(this, 'WIDTH', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var height = Blockly.Arduino.valueToCode(this, 'HEIGHT', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var colour = this.getFieldValue('COLOUR'); 

  name = name.replace(/\"/g, ""); 
  content = content.replace(/\"/g, ""); 
  row = row.replace(/\"/g, ""); 
  column = column.replace(/\"/g, ""); 
  width = width.replace(/\"/g, ""); 
  height = height.replace(/\"/g, ""); 

  if(colour == "orange")
    colour = "RC_ORANGE"; 
  else if(colour == "blue")
    colour = "RC_BLUE"; 
  else if(colour == "green")
    colour = "RC_GREEN"; 
  else if(colour == "pink")
    colour = "RC_PINK"; 
  else if(colour == "gray")
    colour = "RC_GREY"; 
  else if(colour == "yellow")
    colour = "RC_YELLOW"; 
  else 
    colour = ""; 

  Blockly.Arduino.definitions_['define_linkit_lremote_setButtonCircle_' + name] = 'LRemoteCircleButton ' + name + '; '; 
  
  var code = '\n'; 
  code = code + name + '.setPos(' + column + ', ' + row + '); \n';
  code = code + name + '.setSize(' + width + ', ' + height + '); \n'; 
  code = code + name + '.setText(\"' + content + '\"); \n'; 
  code = code + name + '.setColor(' + colour + '); \n'; 
  code = code + 'LRemote.addControl(' + name + '); \n\n'; 

  return code; 
}

Blockly.Arduino.linkit_lremote_setswitch = function() {
  var name = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var column = Blockly.Arduino.valueToCode(this, 'COLUMN', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var row = Blockly.Arduino.valueToCode(this, 'ROW', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var width = Blockly.Arduino.valueToCode(this, 'WIDTH', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var height = Blockly.Arduino.valueToCode(this, 'HEIGHT', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var colour = this.getFieldValue('COLOUR'); 

  name = name.replace(/\"/g, "");
  content = content.replace(/\"/g, ""); 
  row = row.replace(/\"/g, ""); 
  column = column.replace(/\"/g, ""); 
  width = width.replace(/\"/g, ""); 
  height = height.replace(/\"/g, ""); 

  if(colour == "orange")
    colour = "RC_ORANGE"; 
  else if(colour == "blue")
    colour = "RC_BLUE"; 
  else if(colour == "green")
    colour = "RC_GREEN"; 
  else if(colour == "pink")
    colour = "RC_PINK"; 
  else if(colour == "gray")
    colour = "RC_GREY"; 
  else if(colour == "yellow")
    colour = "RC_YELLOW"; 
  else 
    colour = ""; 

  Blockly.Arduino.definitions_['define_linkit_lremote_setSwitch_' + name] = 'LRemoteSwitch ' + name + '; '; 
  
  var code = '\n'; 
  code = code + name + '.setPos(' + column + ', ' + row + '); \n';
  code = code + name + '.setSize(' + width + ', ' + height + '); \n'; 
  code = code + name + '.setText(\"' + content + '\"); \n'; 
  code = code + name + '.setColor(' + colour + '); \n'; 
  code = code + 'LRemote.addControl(' + name + '); \n\n'; 

  return code; 
}

Blockly.Arduino.linkit_lremote_setslider = function() {
  var name = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var column = Blockly.Arduino.valueToCode(this, 'COLUMN', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var row = Blockly.Arduino.valueToCode(this, 'ROW', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var width = Blockly.Arduino.valueToCode(this, 'WIDTH', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var height = Blockly.Arduino.valueToCode(this, 'HEIGHT', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var minimum = Blockly.Arduino.valueToCode(this, 'MINIMUM', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var maximum = Blockly.Arduino.valueToCode(this, 'MAXIMUM', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var initial = Blockly.Arduino.valueToCode(this, 'INITIAL', Blockly.Arduino.ORDER_ATOMIC) || ''; 
  var colour = this.getFieldValue('COLOUR'); 

  name = name.replace(/\"/g, ""); 
  content = content.replace(/\"/g, ""); 
  row = row.replace(/\"/g, ""); 
  column = column.replace(/\"/g, ""); 
  width = width.replace(/\"/g, ""); 
  height = height.replace(/\"/g, ""); 
  minimum = minimum.replace(/\"/g, ""); 
  maximum = maximum.replace(/\"/g, ""); 
  initial = initial.replace(/\"/g, ""); 

  if(colour == "orange")
    colour = "RC_ORANGE"; 
  else if(colour == "blue")
    colour = "RC_BLUE"; 
  else if(colour == "green")
    colour = "RC_GREEN"; 
  else if(colour == "pink")
    colour = "RC_PINK"; 
  else if(colour == "gray")
    colour = "RC_GREY"; 
  else if(colour == "yellow")
    colour = "RC_YELLOW"; 
  else 
    colour = ""; 

  Blockly.Arduino.definitions_['define_linkit_lremote_setSlider_' + name] = 'LRemoteSlider ' + name + '; '; 
  
  var code = '\n'; 
  code = code + name + '.setPos(' + column + ', ' + row + '); \n';
  code = code + name + '.setSize(' + width + ', ' + height + '); \n';
  code = code + name + '.setText(\"' + content + '\"); \n'; 
  code = code + name + '.setValueRange(' + minimum + ', ' + maximum + ', ' + initial + '); \n'; 
  code = code + name + '.setColor(' + colour + '); \n'; 
  code = code + 'LRemote.addControl(' + name + '); \n\n'; 

  return code; 
}

Blockly.Arduino.linkit_lremote_connect_status = function(){
  var code = 'LRemote.connected()'; 
  return [code, Blockly.Arduino.ORDER_ATOMIC]; 
}

Blockly.Arduino.linkit_lremote_process = function(){
  var code = 'LRemote.process();\n'; 
  return code; 
}; 

Blockly.Arduino.linkit_lremote_is_written = function(){
  var name = this.getFieldValue('NAME');
  name = name.replace(/\"/g, "");
  var code = name + '.isValueChanged()'; 
  return [code, Blockly.Arduino.ORDER_ATOMIC]; 
}; 

Blockly.Arduino.linkit_lremote_read_value = function(){
  var name = this.getFieldValue('NAME'); 
  name = name.replace(/\"/g, ""); 
  var code = name + '.getValue()'; 
  return [code, Blockly.Arduino.ORDER_ATOMIC]; 
}; 

Blockly.Arduino.linkit_lremote_update_textlabel = function(){
  var name = this.getFieldValue('NAME');
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '';
  name = name.replace(/\"/g, ""); 
  content = content.replace(/\"/g, "");
  var code = name + '.updateText(String(' + content + '));\n';
  return code; 
}; 
