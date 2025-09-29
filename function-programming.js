
console.log(" === Functional Programming === ");
// Functional Programming
// In Functional Programming, code is organized into smaller, basic functions that can be combined to build complex programs.
// the core concepts of Functional Programming including 
// pure functions, how to avoid mutations, and how to write cleaner code with methods like .map() and .filter()

// Functional programming is a style of programming where solutions are simple, isolated functions, 
// without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT

// Functional programming is about:
// 1) Isolated functions 
//    - there is no dependence on the state of the program, which includes global variables that are subject to change
// 2) Pure functions 
//    - the same input always gives the same output
// 3) Functions with limited side effects 
//    - any changes, or mutations, to the state of the program outside the function are carefully controlled

// Lambda Function (a.k.a Arrow Function / Anonymous Function)
// A lambda function is just a short, anonymous function, often written with => (arrow syntax).
// Lambda functions: All the arrow functions (() => ...)

// A first-order function is any regular function that:
//  - Does not take another function as an argument, and
//  - Does not return another function.
// prepareGreenTea() and prepareBlackTea() are first-order functions.
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

// A higher-order function is a function that takes another function as an argument or returns a function.
// getTea is a higher-order function because it takes prepareTea (a function) as an argument.
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// A callback function is a function that is passed as an argument to another function and then executed inside that other function.
// prepareGreenTea, prepareBlackTea is the callback
// Callback functions: prepareGreenTea, prepareBlackTea (when passed to getTea)
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);;

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

// Callbacks are the functions that are slipped or passed into another function 
//  to decide the invocation of that function. 
// You may have seen them passed to other methods, 
// for example in filter, the callback function tells JavaScript the criteria for how to filter an array.

// They are functions that are passed into another function to be invoked later, 
// based on the criteria defined in the function.
// Functions that can be assigned to a variable, passed into another function, or returned from another function 
// just like any other normal value, are called first class functions. 
// In JavaScript, all functions are first class functions.

// When functions are passed in to or returned from another function, 
// then those functions which were passed in or returned can be called a lambda.

// Understand the Hazards of Using Imperative Code
// Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs.

// In English (and many other languages), the imperative tense is used to give commands. 
// Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.
// Often the statements change the state of the program, like updating global variables. 
// A classic example is writing a for loop that gives exact directions to iterate over the indices of an array.
// In contrast, functional programming is a form of declarative programming. 
// You tell the computer what you want done by calling a method or function.

// JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. 
// For example, instead of using the for loop mentioned above, you could call the map method which handles the details of iterating over an array. 
// This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section.
// Off By One Errors are common in imperative code.
// They happen when a loop iterates one time too many or one time too few. 
// This can happen for a number of reasons, but often it is because the comparison operator in the terminating condition of the loop is incorrect. 
// For example, if the comparison operator is <= instead of <, the loop will iterate one time too many. 
// This can lead to unexpected behavior or errors.
// using slice() instead of splice() to avoid mutating the original array

// Avoid Mutations and Side Effects Using Functional Programming
// A side effect is any application state change that is observable outside the called function other than its return value. 
// This includes modifying any external variable or object property, logging to the console, writing to the DOM, etc. 
// Functions that do not have any side effects are called pure functions.

// A pure function's return value is only determined by its input values, without observable side effects. 
// This means that a pure function must always return the same result if the same arguments are passed in. 
// It also means that a pure function cannot modify any external state. 
// This is very important in functional programming.

console.log(" === Avoid Mutations and Side Effects Using Functional Programming === ");
// In functional programming, 
// - changing or altering things is called mutation, and
// - the outcome is called a side effect. 
// A function, ideally, should be a pure function, meaning that it does not cause any side effects.
// The global variable
let fixedValue = 4;

function incrementer(num) {
  return num+1;
}

console.log(incrementer(fixedValue)); // 5
console.log(fixedValue);    // still 4 (unchanged)

console.log(" === Pass Arguments to Avoid External Dependence in a Function === ")
// Another principle of functional programming is to always declare your dependencies explicitly. 
// This means if a function depends on a variable or object being present, 
// then pass that variable or object directly into the function as an argument.

// There are several good consequences from this principle. 
// The function is easier to test, you know exactly what input it takes, and 
// it won't depend on anything else in your program.

// This can give you more confidence when you alter, remove, or add new code. 
// You would know what you can or cannot change and you can see where the potential traps are.

// Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.

// two distinct principles for functional programming:
//  - Don't alter a variable or object 
//     - create new variables and objects and return them if need be from a function. 
//  - Declare function parameters 
//     - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookList, bookName) {
  // create a new array, don't mutate
  return [...bookList, bookName]; 
  // OR return bookList.concat(bookName);
}

