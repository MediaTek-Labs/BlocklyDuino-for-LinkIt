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
 * @author ok.okada.hiroyuki@gmail.com (hiroyuki okada)
 */
'use strict';

goog.provide('Blockly.Arduino.m2x');

goog.require('Blockly.Arduino');

Blockly.Arduino.m2x_begin = function () {
  var version = this.getFieldValue('VERSION');
  var id = Blockly.Arduino.valueToCode(this, 'ID', Blockly.Arduino.ORDER_ATOMIC) || ''
  var stream = Blockly.Arduino.valueToCode(this, 'STREAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || ''
  var key = Blockly.Arduino.valueToCode(this, 'KEY', Blockly.Arduino.ORDER_ATOMIC) || ''

  Blockly.Arduino.definitions_['define_spi'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['define_ethernet'] = '#include <Ethernet' + version + '.h>';
  Blockly.Arduino.definitions_['define_jsonlite'] = '#include <jsonlite.h>';
  Blockly.Arduino.definitions_['define_M2XStreamClient'] = '#include <M2XStreamClient.h>';
  Blockly.Arduino.definitions_['define_ethernet_client'] = 'EthernetClient client;';
  Blockly.Arduino.definitions_['define_m2x_id'] = 'char m2xId[] = ' + id + ';';
  Blockly.Arduino.definitions_['define_m2x_stream_name'] = 'char m2xStream[] = ' + stream + ';';
  Blockly.Arduino.definitions_['define_m2x_key'] = 'char m2xKey[] = ' + key + ';';
  Blockly.Arduino.definitions_['define_m2xstreamclient'] = 'M2XStreamClient m2xClient(&client, m2xKey);\n';

  return "";
};

Blockly.Arduino.m2x_update_value = function () {
  var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0'

  var code = 'm2xClient.updateStreamValue(m2xId, m2xStream, ' + value + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.m2x_list_value = function () {
  Blockly.Arduino.setups_['setup_serial_' + profile.default.serial] = 'Serial.begin(' + profile.default.serial + ');\n';

  Blockly.Arduino.definitions_['define_on_data_point_found'] = 'void on_data_point_found(const char* at, const char* value, int index, void* context, int type) {\n' +
    '  Serial.print("Found a data point, index:");\n' +
    '  Serial.println(index);\n' +
    '  Serial.print("Type:");\n' +
    '  Serial.println(type);\n' +
    '  Serial.print("At:");\n' +
    '  Serial.println(at);\n' +
    '  Serial.print("Value:");\n' +
    '  Serial.println(value);\n' +
    '}\n';

  var code = 'm2xClient.listStreamValues(m2xId, m2xStream, on_data_point_found, NULL);\n';
  return code;
};

Blockly.Arduino.m2x_custom_list_value = function () {
  var date0 = this.getFieldValue('DATE0');
  var hour0 = this.getFieldValue('HOUR0');
  var min0 = this.getFieldValue('MIN0');
  var sec0 = this.getFieldValue('SEC0');
  var date1 = this.getFieldValue('DATE1');
  var hour1 = this.getFieldValue('HOUR1');
  var min1 = this.getFieldValue('MIN1');
  var sec1 = this.getFieldValue('SEC1');


  Blockly.Arduino.setups_['setup_serial_' + profile.default.serial] = 'Serial.begin(' + profile.default.serial + ');\n';

  Blockly.Arduino.definitions_['define_on_data_point_found'] = 'void on_data_point_found(const char* at, const char* value, int index, void* context, int type) {\n' +
    '  Serial.print("Found a data point, index:");\n' +
    '  Serial.println(index);\n' +
    '  Serial.print("Type:");\n' +
    '  Serial.println(type);\n' +
    '  Serial.print("At:");\n' +
    '  Serial.println(at);\n' +
    '  Serial.print("Value:");\n' +
    '  Serial.println(value);\n' +
    '}\n';

  var code = 'm2xClient.listStreamValues(m2xId, m2xStream, on_data_point_found, NULL, "start=' + date0 + 'T' + hour0 + ':' + min0 + ':' + sec0 + 'Z&end=' + date1 + 'T' + hour1 + ':' + min1 + ':' + sec1 + 'Z");\n';
  return code;
};

Blockly.Arduino.m2x_delete_values = function () {
  var date0 = this.getFieldValue('DATE0');
  var hour0 = this.getFieldValue('HOUR0');
  var min0 = this.getFieldValue('MIN0');
  var sec0 = this.getFieldValue('SEC0');
  var date1 = this.getFieldValue('DATE1');
  var hour1 = this.getFieldValue('HOUR1');
  var min1 = this.getFieldValue('MIN1');
  var sec1 = this.getFieldValue('SEC1');

  var code = 'm2xClient.deleteValues(m2xId, m2xStream, "' + date0 + 'T' + hour0 + ':' + min0 + ':' + sec0 + 'Z","' + date1 + 'T' + hour1 + ':' + min1 + ':' + sec1 + 'Z")';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.m2x_update_location = function () {
  var name = Blockly.Arduino.valueToCode(this, 'LOCATION_NAME', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var lat = Blockly.Arduino.valueToCode(this, 'LATITUDE', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var lon = Blockly.Arduino.valueToCode(this, 'LONGITUDE', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var ele = Blockly.Arduino.valueToCode(this, 'ELEVATION', Blockly.Arduino.ORDER_ATOMIC) || '0'

  var code = 'm2xClient.updateLocation(m2xId, ' + name + ', (double)' + lat + ', (double)' + lon + ', (double)' + ele + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.m2x_read_location = function () {
  Blockly.Arduino.setups_['setup_serial_' + profile.default.serial] = 'Serial.begin(' + profile.default.serial + ');\n';

  Blockly.Arduino.definitions_['define_on_location_found'] =
    'void on_location_found(const char* name,\n' +
    '                       double latitude,\n'+
    '                       double longitude,\n'+
    '                       double elevation,\n'+
    '                       const char* timestamp,\n'+
    '                       int index,\n'+
    '                       void* context) {\n'+
    '  Serial.print("Found a location, index:");\n'+
    '  Serial.println(index);\n'+
    '  Serial.print("Name: ");\n'+
    '  Serial.println(name);\n'+
    '  Serial.print("Latitude: ");\n'+
    '  Serial.println(latitude);\n'+
    '  Serial.print("Longitude: ");\n'+
    '  Serial.println(longitude);\n'+
    '  Serial.print("Elevation: ");\n'+
    '  Serial.println(elevation);\n'+
    '  Serial.print("Timestamp: ");\n'+
    '  Serial.println(timestamp);\n'+
    '}\n';

  var code = 'm2xClient.readLocation(m2xId, on_location_found, NULL)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
