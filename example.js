/**
 * emoticons.js
 * Emoticon text codes to emoticons 🎱 ❤️ 🚀
 * @copyright Copyright (c) 2019 Loreto Parisi
*/

'use strict'

const EmoticonsJS = require('./lib/index');

// Get Emoji from Emoticon Text Code
console.log(
    EmoticonsJS.emoji[ "8ball" ],
    EmoticonsJS.emoji[ "heart" ],
    EmoticonsJS.emoji[ "rocket" ]);

// Top Nearest emoji from Text
EmoticonsJS.nearest("button", 10).then(emoji => console.log("button", emoji) )
EmoticonsJS.nearest("woman", 5).then(emoji => console.log("woman", emoji) )

// Fuzzy search Emoji from Text
EmoticonsJS.match("cat", 10).then(emoji => console.log("cat", emoji) )
EmoticonsJS.match("point", 10).then(emoji => console.log("point", emoji) )

// Emoji length
console.log(EmoticonsJS.emoji[ "8ball" ], " length:", EmoticonsJS.length(EmoticonsJS.emoji[ "8ball" ]) );
console.log("Look at " + EmoticonsJS.emoji[ "point_down" ], " correct length:",  EmoticonsJS.length("Look at " + EmoticonsJS.emoji[ "point_down" ]), " wrong length:", ("Look at " + "👇").length );
