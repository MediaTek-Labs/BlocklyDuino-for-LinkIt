#!/bin/sh
printf " > Clean up..."

CURRENT_PATH=$(pwd)

rm ../src/blockly/msg/js/* 2>/dev/null
printf "."
rm ../src/blockly/apps/blocklyduino/category.xml 2>/dev/null
printf "."
rm ../src/blockly/apps/blocklyduino/js/setCategoryCharacter.js 2>/dev/null
printf "."
rm ../src/blockly/blocks/* 2>/dev/null
printf "."
rm ../src/blockly/generators/arduino/* 2>/dev/null
printf "."
rm ../src/blockly/media/* 2>/dev/null
echo "."

printf " > Merging..."
mkdir -p ../src/blockly/msg/js/
cp languages/* ../src/blockly/msg/js/
printf "."
cp menu/category.xml ../src/blockly/apps/blocklyduino/category.xml
printf "."
cp menu/setCategoryCharacter.js ../src/blockly/apps/blocklyduino/js/setCategoryCharacter.js
printf "."
mkdir -p ../src/blockly/blocks/
cp blocks/* ../src/blockly/blocks/
printf "."
mkdir -p ../src/blockly/generators/arduino/
cp generators/* ../src/blockly/generators/arduino/
printf "."
mkdir -p ../src/blockly/media/
cp media/* ../src/blockly/media/
echo "."

cd ../src
sh make.sh $@

cd "$CURRENT_PATH"
echo "\n"
