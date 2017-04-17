#!/bin/sh
echo "Building BlocklyDuino..."
cd blockly
python build.py
python joint.py
cp msg/messages.js msg/js/en.js
echo "Building offline-editor..."
cd ../offline-editor
sh copy.sh
echo "DONE!"
