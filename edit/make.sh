#!/bin/sh
echo " > Clean up..."

CURRENT_PATH=$(pwd)

rm ../src/blockly/msg/js/* 2>/dev/null
rm ../src/blockly/apps/blocklyduino/category.xml 2>/dev/null
rm ../src/blockly/apps/blocklyduino/js/setCategoryCharacter.js 2>/dev/null
rm ../src/blockly/blocks/* 2>/dev/null
rm ../src/blockly/generators/arduino/* 2>/dev/null
rm ../src/blockly/media/* 2>/dev/null

echo " > Merging..."

cp ./languages/* ../src/blockly/msg/js/
cp ./menu/category.xml ../src/blockly/apps/blocklyduino/category.xml
cp ./menu/setCategoryCharacter.js ../src/blockly/apps/blocklyduino/js/setCategoryCharacter.js
rm ./blocks/* ../src/blockly/blocks/* 2>/dev/null
rm ./generators/* ../src/blockly/generators/arduino/* 2>/dev/null
cp ./media/* ../src/blockly/media/

cd ../src
sh ./make.sh $@

cd "$CURRENT_PATH"
