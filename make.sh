#!/bin/sh
echo "Building BlocklyDuino..."
cd blockly
python build.py
python joint.py
cp msg/messages.js msg/js/en.js
echo "Building offline-editor..."
cp ./blockly/arduino_compressed.js ./offline-editor/js/
cp ./blockly/blockly_compressed.js ./offline-editor/js/
cp ./blockly/blocks_compressed.js ./offline-editor/js/
cp ./blockly/apps/blocklyduino/category.xml ./offline-editor/
cp ./blockly/apps/blocklyduino/js/setCategoryCharacter.js ./offline-editor/js/
cp ./blockly/msg/js/* ./offline-editor/msg/js/
cp ./blockly/media/* ./offline-editor/media/
cp ./blockly/apps/blocklyduino/css/* ./offline-editor/css/
python joint.py
echo "DONE!"
