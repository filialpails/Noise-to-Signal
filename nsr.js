(function($) {
	"use strict";
	$.fn.noiseToSignal = function(words, alpha, speed) {
		var a = alpha || "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
		return this.each(function(index) {
			var word = null;
			switch (typeof words) {
			case "string":
				word = words;
				break;
			case "array":
				word = words[Math.floor(Math.random() * words.length)];
				break;
			case "function":
				word = words(index);
				break;
			default:
				word = this.textContent;
			}
			var i = 0,
			wordlength = word.length,
			speed = speed || 200,
			that = this,
			id = setInterval(function() {
				if (i >= wordlength) {
					clearInterval(id);
					return;
				}
				var text = "";
				for (var j = 0; j <= i; ++j) {
					text += word[j];
				}
				for (var k = j; k < wordlength; ++k) {
					text += a[Math.floor(Math.random() * a.length)];
				}
				that.textContent = text;
				++i;
			}, speed);
		});
	};
})(jQuery);
