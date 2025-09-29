### Install & Run
`npm install -g http-server`

`http-server`

## Concept Covered:

- Block vs function scope (`let` vs `var`)
- `const` and mutability + `Object.freeze`
- Arrow functions (with and without params, implicit return)
- Default parameters
- Rest parameter (`...args`)
- Spread operator (`...array`)
- Array & object destructuring (including nested + renaming)
- Swapping with destructuring
- Object property shorthand & computed props
- Concise method syntax in objects
- Symbols
- Iteration (`for...of`, `Map`, `Set`)
- `Object.assign`
- Template literals (multi-line, interpolation, expression embedding)
- Classes (`class`, `constructors`, `methods`)
- Getters and setters (`private & public properties`)
- Promises (`new Promise`, `then`, `catch`)
- `async`/`await`
- Modules (`import`/`export`)

## 
- Fundamental programming concepts in JavaScript.
- Working with `arrays`, `objects`, `functions`, `loops`, `if/else statements`, and more.
- **Basic data structures** such as numbers and strings; understanding the differences between arrays and objects; using JavaScript methods like `splice()` and `Object.keys()` to access and manipulate data.
- **Modern JavaScript features**, including `arrow functions`, `destructuring`, `classes`, `promises`, `await/async` and `modules`.
- **Regular Expressions:** using special characters, capture groups, positive and negative lookaheads, and other techniques to match text patterns.
- **Debugging:** learning the process of reviewing code, identifying issues, and fixing them effectively.
- **Algorithmic thinking:** writing efficient algorithms - a series of step-by-step instructions to solve problems, by breaking problems into smaller parts and carefully planning solutions in code.
- **Object-Oriented Programming (OOP):** organizing code using objects and classes to describe entities and their behaviors, including the use of `this`, `prototype chains`, `constructors`, and `inheritance`.
- **Functional Programming:** structuring code into smaller, reusable functions that can be combined to build complex programs; includes pure functions, avoiding mutations, and writing cleaner code with methods like `.map()` and `.filter()`.
- **Intermediate Algorithm Scripting:** building on algorithmic thinking with OOP and Functional Programming concepts to solve more advanced problems.

### Programming Paradigms: Declarative vs Imperative

## 1. Imperative Programming

**Definition:**  
Imperative programming focuses on **how** to perform tasks step by step. You tell the computer *exactly what to do* and *how to do it*.  

**Key idea:** “Do this, then that, then that…”

**Example (JavaScript):**

```javascript
// Imperative: How to double numbers
const numbers = [1, 2, 3, 4];
let doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
console.log(doubled); // [2, 4, 6, 8]
```

## 2. Declarative Programming

**Definition:**  
Declarative programming focuses on **what** you want, not how to achieve it. You describe the desired result and let the language handle the steps.

**Key idea:** “I want this result, do whatever it takes…”

**Example (JavaScript):**

```javascript
// Declarative: What you want
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]
```

## Comparison 

| Feature    | Imperative Programming  | Declarative Programming          |
| ---------- | ------------ | -------------------------------- |
| Focus      | How to do it | What to do                       |
| Example    | `for` loops  | `.map()`, `.filter()`, SQL, HTML |
| Complexity | More verbose | Concise, higher-level            |
| Control    | Full, fine-grained control over each step | Abstracted execution             |
| Performance| Often faster or more memory-efficient for critical code | Makes code clearer, safer, and more maintainable. |
| Summary    | “Do this, then this, then this.” | “I want this result.” |

