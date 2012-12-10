Noise-to-Signal
===============

jQuery plugin to print random characters and gradually "decode" them into a desired string.

$(_element_).noiseToSignal(_array-of-strings_[, _alphabet_[, _speed_]]);
Writes a random string from the given array and uses the optional alphabet string as the "encoded" characters.

$(_element_).noiseToSignal(_string_[, _alphabet_[, _speed_]]);
Writes the given string and uses the optional alphabet string as the "encoded" characters.

$(_element_).noiseToSignal(_function_[, _alphabet_[, _speed_]]);
Writes the string returned by calling _function_ and passing it the index number of _element_ within the jQuery object.
