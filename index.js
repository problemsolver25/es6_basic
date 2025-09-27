console.log(" === The difference between let and var keywords === ");
// Compare Scopes of the var and let Keywords
// When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

// The let keyword behaves similarly, but with some extra features. 
// When you declare a variable with the let keyword inside a block, statement, or expression, 
// its scope is limited to that block, statement, or expression.

function checkScope() {
  let i = 'function scope';
  var j = 'function scope';
  if (true) {
    let i = 'block scope';
    j = 'block scope';
    console.log('Block scope i is: ', i);
    console.log('Block scope j is: ', i);
  }
  console.log('Function scope i is: ', i);
  console.log('Function scope j is: ', i);
  return [i, j];
}
console.log("checkScope(): ",checkScope());

console.log(" === Use Arrow Functions to Write Concise Anonymous Functions === ");
// In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. 
// Instead, we create inline functions. 
// We don't need to name these functions because we do not reuse them anywhere else.
// ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. 
// Instead, you can use arrow function syntax:

const magic = () => new Date();
console.log("magic(): ",magic());

console.log(" === Write Arrow Functions with Parameters === ");

// Just like a regular function, you can pass arguments into an arrow function.

const doubler = (item) => item * 2;
console.log(doubler(4));
// doubler(4) would return the value 8.

// If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.
// const doubler = item => item * 2;
// It is possible to pass more than one argument into an arrow function.

const multiplier = (item, multi) => item * multi;
console.log(multiplier(4, 2));
// multiplier(4, 2) would return the value 8.

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

console.log(" === Set Default Parameters for Your Functions === ");
//create more flexible functions, ES6 introduces default parameters for functions.

const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John"));
console.log(greeting());
//The console will display the strings Hello John and Hello Anonymous.
//The default parameter kicks in when the argument is not specified (it is undefined). 
// As you can see in the example above, 
// the parameter name will receive its default value Anonymous when you do not provide a value for the parameter. 
// You can add default values for as many parameters as you want.
const increment = (number, value=1) => number + value;
console.log(increment(5, 2));
console.log(increment(5));

console.log(" === Use the Rest Parameter with Function Parameters === ");
// create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
//The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..
//The rest parameter eliminates the need to use the arguments object and allows us to use array methods on the array of parameters passed to the function howMany.


console.log(" === Mutate an Array Declared with const === ")
// The const declaration has many use cases in modern JavaScript.
// Some developers prefer to assign all their variables using const by default, 
// unless they know they will need to reassign the value. Only in that case, they use let.
// However, it is important to understand that objects (including arrays and functions) 
// assigned to a variable using const are still mutable. 
// Using the const declaration only prevents reassignment of the variable identifier.

const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
console.log("s: ",s);

console.log(" === Prevent Object Mutation === ");
// const declaration alone doesn't really protect your data from mutation. 
// To ensure your data doesn't change, 
// JavaScript provides a function Object.freeze to prevent data mutation.
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

console.log(" === Use the Spread Operator to Evaluate Arrays In-Place === ");
// ES6 introduces the spread operator, 
// which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

// The ES5 code below uses apply() to compute the maximum value in an array:
// var arr = [6, 89, 3, 45];
// var maximus = Math.max.apply(null, arr);
// maximus would have a value of 89.
// We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. 
// Math.max() expects comma-separated arguments, but not an array. 
// The spread operator makes this syntax much better to read and maintain.

// const arr = [6, 89, 3, 45];
// const maximus = Math.max(...arr);
//maximus would have a value of 89.

// ...arr returns an unpacked array. 
// In other words, it spreads the array. 
// However, the spread operator only works in-place, like in an argument to a function or in an array literal. 
// For example:

// const spreaded = [...arr];

//However, the following code will not work:
// const spreaded = ...arr;

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);

const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log("sum(): ",sum(1,2,3));

console.log(" === Use Destructuring Assignment to Assign Variables from Arrays === ")
// ES6 makes destructuring arrays as easy as destructuring objects.

// One key difference between the spread operator and array destructuring is that 
// the spread operator unpacks all contents of an array into a comma-separated list. 
// Consequently, you cannot pick or choose which elements you want to assign to variables.
// Destructuring an array lets us do exactly that:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
// The console will display the values of a and b as 1, 2.

// The variable a is assigned the first value of the array, 
// and b is assigned the second value of the array. 
// We can also access the value at any index in an array 
// with destructuring by using commas to reach the desired index:

const [aa, bb,,, cc] = [1, 2, 3, 4, 5, 6];
console.log(aa, bb, cc);
// The console will display the values of a, b, and c as 1, 2, 5.

var num1 = 8, num2 = 6;
console.log(num1, num2);
[num1, num2] = [num2, num1];
console.log(num1, num2);

