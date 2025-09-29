console.log(" === Mutate an Array Declared with const === ")
// The const declaration has many use cases in modern JavaScript.
// Some developers prefer to assign all their variables using const by default, 
// unless they know they will need to reassign the value. Only in that case, they use let.
// However, it is important to understand that objects (including arrays and functions) 
// assigned to a variable using const are still mutable. 
// Using the const declaration only prevents reassignment of the variable identifier.

const s = [5, 7, 2];
console.log("s: ",s);
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