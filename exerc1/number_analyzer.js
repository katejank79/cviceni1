/*
Assignment Title: Number Analyzer
Objective: The objective of this assignment is to create a JavaScript program that analyzes a list of numbers and
provides various statistics using conditions and loops.
    Task Description: You are given an array of numbers. Your task is to create a JavaScript program that performs the following tasks:
    Calculate the sum of all the numbers in the array.
    Determine the highest and lowest numbers in the array.
    Count how many numbers are even and how many are odd.
    Find the average of all the numbers in the array.
    Instructions:
Create a JavaScript file named number_analyzer.js.
    Define an array named numbers containing a list of integers.
    Implement functions to perform the tasks described above. You can define separate functions for each task or combine them as per your preference.
    Use loops to iterate over the array and conditions to perform the necessary calculations.
    Ensure your program provides clear and informative output, including the calculated statistics and any relevant messages.
    Test your program with different sets of numbers to ensure it works correctly under various conditions.
    Add comments to your code to explain the purpose of each function and any complex logic.
    Example Output:
    Number Data: [10, 5, 17, 23, 8, 12]
Sum of Numbers: 75
Highest Number: 23
Lowest Number:5
Even Numbers: 3
Odd Numbers: 3
Average of Numbers: 12.5
Submission Guidelines:
    Submit your JavaScript file (number_analyzer.js).
    Make sure your code is well-commented and follows best practices for readability and efficiency.
 */


const prompt = require('prompt-sync')();

let numbers = [10, 5, 17, 23, 8, 12];

/*let end = true;
while (end) {
    let val = prompt('Vloz hodnotu do pola, ak chces skoncit zadaj hodnotu false: ');

    if (val.toLowerCase() === 'false') {
        end = false;
    } else  {
        numbers.push(parseInt(val));
    }
}
*/
//Calculate the sum of all the numbers in the array.
function sum(nums) {
    let sum = 0;
    nums.forEach((el) => {
        sum = sum + el;
    });
    return sum;
}

let summary = sum(numbers);

//Determine the highest and lowest numbers in the array.
function min(nums) {
    let min = nums[0];
    nums.forEach((el) => {
        el < min ? min = el : {};
    });

    return min;
}

function max(nums) {
    let max = nums[0];
    nums.forEach((el) => {
        el > max ? max = el : {};
    });

    return max;
}

//    Count how many numbers are even and how many are odd.
function odd(nums) {
    let oddSum = 0;
    nums.forEach((el) => {
        //oddSum = oddSum + 1 => oddSum++
        el % 2 ? oddSum++ : {}
    });

    return oddSum;
}

function even(nums) {
    let evenSum = 0;
    nums.forEach((el) => {
        //oddSum = oddSum + 1 => oddSum++
        if(el % 2 === 0) {
            evenSum++;
        }
    });
    return evenSum;
}

//    Find the average of all the numbers in the array.
function avg(sum, len) {
    return sum / len;
}

console.log(`Number Data: [${numbers}]`);
console.log(`Sum of Numbers: ${summary}`);
console.log(`Highest Number: ${max(numbers)}`);
console.log(`Lowest Number: ${min(numbers)}`);
console.log(`Even Number: ${even(numbers)}`);
console.log(`Odd Numbers: ${odd(numbers)}`);
console.log(`Average of Numbers: ${avg(summary, numbers.length)}`);