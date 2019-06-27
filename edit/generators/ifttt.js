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
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Arduino.ifttt');

goog.require('Blockly.Arduino');

Blockly.Arduino.ifttt_get_url = function() {
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] = '#include <LWiFi.h>';
  Blockly.Arduino.definitions_['define_ifttt_invoke'] = `
void invokeIFTTT(const String& key, const String& event, const String& p1, const String& p2, const String& p3)
{
  // Initialize the Ethernet client library
  // with the IP address and port of the server
  // that you want to connect to (port 80 is default for HTTP):
  static TLSClient client;

  // This is the root certificate(CA) for https://maker.ifttt.com/
  // Different host server may use different root CA.
  static const char rootCA[] = "-----BEGIN CERTIFICATE-----\\r\\n"
  "MIIFJjCCBA6gAwIBAgIIRJxbLJxAihkwDQYJKoZIhvcNAQELBQAwgbQxCzAJBgNV\\r\\n"
  "BAYTAlVTMRAwDgYDVQQIEwdBcml6b25hMRMwEQYDVQQHEwpTY290dHNkYWxlMRow\\r\\n"
  "GAYDVQQKExFHb0RhZGR5LmNvbSwgSW5jLjEtMCsGA1UECxMkaHR0cDovL2NlcnRz\\r\\n"
  "LmdvZGFkZHkuY29tL3JlcG9zaXRvcnkvMTMwMQYDVQQDEypHbyBEYWRkeSBTZWN1\\r\\n"
  "cmUgQ2VydGlmaWNhdGUgQXV0aG9yaXR5IC0gRzIwHhcNMTYwNzI1MTc0NTM4WhcN\\r\\n"
  "MTgwOTI4MjIxMzU0WjA5MSEwHwYDVQQLExhEb21haW4gQ29udHJvbCBWYWxpZGF0\\r\\n"
  "ZWQxFDASBgNVBAMMCyouaWZ0dHQuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A\\r\\n"
  "MIIBCgKCAQEA8c1HRaRBFWER/SG2eXN++ykWLSoCyJ1xcxOXy15Bk57WXGLIBZHn\\r\\n"
  "Y8/SN+H1KuUcN40KC35NuGhaQP43cELcBSG/BiYTlFPIAizauX2K9VZh+zWhwkgq\\r\\n"
  "y8bJ5+yvZKH5gwqNL248Y4gjwaPeU8o2K1xrFYWSfM/7kFQFul2goWOA3HIn5qE3\\r\\n"
  "NUsgxF8uLh2BSuJKQF73WDvM1zE86MIU20M9+PEo/pV5orIPZX/54cAZgXnr+59t\\r\\n"
  "KPL14Rl9qqTiptMJC8y2CIqKC9zHBwIwX4uYPOquom1oqAuItWgqAJwtC3z5a20r\\r\\n"
  "wbI2eNbDPdbeweT/4RtCjTwKlQuHmzeLbwIDAQABo4IBtDCCAbAwDAYDVR0TAQH/\\r\\n"
  "BAIwADAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUHAwIwDgYDVR0PAQH/BAQD\\r\\n"
  "AgWgMDcGA1UdHwQwMC4wLKAqoCiGJmh0dHA6Ly9jcmwuZ29kYWRkeS5jb20vZ2Rp\\r\\n"
  "ZzJzMS0yNzMuY3JsMF0GA1UdIARWMFQwSAYLYIZIAYb9bQEHFwEwOTA3BggrBgEF\\r\\n"
  "BQcCARYraHR0cDovL2NlcnRpZmljYXRlcy5nb2RhZGR5LmNvbS9yZXBvc2l0b3J5\\r\\n"
  "LzAIBgZngQwBAgEwdgYIKwYBBQUHAQEEajBoMCQGCCsGAQUFBzABhhhodHRwOi8v\\r\\n"
  "b2NzcC5nb2RhZGR5LmNvbS8wQAYIKwYBBQUHMAKGNGh0dHA6Ly9jZXJ0aWZpY2F0\\r\\n"
  "ZXMuZ29kYWRkeS5jb20vcmVwb3NpdG9yeS9nZGlnMi5jcnQwHwYDVR0jBBgwFoAU\\r\\n"
  "QMK9J47MNIMwojPX+2yz8LQsgM4wIQYDVR0RBBowGIILKi5pZnR0dC5jb22CCWlm\\r\\n"
  "dHR0LmNvbTAdBgNVHQ4EFgQUTv/uQ1GFjIW3WdcM3sn8fwtzoKQwDQYJKoZIhvcN\\r\\n"
  "AQELBQADggEBAA0L5s4DXdeyx2rsVKljSq7CsDUbl1w8AgyxO0o1JAdYoPwZOlUT\\r\\n"
  "Yl6xL+jYtlgdINAOi/SDsEXtTQSMNb6xrGN0AfPgCRlKEBSEIluiRQc97H/AOmwp\\r\\n"
  "6HVeMQm/BVdQtp+i9MauwKJclB7ljReS0vlqMfk5FnlD3AT9eT61HUGcBVuyR37p\\r\\n"
  "vbHP2yRg+5uZnw5BqUOL1Y0asuK0vqlizllpRxikq9kMKsR8KaesRyHkVX/FAC9u\\r\\n"
  "uxxYke0T3f+dGlGzxm/ly6g5gQVbjdZGeoNma8qXjJ9o5BhZuAll7SajSLiXWERu\\r\\n"
  "n4PtYxVA4KsvJNDabHea1zF3pGyKzv7HAUc=\\r\\n"
  "-----END CERTIFICATE-----\\r\\n";

  // We must set root CA before connecting to host
  // Note that the lenght includes the terminating NULL,
  // so use sizeof() instead of strlen().
  client.setRootCA(rootCA, sizeof(rootCA));
  if (client.connect("maker.ifttt.com", 443)) {
      // Make a HTTP request over SSL (HTTPS)

      const String payload = String() + "{\\"value1\\":\\"" + p1
                        + "\\",\\"value2\\":\\"" + p2
                        + "\\",\\"value3\\":\\"" + p3
                        + "\\"}";

      const String url = String() + "https://maker.ifttt.com/trigger/" + event + "/with/key/" + key;

      client.println(String() + "POST " + url + " HTTP/1.1");
      client.println("Host: maker.ifttt.com");
      client.println("User-Agent: BlocklyDuino/1.0");
      client.println("Content-Type: application/json;charset=utf-8");
      client.print("Content-Length: ");
      client.println(payload.length());
      client.println("User-Agent: BlocklyDuino/1.0");
      client.println("Accept: */*");
      client.println("Connection: close");

      client.println();
      client.print(payload);

      client.println();
      delay(300);
  } else {
    // Serial.println("failed to connect to IFTTT");
  }

  // wait for server response
  // if there are incoming bytes available
  // from the server, read them and print them:
  while (client.available()) {
      char c = client.read();
      // Serial.print(c);
      delay(1);
  }

  // if the server's disconnected, stop the client:
  if (!client.connected()) {
      //Serial.println();
      //Serial.println("disconnecting from server passively.");
      client.stop();
  } else {
    // otherwise we actively stop the connection. we'll reconnect next time.
    //Serial.println("disconnecting from server.");
    client.stop();
  }
}  
`;

  var event_name = Blockly.Arduino.valueToCode(this, 'EVENT', Blockly.Arduino.ORDER_ATOMIC) || '"event"'
  var key = Blockly.Arduino.valueToCode(this, 'KEY', Blockly.Arduino.ORDER_ATOMIC) || '"---"'
  var v1 = Blockly.Arduino.valueToCode(this, 'VALUE1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var v2 = Blockly.Arduino.valueToCode(this, 'VALUE2', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var v3 = Blockly.Arduino.valueToCode(this, 'VALUE3', Blockly.Arduino.ORDER_ATOMIC) || '0'

  // ensure they convert to WString first
  v1 = `String(${v1})`
  v2 = `String(${v2})`
  v3 = `String(${v3})`
  
  var code = "invokeIFTTT(" + [key, event_name, v1, v2, v3].join(", ") + ");\n";

  return code;
};
