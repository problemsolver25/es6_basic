
console.log(" === Create a JavaScript Promise with resolve, reject, then and catch === ");
// A promise in JavaScript is exactly what it sounds like 
// - you use it to make a promise to do something, usually asynchronously. 
// When the task completes, you either fulfill your promise or fail to do so. 

// Promise is a constructor function, so you need to use the new keyword to create one. 
// It takes a function, as its argument, with two parameters - resolve and reject. 
// These are methods used to determine the outcome of the promise. 

// A promise has three states: pending, fulfilled, and rejected. 
// Below promise is forever stuck in the pending state because you did not add a way to complete the promise. 
// The resolve and reject parameters given to the promise argument are used to do this. 
// resolve is used when you want your promise to succeed, and 
// reject is used when you want it to fail. 

//const myPromise = new Promise((resolve, reject) => {
//});

// Handle a Fulfilled Promise with then
// Promises are most useful when you have a process that takes an unknown amount of time in your code 
// (i.e. something asynchronous), often a server request. 
// When you make a server request it takes some amount of time, and 
// after it completes you usually want to do something with the response from the server. 
// This can be achieved by using the then method.

// Promise.prototype.then(onFulfilled, onRejected)
// The then method schedules callback functions for the eventual completion of a Promise 
// - either fulfillment or rejection. One of the onFulfilled and onRejected handlers will be executed 
// to handle the current promise's fulfillment or rejection. 
// When the promise is fulfilled with resolve the onFulfilled handler is called.

// myPromise.then(result => {
  
// });
// result comes from the argument given to the resolve method.

// Handle a Rejected Promise with catch
// catch is the method used when your promise has been rejected. 
// It is executed immediately after a promise's reject method is called. 

// myPromise.catch(error => {
  
// });
// error is the argument passed in to the reject method.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("resolve(): ","We got the data");
  } else {  
    reject("reject(): ","Data not received");
  }
});

makeServerRequest.then(result => {
  console.log("Prmise then: ",result);
});

makeServerRequest.catch(error => {
  console.log("Promise catch: ", error);
});

console.log(" === async/await === ");
// The async function declaration defines an asynchronous function, 
// which returns an AsyncFunction object. 
// An async function is a function declared with the async keyword, 
// and the await keyword is permitted within them. 
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, 
// avoiding the need to explicitly configure promise chains.

// async/await makes asynchronous code look synchronous → easier to read, write, and debug.
// It prevents “callback hell” or messy .then().then().catch() chains.
// Cleaner error handling with try...catch.

// Here is a simple example of an async function:
async function fetchData() {
  return "Hello async/await";
}
fetchData().then(console.log);

console.log(" === async/await with a fake API call === ");
// Example: async/await with a fake API call
function fakeApiRequest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ Data received from API");
    }, 200); // 0.2 second delay
  });
}

async function getData() {
  console.log("⏳ Fetching data from fake API request...");
  const result = await fakeApiRequest();  // wait for promise to resolve
  console.log(result);
  console.log("🎉 Done!");
}
console.log("called async getData()");
getData();

console.log(" === async/await with error handling === ");
// Example: async/await with error handling
// In the previous example, there was no way for the fakeApiRequest() function to fail. 
// Let's add error handling to the getData() function using try...catch.

function fetchData1() {
  return Promise.resolve("Data loaded");
}

fetchData1()
  .then(result => console.log(result))
  .catch(error => console.error(error));

async function loadData() {
  try {
    const result = await fetchData1();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

console.log("called async loadData()");
loadData();

// ⏳ Synchronous vs Asynchronous
// Synchronous (normal) code
// Runs one line at a time in order.
// Each line waits for the previous one to finish.
// If one line takes a long time, everything after it is blocked.

// Asynchronous code
// Some operations (like fetching data, reading a file, timers) can take a long time.
// Instead of blocking the whole program, JavaScript sets them aside and keeps running the rest of the code.
// When the long task is finished, its result is handled later (in the future).
// This is done with callbacks, promises, or async/await.