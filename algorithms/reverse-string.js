// LEETCODE LINK => https://leetcode.com/problems/reverse-string/

// 1. Spend time understanding the problem 
//     - put the problem into your own words
//     - ASK QUESTIONS!

// Write a function that reverses a string. The input string is given as an array of characters s.
// Today not worrying about in place
// given an array of strings/characters
// return an array of strings/characters
// reverse the order of elements in the array(last should be first, first element should be last)


// 2. Write own test cases

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Input: s = ["H","a","n", " ", "n","a","h"]
// Output: ["h","a","n"," ", "n","a","H"]


// 3. Pseudocode 

// define a function called reverseString
// define parameter called s (which will be our array of characters)
// define new array as empty array
// iterate through the array (s)
//    for each element(character) in array add it to the front of a new array
// return the new array
// ['H', 'E', 'L', 'L', 'O']
// ['O', 'L', 'L','E', 'H']

// 4. Code!

function reverseString(s) {
  const newReversedArray = []

  for (let char of s) {
    newReversedArray.unshift(char)
  }

  return newReversedArray
}

// 5. Refactor (make code readable, variables make sense)
// 6. Optimize