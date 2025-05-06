function checknumber(obj, arr, index) {
// Base case: If index reaches the end of the array, return the object
if (index == arr.length) {
return obj;
}

// Check if the current element already exists in the object
if (obj.hasOwnProperty(arr[index])) {
    // If it exists, increment the count
    obj[arr[index]] += 1;
} else {
    // If it doesn't exist, initialize the count to 1
    obj[arr[index]] = 1;
}

// Move to the next index
index += 1;

// Recursive call with updated index
return checknumber(obj, arr, index);



}

// Test the function with an array of numbers
console.log(checknumber({}, [10, 5, 10, 15, 10, 5], 0));
