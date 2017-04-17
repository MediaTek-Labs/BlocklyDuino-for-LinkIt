#include <LWiFi.h>

char _lwifi_ssid[] = "mtklab";
char _lwifi_pass[] = "84149961";
void setup()
{
  WiFi.begin(_lwifi_ssid, _lwifi_pass);
  Serial.begin(9600);

}


void loop()
{

  while (!(WiFi.begin(_lwifi_ssid, _lwifi_pass) == WL_CONNECTED)) {
    delay(1000);
  }
  Serial.println("Connected!");

}