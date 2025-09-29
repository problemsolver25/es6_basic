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

const checkEven = (num) => (num % 2 === 0 ? "Even" : "Odd");
console.log("checkEven(7)", checkEven(7)); // "Odd"

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

const foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
foods.bananas = 13;
foods["grapes"] = 35;
const strawberriesKey = "strawberries";
foods[strawberriesKey] = 27;
console.log(foods);

console.log(" === in operator === ");
// The in operator returns true if the specified property is in the specified object or its prototype chain.
let obj3 = { A: 10, B: 20 };
console.log("obj3: ", obj3);
console.log("'A' in obj3: ", 'A' in obj3); // true
console.log("'C' in obj3: ", 'C' in obj3); // false
// Even inherited properties are counted
console.log('toString' in obj3); // true, because it exists on Object.prototype

console.log(" === hasOwnProperty === ");
// The hasOwnProperty() method returns a boolean indicating whether the object has the specified property
// as its own property (as opposed to inheriting it).
let obj4 = { A: 10, B: 20 };
console.log("obj4: ", obj4);
console.log("A?: ", obj4.hasOwnProperty('A')); // true
console.log("C?: ", obj4.hasOwnProperty('C')); // false
console.log("toString?: ", obj4.hasOwnProperty('toString')); // false, not a direct property

console.log(" === Object.keys() === ");
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
console.log("users: ", users);

console.log("Object.keys(users): ", Object.keys(users));
console.log("Object.keys(users.Jeff): ", Object.keys(users.Jeff));
console.log("Object.keys(['user 1', 123, 'user 2']): ", Object.keys(['user 1', 123, 'user 2']));

console.log(" === Object.values() === ");
// The Object.values() method returns an array of a given object's own enumerable property values,
console.log("Object.values(users): ", Object.values(users));
console.log("Object.values(users.Jeff): ", Object.values(users.Jeff));
console.log("Object.values(['user 1', 123, 'user 2']): ", Object.values(['user 1', 123, 'user 2']));

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

//  the basic principles of OOP in JavaScript, including the this keyword, prototype chains, constructors, and inheritance.

console.log(" === Write Concise Declarative Functions with ES6 === ");
// constructor function Inside Object Methods
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

console.log(" === constructor function === ");
// The constructor function is a special function that creates and initializes an object instance of a class.
// create new object using a constructor function, Inside Constructor Functions or Classes
function Dog() {
  this.name = "xyz";
  this.color = "brown";
  this.numLegs = 4;
}
Dog.prototype.breed = "abc";

Dog.prototype = {
  constructor: Dog, // to avoid prototype being set to Object
  numLegs: 2, // overriding
  // Example method 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

const myDog = new Dog();
console.log(myDog.name);     // "xyz"
console.log(myDog.color);    // "brown"
console.log(myDog.numLegs);  // 4
console.log(myDog instanceof Dog); // true
console.log(myDog.constructor === Dog); // true
console.log(myDog.breed)  // "abc"
// Dog.prototype.isPrototypeOf(myDog) tests whether Dog.prototype exists in the prototype chain of myDog.
console.log(Dog.prototype.isPrototypeOf(myDog)); // true
// prototype chain
console.log(Object.prototype.isPrototypeOf(Dog.prototype)); // true

console.log(" === Use class Syntax to Define a Constructor Function === ");
class Dog1 {
  constructor(name = "xyz", color = "brown", numLegs = 4) {
    this.name = name;
    this.color = color;
    this.numLegs = numLegs;
  }

  // Example method
  bark() {
    console.log(`${this.name} says Woof!`);
  }
}

// Create a new dog object
const myDog1 = new Dog1();
console.log(myDog1.name);     // "xyz"
console.log(myDog1.color);    // "brown"
console.log(myDog1.numLegs);  // 4

myDog1.bark();                // "xyz says Woof!"

console.log(" === Inherit Behaviors from a Supertype === ");
// Inheritance is a way for one class to extend another class.
// This allows you to take an existing class and
// create a new class with additional properties or methods.
// The class being inherited from is called the supertype,
// and the class that inherits is called the subtype.
// In JavaScript, the subtypes will have access to all the methods and properties of their supertypes.
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog2(name) {
  this.name = name;
}
// Make Dog inherit from Animal
Dog2.prototype = Object.create(Animal.prototype);
// Reset constructor property to Dog
Dog2.prototype.constructor = Dog2;
// Add methods specific to Dog
Dog2.prototype.bark = function() {
  console.log("Woof!");
};
// overriding
Dog2.prototype.eat = function() {
  console.log(this.name + " says Woof! and nom nom nom");
};

// Create an instance
const myDog3 = new Dog2("Rex");
console.log(myDog3.name);  // "Rex"
myDog3.eat();              // "Rex says Woof! and nom nom nom"
myDog3.bark();             // "Woof!"

console.log(" === Use a Mixin to Add Common Behavior Between Unrelated Objects === ");
// A mixin allows other classes to use a collection of functions.
// This allows for the functionality to be shared between classes that don't share a parent class.
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Flying, wooosh!");
  }
};

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();

