#!/bin/sh
echo "Building BlocklyDuino..."
cd blockly
cp msg/js/en.js msg/messages.js
python build.py
python joint.py
cp msg/messages.js msg/js/en.js
cd ..
echo "Building offline-editor..."
cp ./blockly/apps/blocklyduino/category.xml ./offline-editor/category.xml
cp ./blockly/apps/blocklyduino/js/setCategoryCharacter.js ./offline-editor/js/setCategoryCharacter.js
cp ./blockly/*_compressed.js ./offline-editor/js/
cp ./blockly/msg/js/* ./offline-editor/msg/js/
cp ./blockly/media/* ./offline-editor/media/
cp ./blockly/apps/blocklyduino/css/* ./offline-editor/css/
python joint.py
echo "DONE!"