function remove(bookList, bookName) {
  // return new array without the book
  return bookList.filter(book => book !== bookName); 
}

console.log(" === Use the map Method to Extract Data from an Array === ");
// use pure functions to avoid side effects in a program. 
// Also, we have seen the value in having a function only depend on its input arguments.

// functional programming is centered around a theory of functions.

// It would make sense to be able to pass them as arguments to other functions, and 
// return a function from another function. 
// Functions are considered first class objects in JavaScript, 
// which means they can be used like any other object. 
// They can be saved in variables, stored in an object, or passed as function arguments.

// The map method iterates over each item in an array and 
// returns a new array containing the results of calling the callback function on each element. 
// It does this without mutating the original array.

// When the callback is used, it is passed three arguments. 
// The first argument is the current element being processed. 
// The second is the index of that element and 
// the third is the array upon which the map method was called.

let watchList = [
  { Title: "Inception", Director: "Christopher Nolan", imdbRating: "8.8" },
  { Title: "Interstellar", Director: "Christopher Nolan", imdbRating: "8.6" },
  { Title: "Batman Begins", Director: "Christopher Nolan", imdbRating: "8.3" },
  { Title: "Avatar", Director: "James Cameron", imdbRating: "7.9" }
];

// use map() to extract title and rating
// use arrow function and implicit return
// return array of objects with title and rating properties
let ratings = watchList.map(item => ({ 
  title: item.Title, 
  rating: item.imdbRating 
}));
console.log(JSON.stringify(ratings));

console.log(" === Implement map on a Prototype === ");
// The Array.prototype.map() or map() method is a useful tool for creating a new array from an existing array. 
// It is a higher-order function, meaning that it takes a function as an argument and
// returns a new function. 

// the map method returns an array of the same length as the one it was called on. 
// It also doesn't alter the original array, as long as its callback function doesn't.

// In other words, map is a pure function, and its output depends solely on its inputs. 
// Plus, it takes another function as its argument.

// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().
// You may use a for loop or the forEach method.
Array.prototype.myMap = function(callback) {
   const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

const numbers3 = [1, 2, 3];
const doubled1 = numbers3.myMap(num => num * 2);

console.log(doubled1); // [2, 4, 6]

// Array.prototype.filter(), or simply filter().
// filter calls a function on each element of an array and 
// returns a new array containing only the elements for which that function returns a truthy value 
// - that is, a value which returns true if passed to the Boolean() constructor. 
// In other words, it filters the array, based on the function passed to it. 
// Like map, it does this without needing to modify the original array.

// The callback function accepts three arguments. 
// The first argument is the current element being processed. 
// The second is the index of that element and 
// the third is the array upon which the filter method was called

const filteredList = watchList
  // Step 1: Keep only movies with rating >= 8.0
  .filter(item => item.imdbRating >= 8.0)

  // Step 2: Transform each movie into a smaller object with only {title, rating}
  .map(item => ({
    title: item.Title,
    rating: item.imdbRating
  }));
console.log(filteredList);

console.log(" === Implement the filter Method on a Prototype === ");
// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). 
// You may use a for loop or the forEach method.
Array.prototype.myFilter = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
}

console.log(" === Use the reduce Method to Analyze Data === ");
// You can solve almost any array processing problem using the reduce method.

// The reduce method allows for more general forms of array processing, and 
// it's possible to show that both filter and 
// map can be derived as special applications of reduce. 

// The reduce method iterates over each item in an array and 
// returns a single value (i.e. string, number, object, array). 
// This is achieved via a callback function that is called on each iteration.

// The callback function accepts four arguments. 
// The first argument is known as the accumulator, 
// which gets assigned the return value of the callback function from the previous iteration, 
// the second is the current element being processed, 
// the third is the index of that element and 
// the fourth is the array upon which reduce is called.

// In addition to the callback function, 
// reduce has an additional parameter which takes an initial value for the accumulator. 
// If this second parameter is not used, then the first iteration is skipped and
// the second iteration gets passed the first element of the array as the accumulator.
function getRating(watchList) {
  const { sumR, countR } = watchList.reduce((accumulator, movie) => {
    if (movie.Director === "Christopher Nolan") {
      accumulator.sum += parseFloat(movie.imdbRating); // add rating
      accumulator.countR += 1; // count how many Nolan movies
    }
    return accumulator;
  }, { sumR: 0, countR: 0 });

  return countR === 0 ? 0 : sumR / countR; // avoid divide by zero
}
console.log(getRating(watchList)); // 8.566666666666666

const squareList = arr => {
   return arr
    .filter(num => num > 0 && Number.isInteger(num)) // only positive integers
    .map(num => num * num); // square each
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [...arr].sort((a, b) => a - b); // copy first, then sort
}
console.log(nonMutatingSort(globalArray)); // [2, 3, 5, 6, 9]
console.log(globalArray); // [5, 6, 3, 2, 9] (unchanged)

