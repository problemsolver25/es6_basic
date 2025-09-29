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
