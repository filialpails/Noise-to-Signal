(function($) {
	"use strict";
	$.fn.noiseToSignal = function(words, alpha) {
		var a = alpha || "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
		return this.each(function() {
			var word = typeof words === "string" ? words : words[Math.floor(Math.random() * words.length)],
			       i = 0,
			   $this = $(this),
			      id = setInterval(function(){
				if (i >= word.length) {
					clearInterval(id);
					return;
				}
				$this.html("");
				for (var j = 0; j <= i; ++j) {
					$this.html($this.html() + word[j]);
				}
				for (var k = 0; k < word.length - i - 1; ++k) {
					$this.html($this.html() + a[Math.floor(Math.random() * a.length)]);
				}
				++i;
			}, 200);
		});
	};
})(jQuery);
