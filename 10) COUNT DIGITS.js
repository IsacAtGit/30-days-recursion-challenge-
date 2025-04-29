function countDigits(n) {
if (n <= 0) throw new Error("Input must be a positive integer");
return Math.floor(Math.log10(n)) + 1;
}

// Example usage:
console.log(countDigits(1000)); // Output: 4
console.log(countDigits(345));  // Output: 3
console.log(countDigits(9));    // Output: 1
