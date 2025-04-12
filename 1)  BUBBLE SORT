// Recursive bubble sort implementation
function bublesort(arr, e, i) {
    // Base case: if we've completed all passes, return the sorted array
    if (e > arr.length - 1) {
        return arr;
    }

    // If we've reached the end of one pass, move to the next pass
    if (i > arr.length - 2) {
        return bublesort(arr, e + 1, 0);
    }

    // Swap elements if the current one is greater than the next
    if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }

    // Continue to the next pair in the current pass
    return bublesort(arr, e, i + 1);
}

// Test the function
let b = bublesort([80, 5, 0, 4, 3, 82, 987, 5, 234567, 1], 0, 0);
console.log(b); // Output the sorted array
