function insertionSort(arr, i, c) {
    // Base case: if the current pointer c has reached the end of the array, return the sorted array
    if (c > arr.length) {
        return arr;
    }

    // Case 1: We're at the beginning of the array and need to swap if arr[c] is smaller than arr[i]
    if (i <= 0 && arr[c] < arr[i]) {
        // Swap arr[0] and arr[1]
        let tem = arr[0];
        arr[0] = arr[1];
        arr[1] = tem;

        // Move to the next unsorted element
        return insertionSort(arr, c, c + 1);
    }

    // Case 2: arr[c] is smaller than arr[i], and i is not at the beginning
    if (arr[c] < arr[i]) {
        // Swap arr[i] and arr[c] to move the smaller element left
        let temp = arr[i];
        arr[i] = arr[c];
        arr[c] = temp;

        // Continue comparing with the previous element to place arr[c] correctly
        return insertionSort(arr, i - 1, i);
    } else {
        // Case 3: arr[c] is in the correct position, move to the next unsorted element
        return insertionSort(arr, c, c + 1);
    }
}

// Test the function
let a = insertionSort([2, 1, 3, 4, 0], 0, 1);
console.log(a); // Output: [0, 1, 2, 3, 4]