console.log(" === Use Closure to Protect Properties Within an Object from Being Modified Externally === ");
// A common pattern in JavaScript is to create a module that encapsulates some data and 
// provides methods that allow outside code to interact with that data safely.
// This is often accomplished by using closures.
function Bird() {
  let weight = 15;

  this.getWeight  = function() { 
    return weight;
  };

}

let ducky = new Bird();
console.log("ducky.getWeight(): ", ducky.getWeight());

console.log(" === Invoked Function Expression (IIFE) === ");
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
(function () {
  console.log("A cozy nest is ready");
})();
// The purpose of the IIFE is to obtain data privacy 
// because any variables declared within the IIFE cannot be accessed by the outside world.

console.log(" === Use an IIFE to Create a Module === ");
// A common pattern in JavaScript is to use an IIFE to create a module.
// A module is a group of related variables and functions that are encapsulated together.
// An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module.
let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();
let duck = {}; // define the object first
// Apply the mixins
funModule.isCuteMixin(duck);
funModule.singMixin(duck);
console.log(duck.isCute()); // true
duck.sing(); // "Singing to an awesome tune"

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
    }, 200); // 0.2 second delay
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

console.log(" === Factorialize a Number === ");
function factorialize(num) {
  return num<=0 ? 1 : num * factorialize(num-1);
}
console.log("factorialize(5): ", factorialize(5));
console.log("factorialize(0): ", factorialize(0));
console.log("factorialize(1): ", factorialize(1));
console.log("factorialize(-5): ", factorialize(-5));

console.log(" === Reverse a String === ");
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("reverseString('hello'): ", reverseString('hello'));

console.log(" === Find the Longest Word in a String and Return its Length === ");
function findLongestWordLength(str) {
  // Split string into words
  let words = str.split(' ');

  // Use reduce to find the longest word length
  let longestLength = words.reduce((max, word) => {
    return Math.max(max, word.length);
  }, 0);

  return longestLength;
}
console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog')); // 6

console.log(" === Find the Longest Word in a String === ");
function findLongestWord(str) {
  // Split string into words
  let words = str.split(' ');

  // Use reduce to keep the longest word
  let longestWord = words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // jumped

console.log(" === Return Largest Numbers in Arrays === ");
function largestOfFour(arr) {
  return arr.map(subArr => 
    subArr.reduce((largest, current) => 
      current > largest ? current : largest
    )
  );
}
let largArr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(largArr, "largestOfFour()", largestOfFour(largArr));
// [5, 27, 39, 1001]

console.log(" === Check if a String Ends with the Given Target String === ");
function confirmEnding(str, target) {
  return new RegExp(`${target}$`).test(str);
}
console.log(confirmEnding('Bastian', 'n')); // true
console.log(confirmEnding('Connor', 'n')); // false

console.log(" === Array.prototype.join() === ");
// The join() method creates and returns a new string 
// by concatenating all of the elements in an array (or an array-like object), 
// separated by commas or a specified separator string. 
// If the array has only one item, then that item will be returned without using the separator. 
// The default separator is a comma (,).
const arr4 = ["a", "b", "c"];
console.log(arr4.join("-"));  // "a-b-c"

const nums = [1, 2, 3];
console.log(nums.join(""));  // "123"

console.log(nums.join(" * ")); // "1 * 2 * 3"

// .join() → Array → String
// .split() → String → Array

console.log(" === Repeat a String Repeat a String === ");
function repeatStringNumTimes(str, num) {
  if (num <= 0) return "";
  return Array(num + 1).join(str);
}
console.log(repeatStringNumTimes("abc", 3)); // "abcabcabc"
console.log(repeatStringNumTimes("abc", 0)); // ""
console.log(repeatStringNumTimes("abc", -2)); // ""

console.log(" === Truncate a String === ");
function truncateString(str, num) {
  return str.length> num ? `${str.substring(0, num)}...` : str;
}
let str = "A-tisket a-tasket A green and yellow basket";
console.log(str, "truncateString(str, 8): ", truncateString(str, 8));
console.log(str, "truncateString(str, str.length): ", truncateString(str, str.length))

console.log(" === Finders Keepers === ");
function findElement(arr, func) {
  return arr.find(func); // returns undefined if none match
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));  // find even number = 2
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); // find even number = undefined
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); // find even number = 8

