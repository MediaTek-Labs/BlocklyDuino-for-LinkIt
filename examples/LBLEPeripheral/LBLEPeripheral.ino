#include <LBLE.h>
#include <LBLEPeriphral.h>

LBLEService __periphralService("951A6899-6F0F-456F-8AE0-5E0B4352D85B");
LBLECharacteristicInt __b77d53ac_d590_41e0_b75a_6da442f543f6("B77D53AC-D590-41E0-B75A-6DA442F543F6", LBLE_WRITE);
void setup()
{
  LBLE.begin();
  while (!LBLE.ready()) { delay(1000); }

  __periphralService.addAttribute(__b77d53ac_d590_41e0_b75a_6da442f543f6);

  LBLEPeripheral.addService(__periphralService);
  LBLEPeripheral.begin();
  LBLEAdvertisementData __advertisement;
  __advertisement.configAsConnectableDevice("LinkIt 7697");
  LBLEPeripheral.advertise(__advertisement);

  pinMode(LED_BUILTIN, OUTPUT);
}


void loop()
{
  delay(1000);
    if (__periphralCharacteristic.isWritten()) {
      if (__periphralCharacteristic.getValue() == 0) {
        digitalWrite(LED_BUILTIN, LOW);

      } else {
        digitalWrite(LED_BUILTIN, HIGH);

      }

    }
}