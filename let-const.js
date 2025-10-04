console.log(" === The difference between let and var keywords === ");
// Compare Scopes of the var and let Keywords
// When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

// The let keyword behaves similarly, but with some extra features. 
// When you declare a variable with the let keyword inside a block, statement, or expression, 
// its scope is limited to that block, statement, or expression.

function testRedeclare() {
  let x = 10;
  var y = 10;

  if (true) {
    let x = 20; // ✅ new block-scoped variable
    var y = 20; // ✅ modifies function-scoped y
    console.log("Redeclare, new block-scoped variable ==> ","x = ", x, "y = ", y); // 20 20
  }

  console.log("original outside of block, function-scoped ==> ", "x = ", x, "y = ", y); // 10 20
}
console.log("testRedeclare(): ",testRedeclare());

function testReassign() {
  let x = 10;
  var y = 10;

  if (true) {
    x = 20; // ✅ reassign outer x
    y = 20; // ✅ reassign outer y
    console.log("reassigned, block-scoped ==> ", "x = ", x, "y = ", y); // 20 20
  }

  console.log("original, functional scope ==> ", "x = ", x, "y = ", y); // 20 20
}
console.log("testReassign(): ",testReassign());


// =========================
// let & const Examples
// =========================

console.log("=== let & const ===");

// Block vs function scope
function scopeExample() {
  if (true) {
    let blockVar   = "I'm block scoped";
    const constVar = "I am constant";
    console.log(blockVar); // works
    console.log(constVar); // works
  }
  try {
    console.log(blockVar); // ReferenceError
  } catch (e) {
    console.log(e.message);
  }

  try {
    console.log(constVar); // ReferenceError
  } catch (e) {
    console.log(e.message);
  }
}

scopeExample();

// IIFE — Immediately Invoked Function Expression.
// The function is wrapped in parentheses () → makes it an expression
// The trailing () invokes it immediately
(function() {
  console.log("This runs immediately!");
})();

// Arrow functon
(() => {
  console.log("IIFE with arrow function");
})();

// Why to use it ?
// - Avoid polluting global scope
// - Encapsulate code
var a = 10;

(function() {
  var a = 20; // local to IIFE
  console.log(a); // 20
})();

console.log(a); // 10

// IIFEs are less common because modules already have their own scope
// its used when you need immediate execution
const result = (function(a, b) {
  return a + b;
})(5, 10);

console.log(result); // 15
