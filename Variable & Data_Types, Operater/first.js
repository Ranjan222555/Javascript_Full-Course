/*
 console.log("hi there");
 console.log("Ranjan");
 console.log("Javascript");
 console.log("python");
*/

// varibles
// variable are contaner to store the data

// age = 24;
// name_of = "ranjan";
// a= null;           /* null means know what inside but its blank    */
// b = undefined;      /* undefined means dont no what inside    */

// console.log("age")     /* output "age"   */
// console.log(age)        /* output 24   */
// console.log(name_of)     /* output ranjan   */
// console.log(a)            /* output null   */
// console.log(b)            /* output undefind   */

// Boolean Data Types
// true, false

// a = true;
// b = false;
// console.log(b, a)            /* output false true   */

// Dynamically Type means you have to choose what u want to store
// in Javascript dont want to say what u store u can store anythings
//   "=" assign operator

// full_names = "heloo";

// variables  var, let, const
// introduce ES6 in 2015 as let, const

// let names = "ranjan";
// let age = "24";
// let number = 23.32

// console.log(names)
// console.log(age)
// console.log(number)

/*
var-  it can re-declared and update, its a global scope
let- it can re-declared but can be update, its a block scope
const- it cannot re-declared or update, its a block scope
*/

//  "{}" its a block

// DATA TYPES
//  number, string, boolean, undefind, null, Bigint, symbol

// primitive (7)                     non primitive
// number,                              Object      /* object it means collection of value   kye:value pare */
// string,                             (array, function)
// boolean,
// undefind,
// null,
// Bigint,
// symbol

// let age = true
// let pname = "ranjan"

// object

// const studend = {
//     Fullname : "ranjan",
//     age : 24,
//     clg : "ugie",
//     city : "bls",
// };

// studend["Fullname"] = "ranjan kumar"

// console.log(studend[age])    its a wrong
// console.log(studend["age"])  its right
// console.log(studend.age)    its right

// problems
//  1. create a const object called product store some information

// const product={
//     pen_name :"parker pen",
//     reting : 4,
//     price : 270,
//     offer : 5 ,
//     isdeal : true,
// };

// console.log(product);

//  2. create a const object called profile store some information

// const profile = {
//     P_name : "Ranjan Kumar Majhi",
//     post : 194,
//     followers : 556,
//     following : 3,
//     isfollow : true,
//     message : false,
//     idname : "RanjanInsta",
//     description : "Devloper",
// };
// console.log(profile)
// console.log(typeof profile)
// console.log(typeof profile["followers"])

//  operater

// comments

// this is a single line comment

/*
this
is a 
multiline 
comments
*/

// Artimetic operaters  +, -, *, /

// "%" means remaining item after devide
// "**" means a to the power b means 20^6 = 20*20*20*20*20*20

// let a = 20
// let b = 6
// c = a+b

// console.log(a+b)
// console.log("a+b=", a+b)
// console.log("a+b=",c)
// console.log(a-b)
// console.log(a*b)
// console.log("^", a^b)
// console.log(a/b)
// console.log("%", a%b)
// console.log("**", a**b)

// Unary operater

// increment ++
// decrement --

// a++ means  a= a+1
// a-- means a= a-1

// a= 4
// b= 3

// a = a+1 // out put 5
// a++ means post
// ++a means pre

// console.log(a++) //4
// console.log(a) //5
// console.log(++a) //6

// assign operater
//  "=", "+=", "-=", "*=", "**=", "%=",

// a +=1 means a=a+1

// a += 2; // a = a + 2
// console.log(a)  // output 6

// comparison operater
// "==" means equal to, "!=" means not equal to, "===" means equal to & type(strict), "!==" means not equal to & type , "<", ">", "<=", ">=",

// let a = 29
// let b = "29"
// let c = 40

// console.log(a==c)  // false
// console.log(a!=c)   // true
// console.log(a===b)   // false

// logical operater
// "&&" means logical AND , "||"means logical OR, "!" means logical NOT

// let a = 10
// let b = 9

// let con1 = a > b;// true
// let con2 = a===10;// true
// console.log(con1 && con2) // true
// console.log(con1 || con2)
// console.log(!(a<b)) // true

// conditional statement
// means to implement some condition inn the code

// let mode = "light"
// let color;
// if ( mode=== "dark"){
//     color = "black"
// }
// if (mode === "light"){
//     color = "white"
// }
// console.log(color)

// IF ELSE statement

//

// let age = 19;
// if (age >= 18) {
//   console.log("you can vote");
// } else console.log("you can not vote");

//

// let mode = "dark";
// let color
// if (mode === "dark") {
//   color = "black";
// } else {
//   color = "white";
// }
// console.log(color);


// Odd and even

// let num = 9;

// if (num % 2 === 0){
//     console.log("even");
// } else{
//     console.log("odd");
// }


//  ELSE IF statement

// age = 11

// if (age < 18) {
//   console.log("junior");
// } else if (age > 60){
//     console.log("senior");
// }else {
//     console.log("middle");
// }

// ternary operater
// condition ? true input : false output

// let age = 17
// let result = age >= 18 ? "adult" : "not adult"   // simple IF ELSE 
// console.log(result)

//problems 
//1. get user input using  prompt ("enter number: ") check multification of 5 or not 


// let pro = prompt("Enter a number: ")
//  if (pro % 5 === 0){
//     console.log(pro," is yes multiplay by 5")
//  }else {
//     console.log(pro," is not a valid number")
//  }

// 2. write a code to give a  grade to studends 
// like 90-100 is A,80-90 is B,70-80 is C,60-70 is D 

// let grade = prompt("enter your number: ")
// if (grade >=90 && grade <=100 ){
//     console.log("Grade is A")
// }else if (grade >=80 && grade <=90 ){
//     console.log("Grade is B")
// }else if (grade >=70 && grade <=80 ){
//     console.log("Grade is C")
// }else if (grade >=60 && grade <=70 ){
//     console.log("Grade is D")
// }else if (grade >=50 && grade <=60 ){
//     console.log("Grade is E")
// }else if (grade >=40 && grade <=50 ){
//     console.log("Grade is F")
// }else if (grade >=30 && grade <=40 ){
//     console.log("Grade is G")
// }else{console.log("You are failed!")}





///harry///

// let emp = {
//     nameof : "ranjan",
//     "salary" : 12000000,

// }
// console.log(emp)

// emp.salary = 1300000
// console.log(emp)

// console.log("hello")

// let age = 17
// let grace =2

// console.log(age += grace)

// if( age  >18){
//     console.log("you can drive")
// }else{
//     console.log("you cant drive")
// }