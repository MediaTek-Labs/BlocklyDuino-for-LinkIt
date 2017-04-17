#include <LBLE.h>

void setup()
{
  LBLE.begin();
while (!LBLE.ready()) { delay(1000); }

  Serial.begin(9600);

  Serial.println("BLE Ready!");
}


void loop()
{

}