console.log(" === Destructuring via rest elements === ");
// In some situations involving array destructuring, 
// we might want to collect the rest of the elements into a separate array.

// The result is similar to Array.prototype.slice(), as shown below:

const [e, f, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(e, f);
console.log(arr);
// The console would display the values 1, 2 and [3, 4, 5, 7].

// Variables a and b take the first and second values from the array. 
// After that, because of the rest syntax presence, 
// arr gets the rest of the values in the form of an array. 
// The rest element only works correctly as the last variable in the list. 
// As in, you cannot use the rest syntax to catch a subarray that leaves out the last element of the original array.

function removeFirstTwo(list) {
  const [ , , ...arr] = list;  // skip first two elements
  return arr;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("source: ", source)
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log("sourceWithoutFirstTwo: ", sourceWithoutFirstTwo)


console.log(" === Computed Property Names === ");
const key = "dynamic";
const obj = { [key]: 42 };
console.log(obj.dynamic); // 42

console.log(" === for...of Loop === ");
for (let val of [10, 20, 30]) {
  console.log(val); // 10, 20, 30
}

console.log(" === Set === ");
// A Set is a collection of values, 
// where each value must be unique. 
// A value in the Set may only occur once; it is unique in the Set's collection. 
// You can iterate through the elements of a set in insertion order. 
// A value in the Set may be any value of any data type.
// Here is a simple example of a Set:
const set = new Set([1,2,2,3]);
console.log("new Set([1,2,2,3]): ", set); // Set(3) {1,2,3}

console.log(" === Map === ");
// A Map is a collection of keyed data items, just like an Object.
// But the main difference is that Map allows keys of any type.
// An Object has a prototype, so there are default keys that exist in the object.
// A Map does not contain any keys by default.
// Also, the keys in Maps are ordered. 
// So when you iterate over it, 
// you get the items in the order of insertion.
// While iterating over an Object, 
// the order is not guaranteed.
// Here is a simple example of a Map:
const map = new Map([["a",1],["b",2]]);
console.log("new Map([['a',1],['b',2]]): ", map); // Map(2) {"a" => 1, "b" => 2}
map.set("c", 3);
console.log("map", map); // Map(3) {"a" => 1, "b" => 2, "c" => 3}
console.log('map.get("a")', map.get("a")); // 1


console.log(" === Symbols === ");
// A new primitive type called Symbol was introduced in ES6. 
// Symbols are unique identifiers that can be used as keys for object properties. 
// Every symbol value returned from Symbol() is unique. 
// Even if you create two symbols with the same description, they are different values.
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1); // Symbol(id)
console.log(sym2); // Symbol(id)
console.log("sym1 === sym2 : ",sym1 === sym2); // false


console.log(" === Object.assign & Spread === ");
// Object.assign() is used to copy the values of all enumerable own properties from one or more source objects to a target object. 
// It will return the target object.
// The spread operator (...) can also be used to copy properties from one object to another.
// Here is an example of using Object.assign() to copy the properties of one object to another:
const obj1 = {a:1}, obj2 = {b:2};
console.log(obj1, obj2); // {a:1} {b:2}
console.log(Object.assign(obj1, obj2)); // {a:1, b:2}
const merged = {...obj1, ...obj2};
console.log(merged); // {a:1, b:2}

console.log(" === Write Concise Declarative Functions with ES6 === ");
// Write Concise Declarative Functions with ES6:
// When defining functions within objects in ES5, we have to use the keyword function as follows:

const person1 = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
// With ES6, you can remove the function keyword and colon altogether when defining functions in objects. 
// Here's an example of this syntax:

const person2 = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log("bicycle.gear: ",bicycle.gear);

console.log(" === Write Concise Object Literal Declarations Using Object Property Shorthand === ");
// ES6 adds some nice support for easily defining object literals.

// Consider the following code:
// const getMousePosition = (x, y) => ({
  // x: x,
  // y: y
// });

// getMousePosition is a simple function that returns an object containing two properties. 
// ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. 
// You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. 
// Here is the same function from above rewritten to use this new syntax:

// const getMousePosition = (x, y) => ({ x, y });

const createPerson = (name, age, gender) => ({name, age, gender});
console.log("createPerson(): ",createPerson("Zodiac Hasbro", 32, "Female"));

console.log(" === Use Destructuring Assignment to Pass an Object as a Function's Parameters === ");
// In some cases, you can destructure the object in a function argument itself.

// Consider the code below:

const profileUpdate1 = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
// This effectively destructures the object sent into the function. This can also be done in-place:

const profileUpdate2 = ({ name, age, nationality, location }) => {
}
// When profileData is passed to the above function, 
// the values are destructured from the function parameter for use within the function.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max,min}) => (max + min) / 2.0; 
// Only change code above this line

console.log("half(stats): ", half(stats));

console.log(" === Use Destructuring Assignment to Extract Values from Objects === ");
// Destructuring assignment is special syntax introduced in ES6, 
// for neatly assigning values taken directly from an object.

// Consider the following ES5 code:

const user = { name: 'John Doe', age: 34 };
const name1 = user.name;
const age1 = user.age;
// name would have a value of the string John Doe, and age would have the number 34.

// Here's an equivalent assignment statement using the ES6 destructuring syntax:

const { name, age } = user;
// Again, name would have a value of the string John Doe, and age would have the number 34.
// Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.
// You can extract as many or few values from the object as you want.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES;
console.log("today: ",today);
console.log("tomorrow: ",tomorrow);


console.log(" === Use Destructuring Assignment to Assign Variables from Objects === ");
// Destructuring allows you to assign a new variable name when extracting values. 
// You can do this by putting the new name after a colon when assigning the value.

// Using the same object from the last example:

const user1 = { name: 'John Doe', age: 34 };
// Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user;
// You may read it as "get the value of user.name and 
// assign it to a new variable named userName" and so on. 
// The value of userName would be the string John Doe, and 
// the value of userAge would be the number 34.

const HIGH_TEMPERATURES1 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today:highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES1; 
console.log("highToday: ",highToday);
console.log("highTomorrow: ",highTomorrow);

console.log(" === Use Destructuring Assignment to Assign Variables from Nested Objects === ");
// You can use the same principles from the previous two lessons to destructure values from nested objects.
// Using an object similar to previous examples:

const user3 = {
  johnDoe: { 
    agee: 34,
    email: 'johnDoe@example.com'
  }
};
// Here's how to extract the values of object properties and assign them to variables with the same name:

const { johnDoe: { agee, email }} = user3;
// And here's how you can assign an object properties' values to variables with different names:

const { johnDoe: { agee: userAge3, email: userEmail3 }} = user3;

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
  
const {today:{low:lowToday3, high:highToday3}} = LOCAL_FORECAST;
console.log("lowToday3: ",lowToday3);
console.log("highToday3: ",highToday3);

console.log(" === Create Strings using Template Literals === ");
// A new feature of ES6 is the template literal. 
// This is a special type of string that makes creating complex strings easier.
// Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
//Consider the code below:

const person3 = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting1 = `Hello, my name is ${person3.name}!
I am ${person3.age} years old.`;
console.log(greeting1);

// The console will display the strings Hello, my name is Zodiac Hasbro! and I am 56 years old..
// A lot of things happened there. 
// Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. 
// Secondly, notice that the string is multi-line, both in the code and the output. 
// This saves inserting \n within strings. 
// The ${variable} syntax used above is a placeholder. 
// Basically, you won't have to use concatenation with the + operator anymore. 
// To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. 
// Similarly, you can include other expressions in your string literal, for example ${a + b}. 
// This new way of creating strings gives you more flexibility to create robust strings.

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList);