console.log(" === Boo who === ");
function booWho(bool) {
  return typeof bool == "boolean";
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho([1, 2, 3]));
console.log(booWho(1));
console.log(booWho(-1));
console.log(booWho(0));
console.log(booWho("true"));

console.log(" === Title Case a Sentence === ");
function titleCase(str) {
  return str
    .toLowerCase() // normalize the whole string first
    .split(" ")    // split into words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize first + rest
    .join(" ");    // join back into a sentence
}

console.log(titleCase("I'm a little tea pot")); 
// → "I'm A Little Tea Pot"

console.log(titleCase("sHoRt AnD sToUt")); 
// → "Short And Stout"

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

function frankenSplice(arr1, arr2, n) {
  // Copy arr2 to avoid mutating it
  let arr2Copy = arr2.slice(); // shallow copy, create new array
  // Insert all elements of arr1 at index n
  arr2Copy.splice(n, 0, ...arr1); // spread arr1 elements
  return arr2Copy;
}

// Test cases
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// → [4, 1, 2, 3, 5, 6]

console.log(frankenSplice([1, 2], ["a", "b"], 1));
// → ["a", 1, 2, "b"]

console.log(" === Falsy Bouncer === ");
// Remove all falsy values from an array. 
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function bouncer1(arr) {
  return arr.filter(item => Boolean(item));
}

console.log(bouncer1([7, 'ate', '', false, 9]));

const forbidden = [false, null, 0, "", undefined, NaN];
function bouncer2(arr) {
  return arr.filter(item => !forbidden.includes(item));
}

console.log(bouncer2([7, 'ate', '', false, 9]));
// → [7, "ate", 9]

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


console.log(" === Where do I Belong === ");

function getIndexToIns(arr, num) {
  let sortedArr = arr.sort((a, b) => a - b);
  let index = sortedArr.findIndex(item => num <= item);
  return index !== -1 ? index : sortedArr.length;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([20,3,5], 19));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([1,2,3,4], 1.5));

console.log(" === Mutations === ");
// check if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// You can assume that the string in the first element of the array is always longer than the string in the second element.
// The function should return true if all of the letters are present in the first string. 
// Otherwise, it should return false.
function mutation(arr) {
  // convert both strings to lowercase
  const [str1, str2] = arr.map(s => s.toLowerCase());
  // check every letter in str2 is included in str1
  return [...str2].every(letter => str1.includes(letter));
}

console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["hello", "ll"])); // true
console.log(mutation(["hello", "lll"])); // true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // true
console.log(mutation(["Mary", "Army"]));

console.log(" === Chunky Monkey === ");
// Write a function that splits an array (first argument) into groups the length of size (second argument) 
// and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  console.log(arr, size)
  let arrLength = arr.length;
  if(arrLength === 0) return []; // base case: empty array
  // playing with slice() to avoid mutating original array
  return [arr.slice(0, size), ...chunkArrayInGroups(arr.slice(size), size)];
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4))

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

console.log(" === Object.entries() === ");
// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// The order of the array returned by Object.entries() is the same as that provided by a for...in loop. 
// (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)
const obj5 = { a: 'somestring', b: 42 };
console.log(Object.entries(obj5)); // [ ['a', 'somestring'], ['b', 42] ]

const obj6 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(obj6)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

console.log(" === Object.fromEntries() === ");
// The Object.fromEntries() method transforms a list of key-value pairs into an object. 
// This is the reverse of Object.entries().
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);
console.log(Object.fromEntries(entries)); // { foo: "bar", baz: 42 }

const arr5 = [['foo', 'bar'], ['baz', 42]];
console.log(Object.fromEntries(arr5)); // { foo: "bar", baz: 42 }

