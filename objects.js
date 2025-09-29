console.log(" === Computed Property Names === ");
const key = "dynamic";
const obj = { [key]: 42 };
console.log(obj.dynamic); // 42

const foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
console.log("foods: ", foods);
foods.bananas = 13;
foods["grapes"] = 35;
const strawberriesKey = "strawberries";
foods[strawberriesKey] = 27;
console.log("foods: ", foods);

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