console.log(" === Use class Syntax to Define a Constructor Function === ");
// ES6 provides a new syntax to create objects, using the class keyword.
// In ES5, an object can be created by defining a constructor function and using the new keyword to instantiate the object.
// In ES6, a class declaration has a constructor method that is invoked with the new keyword. 
// If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.

// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
// It should be noted that the class keyword declares a new function, to which a constructor is added. 
// This constructor is invoked when new is called to create a new object.
// Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.
// The constructor method is a special method for creating and initializing an object created with a class. 

class Vegetable{
  constructor(name) {
    this.name = name
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

console.log(" === Use getters and setters to Control Access to an Object === ");
// You can obtain values from an object and set the value of a property within an object.

// These are classically called getters and setters.
// Getter functions are meant to simply return (get) 
// the value of an object's private variable to the user without the user directly accessing the private variable.
// Setter functions are meant to modify (set) 
// the value of an object's private variable based on the value passed into the setter function. 
// This change could involve calculations, or even overwriting the previous value completely.

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

// The console would display the strings anonymous and newAuthor.
// Notice the syntax used to invoke the getter and setter. 
// They do not even look like functions. 
// Getters and setters are important because they hide internal implementation details.
// Note: It is convention to precede the name of a private variable with an underscore (_). 
// However, the practice itself does not make a variable private.
// Private variables are for internal use only and should not be directly accessed.
// Getters and setters are used to control access to certain properties of an object.
// Public properties are accessible from outside the class.
// Private properties are accessible only from within the class.

class Thermostat{
  // property always saved in Fahrenheit and 
  // o/p in Celsius

  // i/p temperature in Fahrenheit 
  constructor(temperature) {
    this._temperature = temperature
  }

  // getter 
  // o/p temperature in Celsius
  // C = 5/9 * (F - 32)
  get temperature() {
    return 5/9 * (this._temperature - 32);
  }

  // setter
  // i/p temperature in Celsius
  // F = C * 9.0 / 5 
  set temperature(temperature) {
    this._temperature = temperature * 9.0 / 5 + 32;
  }

}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log("Object in Fahrenheit", thermos)

let temp = thermos.temperature; // 24.44 in Celsius
console.log("getter(): ", temp);

thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log("setter(): ", temp)

console.log("Object in Fahrenheit", thermos)


console.log(" === Create a JavaScript Promise with resolve, reject, then and catch === ");
// A promise in JavaScript is exactly what it sounds like 
// - you use it to make a promise to do something, usually asynchronously. 
// When the task completes, you either fulfill your promise or fail to do so. 

// Promise is a constructor function, so you need to use the new keyword to create one. 
// It takes a function, as its argument, with two parameters - resolve and reject. 
// These are methods used to determine the outcome of the promise. 

// A promise has three states: pending, fulfilled, and rejected. 
// Below promise is forever stuck in the pending state because you did not add a way to complete the promise. 
// The resolve and reject parameters given to the promise argument are used to do this. 
// resolve is used when you want your promise to succeed, and 
// reject is used when you want it to fail. 

//const myPromise = new Promise((resolve, reject) => {
//});

// Handle a Fulfilled Promise with then
// Promises are most useful when you have a process that takes an unknown amount of time in your code 
// (i.e. something asynchronous), often a server request. 
// When you make a server request it takes some amount of time, and 
// after it completes you usually want to do something with the response from the server. 
// This can be achieved by using the then method.

// Promise.prototype.then(onFulfilled, onRejected)
// The then method schedules callback functions for the eventual completion of a Promise 
// - either fulfillment or rejection. One of the onFulfilled and onRejected handlers will be executed 
// to handle the current promise's fulfillment or rejection. 
// When the promise is fulfilled with resolve the onFulfilled handler is called.

// myPromise.then(result => {
  
// });
// result comes from the argument given to the resolve method.

// Handle a Rejected Promise with catch
// catch is the method used when your promise has been rejected. 
// It is executed immediately after a promise's reject method is called. 

// myPromise.catch(error => {
  
// });
// error is the argument passed in to the reject method.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("resolve(): ","We got the data");
  } else {  
    reject("reject(): ","Data not received");
  }
});

