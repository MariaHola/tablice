//ćwiczenie 1
const array1 = [10, 45];
const array2 = [12, 30];

const mergeArrays = (array1, array2) => [
	...array1, 
	...array2,
];

console.log(mergeArrays);


//ćwiczenie 2 - do poprawy
const elements = [2, "delfin", "akupresura", null];

const exceptFirst = elements.slice(-3);

console.log(exceptFirst);

//ćwiczenie 3
const parameters = [1, 3, undefined, true];

const last2Parameters = parameters.slice(2);

console.log(last2Parameters);


