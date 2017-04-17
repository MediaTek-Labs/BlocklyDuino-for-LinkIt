#include <LBLE.h>

void setup()
{
  LBLE.begin();
  Serial.begin(9600);

}


void loop()
{
  while (LBLE.ready() == false) {
    delay(1000);
  }
  Serial.println("BLE Ready!");

}