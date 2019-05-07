# emoticons.js
Emoticon text codes to emoticons 🎱 ❤️ 🚀. It can download official Emoji list from Unicode.org

## Install from npm
```sh
npm install textemoticons.js
```

## Get Emoji from Emoticon Text Code
```javascript
const EmoticonsJS = require('textemoticons.js');
var emoji = EmoticonsJS.emoji[ "8ball" ]
🎱
```

## Top Nearest emoji from Text
```javascript
const EmoticonsJS = require('textemoticons.js');
EmoticonsJS.nearest("button", 10).then(emoji => console.log(emoji) )
[ '⏹', '⏸', '🔘', '⏺', '🔲', '⏭', '🚅', '🔳', '⏯', '⏮' ]
```

## Search Emoji from Text
```javascript
const EmoticonsJS = require('textemoticons.js');
EmoticonsJS.match("cat", 10).then(emoji => console.log(emoji) )
[ '🤠', '😰', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀' ]
```

## Download Emoji Test file from Unicode.org :new:
```javascript
// Grab the latest version of Emoji from Unicode.org
EmoticonsJS.download({ version: '12.0' }).
then(emoji => {
    console.log(JSON.stringify( emoji, null, 2) );
})
.catch(error => {
    console.error(error);
})
```

## Unicode.org Emoji Test file
Array of emoji with Unicode point, emoji and description
```json
{
"codes": [
    "1F600"
],
"emoji": "😀",
"description": " fully-qualified     # 😀 grinning face"
}
```

It supports multiple codes as well:
```json
{
"codes": [
    "1F449"
],
"emoji": "👉",
"description": " fully-qualified     # 👉 backhand index pointing right"
},
{
"codes": [
    "1F449",
    "1F3FB"
],
"emoji": "👉🏻",
"description": " fully-qualified     # 👉🏻 backhand index pointing right: light skin tone"
}
```
