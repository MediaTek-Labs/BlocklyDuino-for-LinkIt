#!/bin/sh

IS_RELEASE=0
PAUSE_UPDATE=0

while [[ $# -gt 0 ]]
do
OPTION="$1"

case $OPTION in
    -r|--release)
    IS_RELEASE=1
    PAUSE_UPDATE=1
    ;;
    -p|--pause)
    PAUSE_UPDATE=1
    ;;
    *)

    ;;
esac
shift
done

MANIFEST="./offline-editor/manifest.json"
VERSION_KEY="version"
VERSION_NAME_KEY="version_name"
VERSION="$(cat "$MANIFEST" | jq ".$VERSION_KEY" | tr -d '"')"
NEW_VERSION_NAME="$VERSION"
VERSION_NAME="$(cat "$MANIFEST" | jq ".$VERSION_NAME_KEY" | tr -d '"')"

if [ "$IS_RELEASE" -gt 0 ]; then
  echo " > Release Version Update!"
  SUBVERSION=`echo $VERSION | awk -F "." '{print $2}'`
  NEW_SUBVERSION=$(($SUBVERSION + 1))
  NEW_VERSION=`echo $VERSION | awk -F "." '{print $1 "."'$NEW_SUBVERSION'"." 0 }'`
  jq '."'$VERSION_KEY'" = "'$NEW_VERSION'"' "$MANIFEST" > manifest.$$.json && mv manifest.$$.json "$MANIFEST"
  VERSION=$(cat "$MANIFEST" | jq ".$VERSION_KEY" | tr -d '"')
else
  NEW_VERSION_NAME+="b"
fi
jq '."'$VERSION_NAME_KEY'" = "'$NEW_VERSION_NAME'"' "$MANIFEST" > manifest.$$.json && mv manifest.$$.json "$MANIFEST"
VERSION_NAME=$(cat "$MANIFEST" | jq ".$VERSION_NAME_KEY" | tr -d '"')

if [ "$PAUSE_UPDATE" -eq 0 ]; then
  SUBVERSION=`echo $VERSION | awk -F "." '{print $3}'`
  NEW_SUBVERSION=$(($SUBVERSION + 1))
  NEW_VERSION=`echo $VERSION | awk -F "." '{print $1 "." $2 ".'$NEW_SUBVERSION'" }'`
  jq '."'$VERSION_KEY'" = "'$NEW_VERSION'"' "$MANIFEST" > manifest.$$.json && mv manifest.$$.json "$MANIFEST"
  VERSION=$(cat "$MANIFEST" | jq ".$VERSION_KEY" | tr -d '"')
else
  echo " > Incremental Version Update Disabled!"
fi

NEW_VERSION_NAME="$VERSION"
VERSION_NAME="$(cat "$MANIFEST" | jq ".$VERSION_NAME_KEY" | tr -d '"')"
if [[ $VERSION_NAME == *b ]]; then
    NEW_VERSION_NAME+="b"
    echo " > Beta Release!"
else
    echo " > Stable Release!"
fi
jq '."'$VERSION_NAME_KEY'" = "'$NEW_VERSION_NAME'"' "$MANIFEST" > manifest.$$.json && mv manifest.$$.json "$MANIFEST"
VERSION_NAME=$(cat "$MANIFEST" | jq ".$VERSION_NAME_KEY" | tr -d '"')


echo " > Building BlocklyDuino v$VERSION_NAME..."

cd blockly
cp msg/js/en.js msg/messages.js
python build.py
python joint.py
cp msg/messages.js msg/js/en.js
cd ..
cp ./blockly/apps/blocklyduino/category.xml ./offline-editor/category.xml
cp ./blockly/apps/blocklyduino/js/setCategoryCharacter.js ./offline-editor/js/setCategoryCharacter.js
cp ./blockly/*_compressed.js ./offline-editor/js/
cp ./blockly/msg/js/* ./offline-editor/msg/js/
cp ./blockly/media/* ./offline-editor/media/
cp ./blockly/apps/blocklyduino/css/* ./offline-editor/css/
python joint.py

echo ""
echo " > Done building BlocklyDuino v$VERSION_NAME! ($(/bin/date))"
