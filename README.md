# emoticons.js
Emoticon text codes to emoticons 🎱 ❤️ 🚀. It downloads official Emoji list from Unicode.org

## What's new

- Now it uses latest Unicode.org emojis :new:
- Support for Emoji Modifier Sequences :new:
- Added correct length calculation of a text containing Emoji

## Install from npm
```sh
npm install textemoticons.js
```

## Get Emoji from Emoticon Text Code
```javascript
const EmoticonsJS = require('textemoticons.js');
var emoji = EmoticonsJS.emoji[ "pool_8_ball" ]
🎱
```

## Top Nearest emoji from Text
```javascript
const EmoticonsJS = require('textemoticons.js');
EmoticonsJS.nearest("button", 10).then(emoji => console.log(emoji) )
[ '⏹', '⏸', '🔘', '⏺', '🔲', '⏭', '🚅', '🔳', '⏯', '⏮' ]
```

## Fuzzy search Emoji from Text
```javascript
const EmoticonsJS = require('textemoticons.js');
EmoticonsJS.match("cat", 10).then(emoji => console.log(emoji) )
[ '🤠', '😰', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀' ]
```

## Count length of text containing Emoji :new:
```javascript
const EmoticonsJS = require('textemoticons.js');
EmoticonsJS.length("Look at " + EmoticonsJS.emoji[ "point_down" ])
9
```

## Download Emoji text file from Unicode.org :new:
```javascript
// Grab the latest version of Emoji from Unicode.org
EmoticonsJS.download({ version: '13.1' }).
then(emoji => {
    console.log(JSON.stringify( emoji, null, 2) );
})
.catch(error => {
    console.error(error);
})
```

## Unicode.org Emoji text file
Array of emoji with Unicode point, emoji and description
```json
{
    "codes": [
      "1F912"
    ],
    "emoji": "🤒",
    "description": " fully-qualified     # 🤒 E1.0 face with thermometer",
    "textcode": "face_with_thermometer"
}
```

It supports multiple codes as well:
```json
{
    "codes": [
      "1F449",
      "1F3FB"
    ],
    "emoji": "👉🏻",
    "description": " fully-qualified     # 👉🏻 E1.0 backhand index pointing right: light skin tone",
    "textcode": "backhand_index_pointing_right:_light_skin_tone"
}
```
