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