let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
// 	Example: "North Dakota" -> "north-dakota"
function urlify(string) {
	return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative Version
function imperativeUrls(elements) {
	let urls = [];
	elements.forEach(function(element) {
		urls.push(urlify(element));
	});
	return urls;
}
console.log(imperativeUrls(states));

// urls: Functional Version
function functionalUrls(elements) {
	return elements.map(element => urlify(element));
}
console.log(functionalUrls(states))

// Section 6.1, Exercise 1
function fullUrls(elements) {
	return elements.map(element => ("https://example.com/" + urlify(element)))
}
console.log(fullUrls(states))

// singles: Imperative version
function imperativeSingles(elements) {
	let singles = [];
	elements.forEach(function(element) {
		if (element.split(/\s+/).length === 1) {
			singles.push(element);
		}
	});
	return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
	return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// Section 6.2, Exercise 1 part 1
function stringDakota(elements) {
	return elements.filter(element => element.includes("Dakota"));
}
console.log(stringDakota(states));

// Section 6.2 Excercise 1 part 2
function regexDakota(elements) {
	return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(regexDakota(states));