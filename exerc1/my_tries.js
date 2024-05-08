
const prompt = require('prompt-sync')();

let numbers = [];

let end = true;
while (end) {
    let val = prompt('Vloz hodnotu do pola, ak chces skoncit zadaj hodnotu false: ');

    if (val.toLowerCase() === 'false') {
        end = false;
    } else  {
        numbers.push(parseInt(val));
    }
}

function sum(nums) {
    let sum = 0;
    nums.forEach((el) => {
        sum = sum + el;
    });
    return sum;
}

let summary = sum(numbers);

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

