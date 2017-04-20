void setup()
{
  pinMode(13, INPUT);
  pinMode(LED_BUILTIN, OUTPUT);
}


void loop()
{
  if (digitalRead(13) == true) {
      digitalWrite(LED_BUILTIN, HIGH);

    } else {
      digitalWrite(LED_BUILTIN, LOW);

    }
  if (false) {

  } else {

  }

}