// Function to print palindrome number pattern
function printPalindromePattern(rows) {
    // Pattern 1: Increasing palindrome
    console.log("Pattern 1:");
    for(let i = 1; i <= rows; i++) {
        let pattern = '';
        // Print numbers in increasing order
        for(let j = 1; j <= i; j++) {
            pattern += j;
        }
        // Print numbers in decreasing order
        for(let j = i - 1; j >= 1; j--) {
            pattern += j;
        }
        console.log(pattern);
    }

    // Pattern 2: Number palindrome pyramid
    console.log("\nPattern 2:");
    for(let i = 1; i <= rows; i++) {
        let pattern = '';
        // Add spaces
        for(let s = 1; s <= rows - i; s++) {
            pattern += ' ';
        }
        // Print first half
        for(let j = 1; j <= i; j++) {
            pattern += j;
        }
        // Print second half
        for(let j = i - 1; j >= 1; j--) {
            pattern += j;
        }
        console.log(pattern);
    }
}

// Test the patterns
printPalindromePattern(5);