// ISTRUCTIONS

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// SOLUTIONS

function simpleMultiplication(number) {
	// your code........
	if (number % 2 === 0) {
		return (number *= 8)
	} else {
		return (number *= 9)
	}
}

function simpleMultiplication(number) {
	// your code........
	return number % 2 === 0 ? (number *= 8) : (number *= 9)
}
