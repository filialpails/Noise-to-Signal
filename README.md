Noise-to-Signal
===============

jQuery plugin to print random characters and gradually "decode" them into a desired string.

`$(selector).noiseToSignal(array[, alphabet[, speed]]);`  
Writes a random string from the given array and uses the optional alphabet string as the "encoded" characters.

`$(selector).noiseToSignal(string[, alphabet[, speed]]);`  
Writes the given string and uses the optional alphabet string as the "encoded" characters.

`$(selector).noiseToSignal(function[, alphabet[, speed]]);`  
Writes the string returned by calling _function_ and passing it the index number of the current element within the jQuery object.