function splitify(str) {
  return str.split(/[^a-zA-Z0-9]+/);
}
console.log(splitify("Hello World,I-am code"));
// Output: ["Hello", "World", "I", "am", "code"]

function sentensify(str) {
  return str.split(/[^a-zA-Z0-9]+/).join(" ");
}
console.log(sentensify("May-the-force-be-with-you"));

// Only change code below this line
function urlSlug(title) {
  return title
    .trim()                    // remove leading/trailing spaces
    .toLowerCase()             // convert to lowercase
    .split(/\s+/)              // split by one or more spaces
    .join('-');                // join with hyphens
}
// Only change code above this line

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
// Output: "a-mind-needs-books-like-a-sword-needs-a-whetstone"
console.log(urlSlug("  Winter Is Coming"));

function checkPositive1(arr) {
  return arr.every(num => num>=0)
}
console.log(checkPositive1([1, 2, 3, -4, 5]));

function checkPositive2(arr) {
  return arr.some(num => num>=0)
}
console.log(checkPositive2([0, -1, -2, -3, -4, -5]));

console.log(" === Introduction to Currying and Partial Application === ");
// Currying is a process in functional programming in which 
// we can transform a function with multiple arguments into a sequence of nesting functions that take 
// one argument at a time.

// In other words, instead of taking all arguments at one time, 
// a curried function takes the first argument and 
// returns a new function that takes the second argument and 
// returns a new function that takes the third argument, and 
// so on, until all arguments have been fulfilled.

// The arity of a function is the number of arguments it requires.
// Currying a function means to convert a function of N arity into N functions of arity 1.
// In other words, it restructures a function so it takes one argument, 
// then returns another function that takes the next argument, and so on.

function unCurried(x, y) {
  return x + y;
}

// example of currying
// 1. using nested functions
function curried1(x) {
  return function(y) {
    return x + y;
  }
}

// 2. using arrow functions
const curried2 = x => y => x + y

// Both of the above two curried functions can be invoked in the same manner as shown below:
console.log(curried1(1)(2)) // 3
console.log(curried2(1)(2)) // 3

const funcForY = curried1(1);
console.log(funcForY(2)); // 3

// Use Currying:
// use currying in specific scenarios where it adds flexibility, clarity, or reusability to your code.
// 1) When You Want Partial Application
//  - Partial application means pre-filling some arguments of a function to create a new function.
//  - Currying naturally supports this.
const cmultiply1 = a => b => a * b;
const cdouble1 = cmultiply1(2);  // partially applied
console.log(cdouble1(5)); // 10

// 2) When You Want to Compose Functions
//  - Currying makes function composition easier because each function takes a single argument.
//  - This is common in functional programming, especially with libraries like Ramda or Lodash/fp.
const cadd = a => b => a + b;
const cmultiply = a => b => a * b;
const addThenMultiply = a => b => c => cmultiply(b)(cadd(a)(c));
console.log(addThenMultiply(2)(3)(4)); // (4+2)*3 = 18
console.log(addThenMultiply(5)(10)(-2)); // (-2+5)*10 = 30

// 3) When You Want Higher Reusability
//  - Currying allows you to create specialized versions of general-purpose functions.
const log = level => message => console.log(`[${level}] ${message}`);
const errorLog = log('ERROR');
errorLog('Something went wrong'); // [ERROR] Something went wrong

// 4) When Working with Functional Pipelines
//  - Currying fits pipelines where functions are passed around as transformations.
//  - Example: array.map, array.filter with curried predicates:
const greaterThan = x => y => y > x;
const numbers4 = [1, 2, 3, 4];
console.log(numbers4.filter(greaterThan(2))); // [3,4]

// 5. When You Want to Avoid Repeating Arguments
// Currying can make repeated calls cleaner when an argument is shared across calls.
const greet = greeting => name => `${greeting}, ${name}!`;
const sayHello = greet('Hello');
console.log(sayHello('Alice')); // Hello, Alice!
console.log(sayHello('Bob'));   // Hello, Bob!

// When NOT to Use Currying:
// - When you don’t need partial application or function composition.
// - When all arguments are always available at once.
// - When readability suffers—overuse can make code harder for newcomers to understand.

// 💡 Summary:
// Use currying when you want flexibility, reusability, partial application, or functional composition. 
// It’s especially powerful in pipelines, higher-order functions, or when building general utilities that you’ll specialize multiple times.

// partial application can be described as applying a few arguments to a function at a time and
// returning another function that is applied to more arguments. 
function impartial(x, y, z) {
  return x + y + z;
}
const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13