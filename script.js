//ćwiczenie 1
const array1 = [10, 45];
const array2 = [12, 30];

const mergeArrays = (array1, array2) => [
	...array1, 
	...array2,
];

console.log(mergeArrays);


//ćwiczenie 2 
const elements = [2, "delfin", null];

const exceptFirst = (number, ...restElements) =>
restElements; 

console.log(exceptFirst);

//ćwiczenie 3
const parameters = [1, 3, undefined, true];

const last2Parameters = (parameters) => [
	parameters.slice(2)
];

console.log(last2Parameters);

//ćwiczenie 4

const array = ["rum", "kawa", "sangría"];

const indexOf = (element, array) => 
array.indexOf(element);

console.log(indexOf("kawa", ["rum", "kawa", "sangría"]));

//ćwiczenie 5
const tasks = [
	{content: ""},
	{content: "kupić balony"},
];

const findEmptyTask = tasks.find(({content}) => content !== "");

findEmptyTask();

//ćwiczenie 6
const numbers = [2, 4, 7, 8];

const oddIndex = numbers.findIndex(number % 2 !== 0);


//ćwiczenie 7
const fruits = ["banan", "marakuja"];

const hasStrawberry = (fruits) => {
	fruits.includes("truskawka");
};

console.log(hasStrawberry);

//ćwiczenie 8 

people = [
	{name: "Melodia", age:15},
	{name: "Kosmo", age: 19},
];

const someAdults = people.some(({age}) => age > 17);

//ćwiczenie 9 