console.log(" === Sum All Numbers in a Range === ");
// We'll pass you an array of two numbers.
// Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.
function sumAll(arr) {
  // Step 1: sort to find min and max
  let [min, max] = arr.sort((a, b) => a - b);
  // Step 2: reduce across the range
  return Array.from({ length: max - min + 1 }, (_, i) => min + i)
              .reduce((sum, num) => sum + num, 0);
}

console.log(sumAll([1, 4])); // 10
console.log(sumAll([4, 1])); // 10
console.log(sumAll([5, 10])); // 45
console.log(sumAll([-1, 1])); // 0

console.log(" === Diff Two Arrays === ");
// Compare two arrays and return a new array with any items only found in one of the two given arrays, 
// but not both. In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
  return arr1
    // things in arr1 but not in arr2
    .filter(x => !arr2.includes(x))   
    // things in arr2 but not in arr1
    .concat(arr2.filter(x => !arr1.includes(x))); 
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
                       ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // ["pink wool"]
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
                       ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // ["diorite", "pink wool"]

console.log(" === Seek and Destroy === ");
// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr, ...valsToRemove) {
  return arr.filter(item => !valsToRemove.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1, 5, 1]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // [1]
console.log(destroyer([2, 3, 2, 3], 2, 3)); // []

console.log(" === Wherefore art thou === ");
// Make a function that looks through an array of objects (first argument) 
// and returns an array of all objects that have matching name and value pairs (second argument). 
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(obj =>
    sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key])
  );
}
console.log(whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
)); // [{ first: "Tybalt", last: "Capulet" }]

console.log(" === Spinal Tap Case === ");
// Convert a string to spinal case. 
// Spinal case is all-lowercase-words-joined-by-dashes.
// The string may be in camelCase, 
// or have spaces or underscores between words.
// For example, 
// "This Is Spinal Tap" converts to "this-is-spinal-tap", 
// and "thisIsSpinalTap" also converts to "this-is-spinal-tap".
function spinalCase(str) {
  return str
    // Insert space between lowercase and uppercase letters (handle camelCase)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // Replace spaces and underscores with a single dash
    .split(/\s|_/)
    .join('-')
    // Convert everything to lowercase
    .toLowerCase();
}
// Test examples
console.log(spinalCase('This Is Spinal Tap'));    // "this-is-spinal-tap"
console.log(spinalCase('thisIsSpinalTap'));       // "this-is-spinal-tap"
console.log(spinalCase('The_Andy_Griffith_Show')); // "the-andy-griffith-show"

console.log(spinalCase('This Is Spinal Tap'));

console.log(" === Pig Latin === ");
// Pig Latin is a way of altering English Words. 
// The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, 
//   move it to the end of the word, and add "ay" to it.
// - If a word begins with a vowel, just add "way" at the end.
// - Input strings are guaranteed to be English words in all lowercase.
function translatePigLatin(str) {
  // Check if the word starts with a vowel
  if (/^[aeiou]/.test(str)) {
    return str + 'way';
  } else {
    // Find the first vowel and split
    const consonantCluster = str.match(/^[^aeiou]+/)[0];
    return str.slice(consonantCluster.length) + consonantCluster + 'ay';
  }
}

// Test cases
console.log(translatePigLatin("california")); // "aliforniacay"
console.log(translatePigLatin("paragraphs")); // "aragraphspay"
console.log(translatePigLatin("algorithm"));  // "algorithmway"
console.log(translatePigLatin("eight"));      // "eightway"

function myReplace(str, before, after) {
  // Preserve case of the first character
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }
  
  // Replace the word
  return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));

function pairElement(str) {
  const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
  return str.split('').map(char => [char, pairs[char]]);
}

console.log(pairElement("GCG")); // [["G","C"], ["C","G"], ["G","C"]]
console.log(pairElement("ATC")); // [["A","T"], ["T","A"], ["C","G"]]
console.log(pairElement("TTGAG")); // [["T","A"], ["T","A"], ["G","C"], ["A","T"], ["G","C"]]

console.log(" === Missing letters === ");
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.  
function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    // Check if the next character is not the expected next letter
    if (str.charCodeAt(i + 1) !== str.charCodeAt(i) + 1) {
      // Return the missing letter
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  return undefined; // All letters are present
}
console.log(fearNotLetter("abce")); // "d"
console.log(fearNotLetter("abcdefghjklmno")); // "i"
console.log(fearNotLetter("stvwx")); // "u"
console.log(fearNotLetter("bcdf")); // "e"
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined

