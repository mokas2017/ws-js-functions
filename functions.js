//////////////////////////////
// String Manipulation
//////////////////////////////

// Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Count characters in a string
function countCharacters(str) {
    return str.length;
}

// Capitalize the first letter of each word
function capitalizeWords(sentence) {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

//////////////////////////////
// Array Functions
//////////////////////////////

// Find maximum value in an array
function findMax(arr) {
    return Math.max(...arr);
}

// Find minimum value in an array
function findMin(arr) {
    return Math.min(...arr);
}

// Sum of array elements
function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// Filter array based on a condition function
function filterArray(arr, condition) {
    return arr.filter(condition);
}

//////////////////////////////
// Mathematical Functions
//////////////////////////////

// Factorial of a number
function factorial(n) {
    if (n < 0) return undefined; // Factorial undefined for negative numbers
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Generate Fibonacci sequence up to n terms
function fibonacci(n) {
    const seq = [];
    if (n <= 0) return seq;
    seq.push(0);
    if (n === 1) return seq;
    seq.push(1);
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq;
}

//////////////////////////////
// Example Usage
//////////////////////////////

console.log(reverseString("hello"));            // "olleh"
console.log(countCharacters("hello world"));    // 11
console.log(capitalizeWords("hello world"));    // "Hello World"
console.log(findMax([1, 5, 3, 9]));            // 9
console.log(findMin([1, 5, 3, 9]));            // 1
console.log(sumArray([1, 2, 3, 4]));           // 10
console.log(filterArray([1, 2, 3, 4, 5], x => x % 2 === 0)); // [2,4]
console.log(factorial(5));                     // 120
console.log(isPrime(7));                       // true
console.log(fibonacci(7));                     // [0,1,1,2,3,5,8]
