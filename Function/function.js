//// Function ////

//to minimize a redundancy means repeat work in the code
//block of code that perform a specific task ,can be invoked when u call or when you need just call
// 1st is function defination and function call

// function firstname(){
//     console.log("i love javascriopt");
//     console.log("love to relearn");
// }
// firstname()

// function firstname(msg){  // argument pass in fun. or parameter , menas input veriable
//     console.log(msg);
// }
// firstname("learing js") // argument

//sum of 2 numbers
// function sum(x,y){
//     console.log(x+y);
// }

// use return
// function sum(x,y){ // function parameters are like local variable of function means its a block scop{}
//     s= x+y;
//     return s;
// }
// let val = sum(100, 200)
// console.log(val)

////Arrow Function///
// its a shorter syntax of an Arrow function means compact way to write function

// function sum(a,b){
//     return a+b;
// }
// // using arrow function
//  const arrowsum = (a,b) =>{
//         return a+b ;
// }

// // multificacion using  function
// function multificacion(a,b){
//     return a*b ;
// }
// console.log(multificacion(10, 5))

// // multificacion using arrow function
// const multificacion = (a,b) =>{
//     return a*b ;
// }
// console.log(multificacion(10, 20))

// problems
//1. create a function take a string as a argument return number of vowels in the string

// function vowels(str) {
//   let num = 0;
//   for (let i of str) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//       num++;
//     }
//   }
//   return num;
// }
// console.log(vowels("ranjani"))

//2. create arrow function do same work
// const vowels = (str) =>{
//   let num = 0;
//   for (let i of str) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//       num++;
//     }
//   }
//   return num;
// }
// console.log(vowels("ranjani"))

/// for Each loop  in array///

// in for each  Loop 3 parameter are there in build "value", "index","array"
// arr.forEach(value, index, array)

// array.forEach(call back function)
//callback function : its a function to execute for each element of an array
//defination : a callback is a funtion which passed as an argument to anither function.

//// Higher Order Function////
/// Defination : either use another function as a parameter or return any function
/// each and every callback funtion is a Higher Order Function

//syntax
/* arr.forEach((val) =>{
console.log(val);
})
*/

// let arr = [1,2,3,34,68]

// arr.forEach(function print(value){  // value at each index
// console.log(value)
// })

//same work using arrow function
// arr.forEach ((value, aaa, aou)=> { // in for each 3 parameter are there in build "value", "index","array"
//     console.log(value, aaa, aou)
// })

///problems
//1. given an array  , pring square of each value using forEach loop

//using function
// let arr = [4, 20, 33, 10, 8, 6, 120]
// arr.forEach(function square(value){
// console.log(value*value)    // value**2
// })

// using arrow function
// arr.forEach((value)=>{
// console.log(value**2)  // other option is (value*value) or (value**2)
// })

/// other way ///
// let square =(arr) => {
//     console.log(arr*arr)
// };
// arr.forEach(square)

////array method ///
/// map methods
/// map function create a new array with result of some operation

///syntask

/*
arr.map(callbackfan(value, index, array))

let newarray = arr.map((val) =>{
    return val;
    })
*/

// let arr = [4, 20, 33, 10, 8, 6, 120]

// arr.map((value) => {
// console.log(value)
// });

// let newarray = arr.map((value)=>{
//     return value ;
// });
// console.log(newarray)

///filter method///
//create a new array of element that give true for a condition
/// syntax for filter even number
/*
let newarr = arr.filter((val) =>{
    return val % 2===0
    })
*/

// let arr = [4, 20, 33, 10, 8, 6,15, 39, 120]

//  let newarr =arr.filter((value)=>{
//     return value%2===0;
// })
// console.log(newarr)

/// reduce method///
//performe some operation and reduce the array to a single value, it return a single value

// let arr = [4, 20, 33, 10, 8, 6,15, 39, 120]

// let newarray = arr.reduce((pre, curr) =>{
//     return pre +curr;
// })
// console.log(newarray)

// find the larhest number
// let newarray = arr.reduce((pre, curr) =>{
//     return pre > curr ? pre:curr;
// })
// console.log(newarray)

/// problems
// 1. given array of a marks of the student , filter out the how many 90+

// let marks = [33, 86, 98, 95, 66, 99, 90, 86, 46]
// let  newmarks = marks.filter((value)=>{
//     return value >=90;
// })
// console.log(newmarks)

//2.take a input n from a user,create array of a number from 1 to n,use reduce to sum all number and calculate product(factorial) of all numbers


// let n = prompt("Enter your number: ")
// let arr = []

// for (let i =1; i<=n;i++){
//     arr[i-1] = i;
// }
// console.log("arr=",arr)

// let sum = arr.reduce((pre, cur)=>{
//      return pre + cur;
// })
// console.log("sum=",sum)

// let product = arr.reduce((pre, cur)=>{
//      return pre * cur;
// })
// console.log("factorial=",product)