// function fearNotLetter(str) {
//   const codes = str.split('').map(c => c.charCodeAt(0));
//   const missingCode = codes.find((code, i) => codes[i + 1] !== code + 1);
//   return missingCode && missingCode+1 <123 && !codes.includes(missingCode+1) ? String.fromCharCode(missingCode + 1) : undefined;
// }

// console.log(fearNotLetter("abce"));
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

console.log(" === Sorted Union === ");
// Write a function that takes two or more arrays and 
// returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, 
// but with no duplicates in the final array.
function uniteUnique(...arrays) {
  // Flatten all arrays into a single array
  const merged = arrays.flat();
  // Create a new array with only unique values in order
  return [...new Set(merged)];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // [1, 2, 3, 5]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2], [1], [6, 7])); // [1, 2, 3, 5, 4, 6, 7]

console.log(" === Convert HTML Entities === "); 
// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
// in a string to their corresponding HTML entities.
function convertHTML(str) {
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  
  // Use regex to find all occurrences of the characters to be replaced
  return str.replace(/[&<>"']/g, match => htmlEntities[match]);
}

console.log(convertHTML("Dolce & Gabbana")); // "Dolce &amp; Gabbana"
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // "Hamburgers &lt; Pizza &lt; Tacos"
console.log(convertHTML("Sixty > twelve")); // "Sixty &gt; twelve"
console.log(convertHTML('Stuff in "quotation marks"')); // 'Stuff in &quot;quotation marks&quot;'
console.log(convertHTML("Schindler's List")); // "Schindler&apos;s List"
console.log(convertHTML("<>")); // "&lt;&gt;"
console.log(convertHTML("abc")); // "abc"

console.log(" === Sum All Odd Fibonacci Numbers === ");
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
function sumFibs(num) {
  let a = 1, b = 0, sum = 0;
  
  while (a <= num) {
    if (a % 2 !== 0) {
      sum += a; // Add to sum if odd
    }
    [a, b] = [a + b, a]; // Update Fibonacci numbers
  }
  
  return sum;
}

console.log(sumFibs(4)); // 5
console.log(sumFibs(10)); // 10
console.log(sumFibs(1000)); // 1785
console.log(sumFibs(4000000)); // 4613732
console.log(sumFibs(75024)); // 60696
console.log(sumFibs(75025)); // 135721

console.log(" === Sum All Primes === ");
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
// For example, 2 is a prime number because it is only divisible by 1 and 2.
// In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so that it returns the sum of all prime numbers that are less than or equal to num.
function sumPrimes(num) {
  // Helper function to check if a number is prime
  const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumPrimes(10)); // 17
console.log(sumPrimes(977)); // 73156 
console.log(sumPrimes(2)); // 2

console.log(" === Smallest Common Multiple === ");
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
// as well as by all sequential numbers in the range between these parameters.
function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  
  // Function to compute GCD (Greatest Common Divisor)
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Function to compute LCM (Least Common Multiple)
  const lcm = (a, b) => (a * b) / gcd(a, b);
  
  // Compute LCM for the entire range
  return Array.from({ length: max - min + 1 }, (_, i) => i + min)
              .reduce((multiple, current) => lcm(multiple, current), 1);
}
console.log(smallestCommons([1, 5])); // 60
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([1, 13])); // 360360
console.log(smallestCommons([23, 18])); // 6056820

console.log(" === Drop it === ");
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
// until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, 
// otherwise, arr should be returned as an empty array.
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift(); // Remove the first element
  }
  return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; })); // [1, 2, 3]
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3; })); // [3, 4]
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1; })); // [1, 0, 1]
console.log(dropElements([1, 2, 3], function(n) {return n > 0; })); // [1, 2, 3]
console.log(dropElements([1, 2, 3], function(n) {return n > 2; })); // [3]
console.log(dropElements([1, 2, 3], function(n) {return n > 3; })); // []

console.log(" === Steamroller === ");
// Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
  return arr.reduce((flat, toFlatten) => 
    flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten), []);
}

console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
console.log(steamrollArray([[["a"]], [["b"]]])); // ["a", "b"]
console.log(steamrollArray([1, [], [3, [[4]]]])); // [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]

