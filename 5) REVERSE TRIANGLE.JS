function printPattern(rows, stars = 0) {
    if (rows === 0) return; // Base case: Stop when rows reach 0
  
    if (stars < rows) {
      process.stdout.write("*"); // Print a star without a new line
      printPattern(rows, stars + 1); // Recursive call to print more stars in the same row
    } else {
      console.log(""); // Move to the next line
      printPattern(rows - 1, 0); // Recursive call for the next row
    }
  }
  
  // Call the function
  printPattern(4);
  