# emoticons.js
Emoticon text codes to emoticons 🎱 ❤️ 🚀

## Get Emoji from Text Emoticon
```javascript
const EmoticonsJS = require('emoticons.js');
var emoji = EmoticonsJS.emoji[ "8ball" ]
🎱
```

## Search Emoji from Text Emoticon
```javascript
const EmoticonsJS = require('emoticons.js');
EmoticonsJS.match("cat", 10).then(emoji => console.log(emoji) )
[ '⏹', '⏸', '🔘', '⏺', '🔲', '⏭', '🚅', '🔳', '⏯', '⏮' ]
```

## Top nearest neighbor emoji from Text Emoticon
```javascript
const EmoticonsJS = require('emoticons.js');
EmoticonsJS.match("cat", 10).then(emoji => console.log("cat", emoji) )
[ '🤠', '😰', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀' ]
```
