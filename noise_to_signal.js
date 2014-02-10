(function($) {
	"use strict";
	$.fn.noiseToSignal = function(words, options) {
		var settings = {
		  alpha: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
		  speed: 200
		}
		$.extend(settings, options);
		var alpha = settings.alpha, speed = settings.speed, alphaLength = alpha.length, wordsLength = words.length;
		return this.each(function(index) {
			var word;
			if (typeof words === "string") {
				word = words;
			}
			else if (words instanceof Array) {
				word = words[Math.floor(Math.random() * wordsLength)];
			}
			else if (words instanceof Function) {
				word = words(index);
			}
			else {
				word = this.textContent;
			}
			var i = 0, wordlength = word.length, that = this, id = setInterval(function() {
				if (i >= wordlength) {
					clearInterval(id);
					return;
				}
				var text = "";
				for (var j = 0; j <= i; ++j) {
					text += word[j];
				}
				for (var k = j; k < wordlength; ++k) {
					text += alpha[Math.floor(Math.random() * alphaLength)];
				}
				that.textContent = text;
				++i;
			}, speed);
		});
	};
})(jQuery);
