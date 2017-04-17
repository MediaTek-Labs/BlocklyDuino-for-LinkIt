#!/bin/sh
cp ../blockly/arduino_compressed.js ./js/
cp ../blockly/blockly_compressed.js ./js/
cp ../blockly/blocks_compressed.js ./js/
cp ../blockly/apps/blocklyduino/category.xml ./
cp ../blockly/apps/blocklyduino/js/setCategoryCharacter.js ./js/
cp ../blockly/msg/js/* ./msg/js/
cp ../blockly/media/* ./media/
cp ../blockly/apps/blocklyduino/css/* ./css/
python joint.py
