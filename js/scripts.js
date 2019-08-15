$(document).ready(function() {
	$("#entry").submit(function(event) {
		event.preventDefault();

		var voweless = [];
		var vowels = ["a", "e", "i", "o", "u"];
		var input = $("#letters").val();
		var splitInput = input.split('');

		splitInput.forEach(function(letter, i) {
		vowels.forEach(function(vowel) {
		if (letter === vowel) {
		   (splitInput[i] = "-")
		}
		});
	});
	alert(splitInput.join(''));
	});
});