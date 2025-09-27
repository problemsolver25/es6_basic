console.log(" === Use export to Share a Code Block === ");

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export default (x) => `Hello, ${x}!`;

export {uppercaseString, lowercaseString};
// The above is a common way to export multiple functions.