console.log(" === Binary Agents === ");
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.
function binaryAgent(str) {
  return str.split(' ')
            .map(bin => String.fromCharCode(parseInt(bin, 2)))
            .join('');
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
// "Aren't bonfires fun!?"
console.log(binaryAgent("01000010 01100101 01110100 01110100 01100101 01110010 00100000 01100010 01110010 01100001 01110110 01100101"));
// "Better brave"

console.log(" === Everything Be True === ");  
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. 
// The predicate pre will be an object property and you need to return true if its value is truthy.
// Otherwise, return false.
function truthCheck(collection, pre) {
  return collection.every(obj => Boolean(obj[pre]));
}

console.log(truthCheck(
  [{ name: "Quincy", role: "Founder", isBot: false }, 
   { name: "Naomi", role: "", isBot: false }, 
   { name: "Camperbot", role: "Bot", isBot: true }], 
  "isBot")); // false

console.log(truthCheck(
  [{ name: "Quincy", role: "Founder", isBot: false }, 
   { name: "Naomi", role: "CEO", isBot: false }, 
   { name: "Camperbot", role: "Bot", isBot: true }], 
  "isBot")); // true
  
console.log(truthCheck(
  [{ name: "Quincy", role: "Founder", isBot: false }, 
   { name: "Naomi", role: "CEO", isBot: false }, 
   { name: "Camperbot", role: "Bot", isBot: true }], 
  "name")); // true

console.log(" === Arguments Optional === ");
// Create a function that sums two arguments together. 
// If only one argument is provided, then return a function that expects one argument and returns the sum.
function addTogether(...args) {
  const [first, second] = args;
  
  // Check if first argument is a number
  if (typeof first !== 'number') {
    return undefined;
  }
  
  // If only one argument, return a function that expects the second argument
  if (args.length === 1) {
    return function(second) {
      if (typeof second !== 'number') {
        return undefined;
      }
      return first + second;
    };
  }
  
  // If two args, return their sum
  if (typeof second !== 'number') {
    return undefined;
  }
  return first + second;
}

console.log(addTogether(2, 3)); // 5
console.log(addTogether(23, 30)); // 53
console.log(addTogether(5)(7)); // 12
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); // undefined
console.log(addTogether(2, "3")); // undefined
console.log(addTogether(2)([3])); // undefined

console.log(" === Make a Person === ");
// Fill in the object constructor with the following methods below:
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)  
// setFullName(firstAndLast)
const Person4 = function(first, last) {
  // Private variables
  let firstName = first;
  let lastName = last;

  // Getter methods
  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  };

  // Setter methods
  this.setFirstName = function(first) {
    firstName = first;
  };

  this.setLastName = function(last) {
    lastName = last;
  };

  this.setFullName = function(first, last) {
    firstName = first;
    lastName = last;
  };
};

const bob = new Person4('Bob Ross');
console.log(bob.getFullName()); // "Bob Ross"
console.log(bob.getFirstName()); // "Bob"
console.log(bob.getLastName()); // "Ross"
bob.setFirstName("Haskell");
console.log(bob.getFullName()); // "Haskell Ross"
bob.setLastName("Curry");
console.log(bob.getFullName()); // "Haskell Curry"
bob.setFullName("Haskell Curry");
console.log(bob.getFullName()); // "Haskell Curry"

console.log(" === Map the Debris === ");
// Return a new array that transforms the element's average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// You can read about orbital periods on Wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
function orbitalPeriod(arr) {
  const GM = 398600.4418; // km^3/s^2
  const earthRadius = 6367.4447; // km
  const TWO_PI = 2 * Math.PI;

  return arr.map(obj => {
    const a = earthRadius + obj.avgAlt; // semi-major axis in km
    const T = TWO_PI * Math.sqrt(Math.pow(a, 3) / GM); // orbital period in seconds
    return { name: obj.name, orbitalPeriod: Math.round(T) };
  });
}

// Example usage:
console.log(
  orbitalPeriod([
    { name: "sputnik", avgAlt: 35873.5553 }
  ])
);
// Output: [{ name: 'sputnik', orbitalPeriod: 86400 }]

console.log(" === Palindrome Checker === ");
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, 
// ignoring punctuation, case, and spacing.
function palindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Reverse the cleaned string
  const reversedStr = cleanStr.split('').reverse().join('');
  
  // Compare original cleaned string with reversed string
  return cleanStr === reversedStr;
}

