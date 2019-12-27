#!/bin/sh
echo "Building for win64..."
rm -rf ./win64-ide/BlocklyDuino3/package.nw
cp -r ../offline-editor ./win64-ide/BlocklyDuino3/package.nw
echo "Building for win32..."
rm -rf ./win32-ide/BlocklyDuino3/package.nw
cp -r ../offline-editor ./win32-ide/BlocklyDuino3/package.nw
open .
echo "DONE!"
