let a=5;
let b=10;
let c=a+b;
console.log(c);

let str="hello";
console.log(str);

let arr=[1,2,3,4,5];
console.log(arr);

let obj={name:"John", age:30};
console.log(obj);


function greet(name){
    return "Hello, " + name;
}
console.log(greet("Alice"));

let isTrue=true;
console.log(isTrue);

let num=15;
if(num%2===0){
    console.log(num + " is even");
}else{
    console.log(num + " is odd");
}

for(let i=1; i<=5; i++){
    console.log(i);
}

let sum=0;
for(let i=1; i<=100; i++){
    sum+=i;
}
console.log("Sum of first 100 natural numbers: " + sum);

let factorial=1;
for(let i=1; i<=5; i++){
    factorial*=i;
}
console.log("Factorial of 5: " + factorial);