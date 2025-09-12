let array = [1, 2, 3, 4, 5];
console.log(array);

let newArray = array.map(x => x * 2);
console.log(newArray);

let filteredArray = newArray.filter(x => x > 5);
console.log(filteredArray);

let sum = filteredArray.reduce((acc, val) => acc + val, 0);
console.log(sum);

prompt("This is an array practice file.");

let names = ["Alice", "Bob", "Charlie"];
names.forEach(name => console.log(name));

// Function to find the maximum value in an array
function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax(array));

// Function to find the minimum value in an array
function findMin(arr) {
    return Math.min(...arr);
}

console.log(findMin(array));

// Function to sort an array in ascending order
function sortArrayAsc(arr) {
    return arr.slice().sort((a, b) => a - b);
}

console.log(sortArrayAsc(array));

// Function to sort an array in descending order
function sortArrayDesc(arr) {
    return arr.slice().sort((a, b) => b - a);
}

console.log(sortArrayDesc(array));

// Function to find the average of an array
function findAverage(arr) {
    let total = arr.reduce((acc, val) => acc + val, 0);
    return total / arr.length;
}

console.log(findAverage(array));

// Function to remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arrayWithDuplicates));

// Function to flatten a nested array
function flattenArray(nestedArr) {
    return nestedArr.flat();
}

let nestedArray = [1, [2, 3], [4, [5]]];
console.log(flattenArray(nestedArray));

// Function to chunk an array into smaller arrays of a specified size
function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

console.log(chunkArray(array, 2));

// Function to find the index of a specific value in an array
function findIndex(arr, value) {
    return arr.indexOf(value);
}

console.log(findIndex(array, 3));
console.log(findIndex(array, 6));

// Function to check if an array contains a specific value
function containsValue(arr, value) {
    return arr.includes(value);
}

console.log(containsValue(array, 3));
console.log(containsValue(array, 6));

// Function to reverse an array
function reverseArray(arr) {
    return arr.slice().reverse();
}

console.log(reverseArray(array));

// Function to concatenate two arrays
function concatenateArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

let anotherArray = [6, 7, 8];
console.log(concatenateArrays(array, anotherArray));