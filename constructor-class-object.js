
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

console.log("Object in Fahrenheit", thermos);


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