function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word);
  return word === reversedWord;
}

/* 
  Add your pseudocode here
*/
function reverseString(word) {
  return word.split("").reverse().join("");
}
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
// Run the extended test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("deified"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("rotor"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("world"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("apple"));
}


module.exports = isPalindrome;
