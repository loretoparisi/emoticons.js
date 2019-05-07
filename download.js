/**
 * emoticons.js
 * Emoticon text codes to emoticons 🎱 ❤️ 🚀
 * @copyright Copyright (c) 2019 Loreto Parisi
*/

'use strict'

const EmoticonsJS = require('./lib/index');

EmoticonsJS.download({ version: '12.0' }).
    then(emoji => {
        console.log(JSON.stringify( emoji[0], null, 2) )
        console.log(JSON.stringify( emoji, null, 2) );
        console.log(JSON.stringify( emoji[emoji.length-1], null, 2) )
        require('fs').writeFileSync('./unicode-emoji-12.0.json', JSON.stringify( emoji, null, 2));
    })
    .catch(error => {
        console.error(error);
    })