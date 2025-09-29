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