/**
 * emoticons.js
 * Emoticon text codes to emoticons 🎱 ❤️ 🚀
 * @copyright Copyright (c) 2019-2021 Loreto Parisi (loretoparisi at gmail dot com)
*/

(function () {

	const unimoji = require('../dist/latest.json'),
		fuzzyMatch = require('./fuzzy');
	
	const emojitext = unimoji.map(emoji => emoji.textcode.replace(/_/g, ' '));
	var emoticons = {};
	unimoji.forEach(emoji => emoticons[emoji.textcode]=emoji.emoji);
	
	const match = function (pattern, top = 10) {
		return new Promise((resolve, reject) => {
			const fuzzyMatcher = new fuzzyMatch.fuzzyMatcher(
				fuzzyMatch.fuzzyMatchSimple, pattern, emojitext, function (results) {
					return resolve(results
						.slice(0, top)
						.map(textcode => emoticons[ textcode.replace(/\s+/g,'_') ]));
				});
			fuzzyMatcher.start();
		});
	};
	const nearest = function (pattern, top = 10) {
		return new Promise((resolve, reject) => {
			const fuzzyMatcher = new fuzzyMatch.fuzzyMatcher(
				fuzzyMatch.fuzzyMatch, pattern, emojitext, function (results) {
					return resolve(results
						.sort(function (a, b) { return b[1] - a[1]; })
						.map(function (v) { return v[2]; })
						.slice(0, top)
						.map(textcode => emoticons[ textcode.replace(/\s+/g,'_') ]));
				});
			fuzzyMatcher.start();
		});
	};

	/**
	 * Parse the Unicode.org 'emoji-test.txt' Emoji file
	 * @param {*} data 
	 * @return Promise
	 */
	const parse = function(data) {
		return new Promise((resolve, reject) => {
			try {
				const punycode = require('./punycode');
				var lines = data.split(/[\n|\r\n]+/); // text lines
				lines = lines.filter( line => { // filter out comments
					return !line.match(/^#/igm);
				});
				lines = lines.map(line => { // parse lines
					line = line.split(/;/g);
					line[0] = line[0].split(/\s+/g).filter(l => l); // "1F3F4","E0067",
					return line;
				});
				lines = lines.filter( line => { // filter out void
					return line.length && line[0].length;
				});
				lines = lines.map(line => { // json
					const codePoint = line[0].map(code => '0x'+code);//hex map to code point
					// " fully-qualified     # 💩 E0.6 pile of poo"
					var textcode = '';
					if( line[1].split(/E[0-9]{1,}\.[0-9]{1,}/) && line[1].split(/E[0-9]{1,}\.[0-9]{1,}/).length >=2 ) {
						textcode = line[1].split(/E[0-9]{1,}\.[0-9]{1,}/)[1].trim().replace(/\s+/g,'_');
					}
					return {
						codes: line[0],
						emoji: punycode.ucs2.encode(codePoint),
						description: line[1],
						textcode: textcode
					};
				});
				//var input = '1F600';
				//console.log(String.fromCodePoint(parseInt(input, 16)));

				return resolve(lines);
			} catch (ex) {
				return reject(ex);
			}
		});
	}//parse

	/**
	 * Grab emoji list from Unicode.org
	 * @param {*} version 1.0 | 2.0 | 3.0 | 4.0 | 5.0 | 12.0 | 11.0
	 */
	const download = function (params) {
		var options = {
			version : '13.1'
		};
		for(var attr in params) options[attr]=params[attr];
		const OPT = {
			headers: { 'Content-Type': 'text/plain' },
			hostname: 'unicode.org',
			path: '/Public/emoji/' + options.version + '/emoji-test.txt',
			timeout: this.timeout, // >= node.js 6.8.0
			method: 'GET'
		};
		return new Promise((resolve, reject) => {
			var request = require('https').get(OPT, function (response) {

				// Continuously update stream with data
				var body = '';
				response.on('data', function (d) {
					body += d;
				});
				response.on('end', function () {
					try {
						parse(body)
						.then(res => resolve(res))
						.catch(err => reject(err));
					} catch (ex) {
						return reject(ex);
					}
				});
			});
			request.on('error', function (err) {
				// LP: return when aborted already by timeout | only when using socket
				//if (request.aborted) return;
				// LP: use this when using request only
				if (request.connection.destroyed) return;
				// General error, i.e.
				//  - ECONNRESET - server closed the socket unexpectedly
				//  - ECONNREFUSED - server did not listen
				//  - HPE_INVALID_VERSION
				//  - HPE_INVALID_STATUS
				//  - ... (other HPE_* codes) - server returned garbage
				return reject(err);
			});
			request.on('timeout', function () {
				// Timeout happend. Server received request, but not handled it
				// (i.e. doesn't send any response or it took to long).
				// You don't know what happend.
				// It will emit 'error' message as well (with ECONNRESET code).
				request.destroy();
				return reject(new Error('request timeout'));
			});
			request.end();
		});
	}//download
	const length = function(emoji) {
		return emoji.match(/./gu).length;
	}//length
	module.exports = {
		nearest: nearest,
		match: match,
		emoji: emoticons,
		download: download,
		parse: parse,
		length: length
	}

}).call(this);
