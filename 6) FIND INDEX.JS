let arr = [1, 1, 2, 3, 4, 5, 7, 3, 9];

function tell(arr, i, e) {
    if (e == arr.length) {
        return []; // Base case: return empty array when end of list is reached
    }

    let result = tell(arr, i, e + 1); // Recursive call

    if (arr[e] == i) {
        result.unshift(e); // Add index at the beginning of the result array
    }

    return result;
}

console.log(tell(arr, 3, 0)); // Output: [3, 7]
