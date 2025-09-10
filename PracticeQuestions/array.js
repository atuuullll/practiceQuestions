let array = [1, 2, 3, 4, 5];
console.log(array);

let newArray = array.map(x => x * 2);
console.log(newArray);

let filteredArray = newArray.filter(x => x > 5);
console.log(filteredArray);

let sum = filteredArray.reduce((acc, val) => acc + val, 0);
console.log(sum);