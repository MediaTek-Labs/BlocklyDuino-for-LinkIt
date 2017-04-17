#include <Servo.h>

int Servo_Angle;

Servo myservo7;
void setup()
{
  Servo_Angle = 0;
  myservo7.attach(7);
}


void loop()
{
  myservo7.write(Servo_Angle);
  delay(1000);
  Servo_Angle = Servo_Angle + 15;
  if (Servo_Angle > 165) {
    Servo_Angle = 0;

  }

}