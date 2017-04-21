#include <LBLE.h>
#include <LBLECentral.h>

int count;

void setup()
{
  LBLE.begin();
  while (!LBLE.ready()) { delay(1000); }

  LBLECentral.scan();
  Serial.begin(9600);

}


void loop()
{
  while (count < LBLECentral.getPeripheralCount()) {
    Serial.println(__scanner.getName(count));
    count = count + 1;
  }

}