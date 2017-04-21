void setup()
{

}


void loop()
{
  analogWrite(11, (map(analogRead(A0),0,4095,0,255)));
}