"use strict";

// Function 1: Find the Number of Digits in an Argument
function _findNumOfDigits(arg) {
    if (typeof arg === 'number') {
        return String(arg).replace(/[^0-9]/g, '').length;
    } else if (typeof arg === 'string') {
        return arg.replace(/[^0-9]/g, '').length;
    } else {
        return 0;
    }
}

// Function 2: Surplus Function
function _surplus(length) {
    return function checkSurplus(str) {
        return str.length > length;
    }
}

// Function 3: Strings with Numbers
function _strNumbers(array) {
    return array.filter(str => /\d/.test(str));
}

// Function 4: Class Grading
function _determineClassGrading(array) {
    let passing = array.filter(grade => grade >= 50).length;
    let failing = array.length - passing;
    let average = array.reduce((total, grade) => total + grade, 0) / array.length;
    average = Math.round(average * 10) / 10; // rounding to 1 decimal point
    return [passing, failing, average];
}

// Function 5: Move Capital Letters
const _moveCapitalLetters = (str) => {
    let capital = '';
    let lowercase = '';
    for (let char of str) {
        if (char === char.toUpperCase()) {
            capital += char;
        } else {
            lowercase += char;
        }
    }
    return capital + lowercase;
}

// test case for is surplus
const isSurplus = _surplus(5); // Check for surplus strings longer than 5 characters
console.log(isSurplus("apple")); // Output: false
console.log(isSurplus("banana")); // Output: true