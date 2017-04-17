#include <LBLE.h>
#include <LBLEPeriphral.h>

LBLEService __periphralService("951A6899-6F0F-456F-8AE0-5E0B4352D85B");
LBLECharacteristicInt __periphralCharacteristic("B77D53AC-D590-41E0-B75A-6DA442F543F6", LBLE_READ | LBLE_WRITE);
void setup()
{
  LBLE.begin();
  while (!LBLE.ready()) { delay(1000); }

  __periphralService.addAttribute(__periphralCharacteristic);
  LBLEPeripheral.addService(__periphralService);
  LBLEPeripheral.begin();
  LBLEAdvertisementData __advertisement;
  __advertisement.configAsConnectableDevice("LinkIt 7697");
  LBLEPeripheral.advertise(__advertisement);

  pinMode(LED_BUILTIN, OUTPUT);
}


void loop()
{
  delay(100);
  if (__periphralCharacteristic.isWritten()) {
    if ((int) __periphralCharacteristic.getValue() > 0) {
      digitalWrite(LED_BUILTIN, HIGH);

    } else {
      digitalWrite(LED_BUILTIN, LOW);

    }

  }

}