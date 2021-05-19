/**
 * emoticons.js
 * Emoticon text codes to emoticons 🎱 ❤️ 🚀
 * @copyright Copyright (c) 2019 Loreto Parisi
*/

'use strict'

const EmoticonsJS = require('./lib/index');

// Get Emoji from Emoticon Text Code
console.log(
    EmoticonsJS.emoji[ "pool_8_ball" ],
    EmoticonsJS.emoji[ "heart_suit" ],
    EmoticonsJS.emoji[ "rocket" ]);

// Top Nearest emoji from Text
EmoticonsJS.nearest("button", 10).then(emoji => console.log("button", emoji) )
EmoticonsJS.nearest("woman", 5).then(emoji => console.log("woman", emoji) )

// Fuzzy search Emoji from Text
EmoticonsJS.match("cat", 10).then(emoji => console.log("cat", emoji) )
EmoticonsJS.match("point", 10).then(emoji => console.log("point", emoji) )

// Emoji length
console.log(EmoticonsJS.emoji[ "pool_8_ball" ], " length:", EmoticonsJS.length(EmoticonsJS.emoji[ "pool_8_ball" ]) );
console.log("Look at " + EmoticonsJS.emoji[ "point_down" ], " correct length:",  EmoticonsJS.length("Look at " + EmoticonsJS.emoji[ "point_down" ]), " wrong length:", ("Look at " + "👇").length );
