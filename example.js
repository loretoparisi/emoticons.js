/**
 * emoticons.js
 * Emoticon text codes to emoticons 🎱 ❤️ 🚀
 * @copyright Copyright (c) 2019 Loreto Parisi
*/

'use strict'

const EmoticonsJS = require('./lib/index');

console.log(
    EmoticonsJS.emoji[ "8ball" ],
    EmoticonsJS.emoji[ "heart" ],
    EmoticonsJS.emoji[ "rocket" ]);

EmoticonsJS.nearest("button", 10).then(emoji => console.log("button", emoji) )
EmoticonsJS.nearest("woman", 5).then(emoji => console.log("woman", emoji) )
EmoticonsJS.match("cat", 10).then(emoji => console.log("cat", emoji) )