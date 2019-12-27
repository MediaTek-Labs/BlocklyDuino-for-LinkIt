#!/bin/sh
MANIFEST="../offline-editor/manifest.json"
VERSION_KEY="version_name"
VERSION="$(cat "$MANIFEST" | jq ".$VERSION_KEY" | tr -d '"')"
echo "Prepare Release: BlocklyDuino Editor v$VERSION"
rm ./*.zip &>/dev/null
rm ./*.gz &>/dev/null
echo "Building for win64..."
rm -rf ./win64-ide/BlocklyDuino3/package.nw
rm -rf ./win64-ide/BlocklyDuino3/build
rm -rf ./win64-ide/BlocklyDuino3/sketches/tmp
cp -r ../offline-editor ./win64-ide/BlocklyDuino3/package.nw
cd ./win64-ide/
zip -q -r ../blocklyduino-$VERSION-win64-ide.zip ./BlocklyDuino3
cd ../
echo "Building for win32..."
rm -rf ./win32-ide/BlocklyDuino3/package.nw
rm -rf ./win32-ide/BlocklyDuino3/build
rm -rf ./win32-ide/BlocklyDuino3/sketches/tmp
cp -r ../offline-editor ./win32-ide/BlocklyDuino3/package.nw
cd ./win32-ide
zip -q -r ../blocklyduino-$VERSION-win32-ide.zip ./BlocklyDuino3
cd ../
# open .
echo "DONE!"