// Examples:
console.log(palindrome("racecar")); // true
console.log(palindrome("RaceCar")); // true
console.log(palindrome("race CAR")); // true
console.log(palindrome("2A3*3a2")); // true
console.log(palindrome("hello")); // false

console.log(" === Convert to Roman Numerals === ");
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
function convertToRoman(num) {
  const romanMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];

  let result = "";
  for (let {value, numeral} of romanMap) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  
  return result;
}

// Examples:
console.log(convertToRoman(36)); // XXXVI
console.log(convertToRoman(3999)); // MMMCMXCIX
console.log(convertToRoman(4)); // IV
console.log(convertToRoman(944)); // CMXLIV

console.log(" === Caesars Cipher === ");
// One of the simplest and most widely known ciphers is a Caesar cipher, 
// also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
function rot13(str) {
  // loop through only uppercase letters
  return str.replace(/[A-Z]/g, char => {
    let code = char.charCodeAt(0); // get ASCII code
    // Shift by 13, wrap around using modulo
    let shifted = ((code - 65 + 13) % 26) + 65;
    return String.fromCharCode(shifted);
  });
}

// Test cases
console.log(rot13("SERR PBQR PNZC")); // "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!"));    // "FREE PIZZA!"
console.log(rot13("SERR YBIR?"));     // "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
// "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

console.log(" === Telephone Number Validator === ");
// Return true if the passed string looks like a valid US phone number.
// The user may fill out the form field any way they choose as long as it has the format of a valid US number.
// ^(1\s?)? → optional leading 1 (country code), with or without a space.
// (\(\d{3}\)|\d{3}) → area code can be 3 digits in parentheses (555) or just 3 digits 555.
// ([\s-]?) → optional space or dash separator.
// \d{3} → 3 digits.
// ([\s-]?) → optional separator again.
// \d{4} → final 4 digits.
// $ → end of string.

function telephoneCheck(str) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  return regex.test(str);
}

// ✅ Test cases
console.log(telephoneCheck("555-555-5555"));     // true
console.log(telephoneCheck("(555)555-5555"));    // true
console.log(telephoneCheck("(555) 555-5555"));   // true
console.log(telephoneCheck("555 555 5555"));     // true
console.log(telephoneCheck("5555555555"));       // true
console.log(telephoneCheck("1 555 555 5555"));   // true

// ❌ Invalid cases
console.log(telephoneCheck("12345"));            // false
console.log(telephoneCheck("2 (757) 622-7382")); // false
console.log(telephoneCheck("555)-555-5555"));    // false
console.log(telephoneCheck("(555-555-5555"));    // false

console.log(" === Cash Register === ");
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
// payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
// or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order.
function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;

  // Currency unit values in dollars
  const UNIT_AMOUNT = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  // Helper: fix floating-point precision to 2 decimals
  const roundToCents = num => Math.round(num * 100) / 100;

  // 1. Compute total cash in drawer
  const totalCID = roundToCents(
    // [, amount] Skip the first element (currency name).
    // Extract the second element into amount.
    cid.reduce((sum, [, amount]) => sum + amount, 0)
  );

  // 2. Edge cases
  if (changeDue > totalCID) return { status: "INSUFFICIENT_FUNDS", change: [] };
  if (changeDue === totalCID) return { status: "CLOSED", change: cid };

  // 3. Traverse from largest to smallest currency unit
  const changeArr = cid
    .slice()              // copy so we don’t mutate input
    .reverse()            // start from largest unit
    .map(([unit, amountAvailable]) => {
      let unitValue = UNIT_AMOUNT[unit];
      let amountToReturn = 0;

      // take as many units as possible without exceeding changeDue
      while (changeDue >= unitValue && amountAvailable > 0) {
        changeDue = roundToCents(changeDue - unitValue);
        amountAvailable = roundToCents(amountAvailable - unitValue);
        amountToReturn = roundToCents(amountToReturn + unitValue);
      }

      return [unit, amountToReturn];
    })
    .filter(([_, amount]) => amount > 0); // keep only used denominations

  // 4. If exact change couldn’t be made
  if (changeDue > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };

  // 5. Otherwise, return OPEN with computed change
  return { status: "OPEN", change: changeArr };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// {status: "OPEN", change: [["QUARTER", 0.5]]}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0, 5], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// {status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}