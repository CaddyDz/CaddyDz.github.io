// REST operator
function sum(...numbers) {
	return numbers.reduce(
		(prev, current) => prev + current
	);
}

console.log(sum(1, 2, 3));

// Spread operator 
function sum(x,y) { // 1, 2
	return x + y;
}

let nums = [1, 2];

console.log(...nums);
