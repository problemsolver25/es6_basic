import add from "./export-default-math-functions.js";
import hello, { uppercaseString , lowercaseString  } from './export-string-functions.js';
import * as mathFunctions from "./export-math-functions.js";

console.log(" === Import a Default Export === ")
console.log("add()", add(7,4));

// To import a default export, 
// In the following example, add is the default export of the export_default_math_functions.js file. Here is how to import it:
// The syntax differs in one key place. 
// The imported value, add, is not surrounded by curly braces ({}). 
// add here is simply a variable name for whatever the default export of the export_default_math_functions.js file is. 
// You can use any name here when importing a default.

console.log(" === Reuse JavaScript Code Using import === ")
const up  = uppercaseString("hello");
const low = lowercaseString("WORLD!");
const hi  = hello("SS!");
console.log("uppercaseString('hello'): " + up);
console.log("lowercaseString('WORLD!'): " + low);
console.log("hello('SS!'): " + hi);

// import allows you to choose which parts of a file or module to load. 
// Here, import will find uppercaseString in export_string_functions.js, 
// import just that function for you to use, and ignore the rest. 
// The ./ tells the import to look for the export_string_functions.js file in the same folder as the current file. 
// The relative file path (./) and file extension (.js) are required when using import in this way.

// You can import more than one item from the file by adding them in the import statement like this:
// import { uppercaseString, lowercaseString } from "./string_functions.js";

console.log(" === Use * to Import Everything from a File === ");
// we are importing all of the file contents from current directory into the current file. 
// This can be done with the import * as syntax. 
// The above import statement will create an object called mathFunctions. 
// This is just a variable name, you can name it anything. 
// The object will contain all of the exports from export_math_functions.js in it, 
// so you can access the functions like you would any other object property. 
// Here's how you can use the add and subtract functions that were imported:
const div1 = mathFunctions.divide(3, 1);
const sub1  = mathFunctions.substract(3, 2);

console.log("mathFunctions.divide(3, 1): " + div1);
console.log("mathFunctions.substract(3, 2): " + sub1);