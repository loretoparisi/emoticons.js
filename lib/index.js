/**
 * emoticons.js
 * Emoticon text codes to emoticons 🎱 ❤️ 🚀
 * @copyright Copyright (c) 2019 Loreto Parisi
*/

(function () {

	const emoticons = require('./emoticons'),
		fuzzyMatch = require('./fuzzy');

	const emojitext = Object.keys(emoticons);
	const match = function (pattern, top = 10) {
		return new Promise((resolve, reject) => {
			const fuzzyMatcher = new fuzzyMatch.fuzzyMatcher(
				fuzzyMatch.fuzzyMatchSimple, pattern, emojitext, function (results) {
					return resolve(results
						.slice(0, top)
						.map(emoji => emoticons[emoji]));
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
						.map(emoji => emoticons[emoji]));
				});
			fuzzyMatcher.start();
		});
	};
	module.exports = {
		nearest: nearest,
		match: match,
		emoji: emoticons
	}

}).call(this);
