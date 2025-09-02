let car = ["AUDI" , "BMW" , "XUV" , "TATA"];
if(car.length > 3){
    console.log("Array has more than 3 elements");
}
console.log("Car length: ", car.length);
let size = car.length;
while(size >= 0){
    console.log(car[size]);
    size--;
}