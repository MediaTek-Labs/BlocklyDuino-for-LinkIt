# BlocklyDuino with Portable Arduino IDE

## How to use

The offline editor are a set of prebuilt binaries. The release process is:

1. Prepare the offline editor binaries.
2. Replace BlocklyDuino (JavaScript/HTML) into the offline editor binaries.
3. Zip the finalized packages.

### Prepare Prebuilt Binaries

1. Unpack `asset/win32-ide.tgz` and `asset/win64-ide.tgz` to `_build` folder.
2. Download portable package of Arduino IDE arduino 1.8.5 to `_build/win32-ide/BlocklyDuino3` and `_build/win64-ide/BlocklyDuino3` directory respectively. The resulting directory should be like this:
    ```
    _build/win32-ide/BlocklyDuino3/arduino-1.8.5
    ```
3. If there are new board support packages or Arduino Libraries, install to the portable version
of Arduino IDE 1.8.5

### release ZIP packages:

Simply execute 
```
bash release.sh
```

This command packs the BlockyDuino code into the offline editor and create zip bundles.

