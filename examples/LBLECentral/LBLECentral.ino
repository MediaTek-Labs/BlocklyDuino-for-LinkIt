#include <LBLE.h>
#include <LBLECentral.h>

int count;

LBLECentral __scanner;
void setup()
{
  LBLE.begin();
  while (!LBLE.ready()) { delay(1000); }

  __scanner.scan();
  Serial.begin(9600);

}


void loop()
{
  while (count < __scanner.getPeripheralCount()) {
    Serial.println(__scanner.getName(count));
    count = count + 1;
  }

}