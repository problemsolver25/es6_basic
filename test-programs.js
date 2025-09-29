

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