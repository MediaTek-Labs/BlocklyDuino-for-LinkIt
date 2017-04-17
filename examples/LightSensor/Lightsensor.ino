int Sensorvalue;

void setup()
{
  pinMode(7, OUTPUT);
}


void loop()
{
  Sensorvalue = (map(analogRead(A2),0,4095,0,180));
  if (Sensorvalue > 130) {
    digitalWrite(7, LOW);

  }
  if (Sensorvalue <= 130) {
    digitalWrite(7, HIGH);

  }

}