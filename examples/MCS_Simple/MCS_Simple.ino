#include <LWiFi.h>
#include <WiFiClient.h>
#include "MCS.h"

MCSDevice mcs("", "");

#define LED_PIN 7

char _lwifi_ssid[] = "";
char _lwifi_pass[] = "";

MCSControllerOnOff led("led");
void setup()
{
  while (WiFi.begin(_lwifi_ssid, _lwifi_pass) != WL_CONNECTED) { delay(1000); }

  while(!mcs.connected()) { mcs.connect(); }

  mcs.addChannel(led);

  while(!led.valid()) { led.value(); }


  Serial.begin(9600);

  pinMode(LED_BUILTIN, OUTPUT);
}


void loop()
{
  while (!mcs.connected()) {
      mcs.connect();
      if (mcs.connected()) {
        Serial.println("MCS 已重新連線");

      }
    }
    mcs.process(1000);
    if (led.updated()) {
      if (led.value() != 0) {
        digitalWrite(LED_BUILTIN, HIGH);

      } else {
        digitalWrite(LED_BUILTIN, LOW);

      }

    }
}