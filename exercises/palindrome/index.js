// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1: split, reverse, join string and compare to original string
// function palindrome(str) {
//     const reversed = str.split("").reverse().join("")
//     return str === reversed;
// }

// Solution 2: Use array method "every()" to check if each character's corresponding character matches
// Note: This isnt the most efficient solution since it checks both halves of the string, it only really needs to check half
function palindrome(str) {
    const checkCharacter = str.split("").every((char, index) => char === str[(str.length - index) - 1]);
    return checkCharacter;
}

module.exports = palindrome;
