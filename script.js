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

//ćwiczenie 8 rowiązanie kolejne
{
	people = [
		{name: "Melodia", age:15},
		{name: "Kosmo", age: 19},
	];
	
	const adults = (age) => {
		if(age > 17) {
			return true;
		} return false;
	};
	
	const someAdults = people.some(adults);
}

//ćwiczenie 9
{
	const array = ["", "kromka"];

	const onlyString = array.every(array => "");

	console.log(onlyString);
}

//ćwiczenie 10 
{
	const carBrands = ["Peugeot", "BMW", "Audi"];

	const premiumBrands = carBrands.includes( () => ("Mercedes", "BMW", "Audi"));

	const filterPremium = carBrands.filter(premiumBrands);

	filterPremium();
}

//ćwiczenie 11

{
	const cars = [
		{car: "BMW X5", color: "black"},
		{car: "Peugeot 3008", color: "white"},
	];

	const getColors = cars.map(({color}) => color);
	getColors();
}

//ćwiczenie 11 rozwiązanie nr.2

{
	const fourWheelers = [
		{car: "BMW X5", color: "black"},
		{car: "Peugeot 3008", color: "white"},
	];

	const getColors = fourWheelers.map(fourWheeler => fourWheeler.color);
}

//ćwiczenie 12

{
	const persons = [
		{name: "Krzychu", age: 30},
		{name: "Zdzichu", age: 20},
	];
	
	const people = ({name, age}) => `${name} ${age}`;
	
	const sortPeople = people.sort((age1, age2) => {
		return age1-age2;
	}); 

}