makeServerRequest.then(result => {
  console.log("Prmise then: ",result);
});

makeServerRequest.catch(error => {
  console.log("Promise catch: ", error);
});

console.log(" === async/await === ");
// The async function declaration defines an asynchronous function, 
// which returns an AsyncFunction object. 
// An async function is a function declared with the async keyword, 
// and the await keyword is permitted within them. 
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, 
// avoiding the need to explicitly configure promise chains.

// async/await makes asynchronous code look synchronous → easier to read, write, and debug.
// It prevents “callback hell” or messy .then().then().catch() chains.
// Cleaner error handling with try...catch.

// Here is a simple example of an async function:
async function fetchData() {
  return "Hello async/await";
}
fetchData().then(console.log);

console.log(" === async/await with a fake API call === ");
// Example: async/await with a fake API call
function fakeApiRequest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ Data received from API");
    }, 2000); // 2 second delay
  });
}

async function getData() {
  console.log("⏳ Fetching data from fake API request...");
  const result = await fakeApiRequest();  // wait for promise to resolve
  console.log(result);
  console.log("🎉 Done!");
}
console.log("called async getData()");
getData();

console.log(" === async/await with error handling === ");
// Example: async/await with error handling
// In the previous example, there was no way for the fakeApiRequest() function to fail. 
// Let's add error handling to the getData() function using try...catch.

function fetchData1() {
  return Promise.resolve("Data loaded");
}

fetchData1()
  .then(result => console.log(result))
  .catch(error => console.error(error));

async function loadData() {
  try {
    const result = await fetchData1();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

console.log("called async loadData()");
loadData();

// ⏳ Synchronous vs Asynchronous
// Synchronous (normal) code
// Runs one line at a time in order.
// Each line waits for the previous one to finish.
// If one line takes a long time, everything after it is blocked.

// Asynchronous code
// Some operations (like fetching data, reading a file, timers) can take a long time.
// Instead of blocking the whole program, JavaScript sets them aside and keeps running the rest of the code.
// When the long task is finished, its result is handled later (in the future).
// This is done with callbacks, promises, or async/await.