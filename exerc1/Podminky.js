/*
7. Hard: Prime Number Checker: Write a JavaScript function that takes an integer as input and returns true if
it's a prime number and false if it's not.
8. Hard: Anagram Checker: Implement a function that takes two strings as input and returns true if they are
anagrams of each other (contain the same characters in any order) and false otherwise.
9. Advanced: Password Strength Checker: Create a function that takes a password as input and returns a strength
rating based on the following criteria:
    Weak: Less than 8 characters.
    Medium: 8 or more characters but doesn't contain both uppercase and lowercase letters.
    Strong: 8 or more characters and contains both uppercase and lowercase letters.
*/

//1. Easy: Check Even or Odd: Write a JavaScript function that takes an integer as input and returns
// "Even" if the number is even and "Odd" if it's odd.
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else  {
        return "Odd";
    }
}

console.log(checkEvenOrOdd(4));

//2. Easy: Temperature Classifier: Create a function that takes a temperature in Celsius as input and returns
// a message based on the temperature:
//     If the temperature is less than 0, return "Freezing".
//     If the temperature is between 0 and 15 (inclusive), return "Cold".
//     If the temperature is between 16 and 25 (inclusive), return "Moderate".
//     If the temperature is greater than 25, return "Hot".

function classifyTemperature(temperature) {
    if (temperature < 0) {
        return "Freezing";
    } else if (temperature >= 0 && temperature <= 15) {
        return "Cold";
    } else if (temperature >= 16 && temperature <= 25) {
        return "Moderate"
    } else {
        return  "Hot"
           }
}
console.log(classifyTemperature(20));

//3.  Medium: Validate Email Format: Write a function that takes an email address as input and returns true if
// the email address is valid based on a simple format check (e.g., it contains an "@" symbol and a domain).

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmailFormat(email) {
    return emailRegex.test(email);
}

console.log(validateEmailFormat("aaa@gmail.c"));

//4. Medium: Leap Year Checker: Create a function that takes a year as input and returns true if it's a leap
//year and false if it's not. A leap year is divisible by 4 but not by 100 unless it is also divisible by 400.

function isLeapYear(year) {
if (year % 400 === 0) {
    return true;
}
if (year % 100 === 0) {
    return false;
}
if (year % 4 === 0) {
    return true;
}
return false;
}

console.log(isLeapYear(2000));

//5. Medium: Find the Greatest Number: Write a JavaScript function that takes three numbers as input and
//returns the greatest number among them.
let numbers = [32, 42, 13]

function max(numbers) {
    let max = numbers[0];
    numbers.forEach((el) => {
        if(el > max) {
            max = el;
        }
    });
    return max;
}

//6. Hard: Palindrome Checker: Create a function that takes a string as input and returns true if the string is
// a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.
function palindrom(text) {
    let isPalindrom = true;
    for(let i = 0; i < text.length; i++){
        if(text[i] === text[text.length - 1 - i]) {
            console.log(text[i])
            console.log(text[text.length - 1 - i]);
        } else {
            isPalindrom = false
            return isPalindrom;
        }
    }
    return isPalindrom;
}

console.log(palindrom( 'jelenovipivonelej'));