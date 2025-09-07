// let num=5;
// while(num<=10){
//     console.log(num);
//     num++;
// }

// let car = ["AUDI" , "BMW" , "XUV" , "TATA"];
// let i=0;
// while(i<car.length){
//     console.log(car[i]);
//     i++;
// }

let num=1;
let sum=0;
while(num<=10){
    sum=sum+num;
    num++;
}
console.log(sum);

let n=5;
let factorial=1;
while(n>=1){
    factorial=factorial*n;
    n--;
}
console.log(factorial);

let number=10;
let isPrime=true;
let j=2;
while(j<number){
    if(number%j==0){
        isPrime=false;
        break;
    }
    j++;
}
if(isPrime){
    console.log("prime");
}else{
    console.log("not prime");
}