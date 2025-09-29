
console.log(" === for...of Loop === ");
for (let val of [10, 20, 30]) {
  console.log(val); // 10, 20, 30
}

console.log(" === forEach === ")
// Loop through an array and execute a function for each element.
const arr3 = [1, 2, 3];
console.log("arr3: ", arr3);
arr3.forEach((item, index) => {
  console.log("index: ",index, "item: ", item);
});

console.log(" === map === ")
// Create a new array by transforming each element of an existing array.
const numbers1 = [1, 2, 3];
console.log("number1: ",numbers1);
const doubled = numbers1.map(n => n * 2);
console.log("map() doubled: ", doubled); // [2, 4, 6]

console.log(" === filter === ")
// Create a new array with only the elements that satisfy a condition.
// Returns a new array of sub-arrays without mutating the original.
const evens = numbers1.filter(n => n % 2 === 0);
console.log("filter() evens: ", evens); // [2]

console.log(" === indexOf === ")
const fruits = ["apple", "banana", "mango"];
console.log("fruits: ",fruits);
// Find the first index of a value in an array (or -1 if not found).
console.log("indexOf(banana)", fruits.indexOf("banana")); // 1
console.log("indexOf(grape)", fruits.indexOf("grape"));  // -1

console.log(" === every === ")
// Test whether all elements of an array satisfy a condition. Returns true or false.
const numbers2 = [2, 4, 6];
console.log("number2: ",numbers2);
const allEven = numbers2.every(n => n % 2 === 0);
console.log("numbers2.every() allEven?: ", allEven); // true
console.log("numbers1.every() allEven?: ", numbers1.every(n => n % 2 === 0)); 

function filteredArray(arr, elem) {
  return arr.map(subArr => subArr.filter(item => item !== elem));
}
console.log("filteredArray() ", filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

function filteredArray1(arr, elem) {
  // Keep only sub-arrays that do NOT include 'elem'
  return arr.filter(subArr => !subArr.includes(elem));
}
console.log("filteredArray1() ", filteredArray1([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18))

// Create an Array
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits1: ", fruits1);

console.log(" === splice() method === ");
// array.splice(index, count, item1, ....., itemX)
// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// At position 2, remove 2 items
fruits1.splice(2, 2);
console.log(fruits1); // ["Banana", "Orange"]

console.log(" === slice() method === ");
// array.slice(start, end)
// slice() method returns a shallow copy of a portion of an array into a new array object.
const citrus = fruits1.slice(1, 3);
console.log(citrus); // ["Orange"]

console.log(" === shift() method === ");
// shift() method removes the first item of an array.
fruits1.shift();
console.log(fruits1); // ["Orange"]

console.log(" === unshift() method === ");
// unshift() method adds one or more items to the beginning of an array.
fruits1.unshift("Lemon", "Pineapple");
console.log(fruits1); // ["Lemon", "Pineapple", "Orange"]

console.log(" === pop() method === ");
// pop() method removes the last item of an array.
fruits1.pop();
console.log(fruits1); // ["Lemon", "Pineapple"]

console.log(" === push() method === ");
// push() method adds one or more items to the end of an array.
fruits1.push("Kiwi");
console.log(fruits1); // ["Lemon", "Pineapple", "Kiwi"]

console.log(" === with() method === ");
// The with() method returns a new array with some or all elements replaced by the given value. 
// with(index, value)
const months = ["Januar", "Februar", "Mar", "April"];
// Replace element at index 2 ("Mar") with "March"
const myMonths = months.with(2, "March");
console.log("myMonths: ", myMonths); // ["Januar", "Februar", "March", "April"]
console.log("months: ", months);   // ["Januar", "Februar", "Mar", "April"]

console.log(" === findIndex === ");
// arr.findIndex(callback(element, index, array))
// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function.
const numbers = [10, 20, 30, 40];

// Find the first number greater than 25
const index = numbers.findIndex(num => num > 25);
console.log(numbers, "findIndex num > 25 ", index); // 2  → numbers[2] is 30

// If no element matches
const notFound = numbers.findIndex(num => num > 50);
console.log(numbers, "findIndex num > 50", notFound); // -1

console.log(" === Array.from() === ");  
// Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
// Array.from(arrayLike[, mapFn[, thisArg]])
// arrayLike: An array-like or iterable object to convert to an array.
// mapFn (Optional): A map function to call on every element of the array.
// thisArg (Optional): Value to use as this when executing mapFn.

console.log(Array.from("foo")); // ['f', 'o', 'o']
console.log(Array.from([1, 2, 3], x => x + x)); // [2, 4, 6]
console.log(Array.from({ length: 5 }, (v, i) => i)); // [0, 1, 2, 3, 4]
// { length: 5 } creates an array-like object with a length property of 5. [,,,,] is an array with 5 empty slots.
// (v, i) => i is a mapping function that returns the index of each element.