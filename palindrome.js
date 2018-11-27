// Reverses a string
function reverse(string) {
	return string.split("").reverse().join("");
}

function palindrome(string) {
	return string === reverse(string);
}