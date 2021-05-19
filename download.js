/**
 * emoticons.js
 * Emoticon text codes to emoticons 🎱 ❤️ 🚀
 * @copyright Copyright (c) 2019 Loreto Parisi
*/

'use strict'

const EmoticonsJS = require('./lib/index');

const version = '13.1';
EmoticonsJS.download({ version: version}).
    then(emoji => {
        console.log(JSON.stringify( emoji[0], null, 2) )
        console.log(JSON.stringify( emoji, null, 2) );
        console.log(JSON.stringify( emoji[emoji.length-1], null, 2) )
        require('fs').writeFileSync(`./dist/unicode-emoji-${version}.json`, JSON.stringify( emoji, null, 2));
        require('fs').writeFileSync('./dist/latest.json', JSON.stringify( emoji, null, 2));
    })
    .catch(error => {
        console.error(error);
    })