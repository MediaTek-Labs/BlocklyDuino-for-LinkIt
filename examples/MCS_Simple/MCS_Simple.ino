#include <LWiFi.h>
#include "MCS.h"

char _lwifi_ssid[] = "";
char _lwifi_pass[] = "";
MCSDevice mcs("", "");

MCSControllerOnOff led("led");
MCSDisplayOnOff remote("remote");

void setup()
{
  while (WiFi.begin(_lwifi_ssid, _lwifi_pass) != WL_CONNECTED) { delay(1000); }

  mcs.addChannel(led);

  mcs.addChannel(remote);


  while(!mcs.connected()) { mcs.connect(); }


  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
}


void loop()
{
  while (!mcs.connected()) {
    mcs.connect();
    if (mcs.connected()) { Serial.println("MCS 已重新連線"); }
    }
    mcs.process(1000);
    if (led.updated()) {
      if (led.value() != 0) {
        digitalWrite(LED_BUILTIN, HIGH);
        remote.set("1");

      } else {
        digitalWrite(LED_BUILTIN, LOW);
        remote.set("0");

      }

    }
}