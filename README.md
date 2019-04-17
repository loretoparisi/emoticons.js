# emoticons.js
Emoticon text codes to emoticons 🎱 ❤️ 🚀

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
