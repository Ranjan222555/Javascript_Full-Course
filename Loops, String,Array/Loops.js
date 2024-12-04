// //for Loop  story//

// loops are used to execute a code again and agnain
//type of loops are For loop, While loop, Do-while loop, For-of loop, For-in loop

//for Loop

// for(let i =1; i <=5 ; i++){
//   console.log("ranjan")
// }
// console.log("loop ended")

// 1st statement is initilization (let i =1;)
//2nd statement is stoping condition (i<=5;)
//3rd statement is updation i++

// Calculate sum of 1 to n
// let sum = 0;
// let n = 6
// for (let i = 1; i<=n;i++){
//   sum = sum +i;
// }
// console.log(sum)

// for (let i = 1; i <= 5; i++){
//   console.log("i = ",i)
// }

// While loops
/*
while (condition ){
  do some work
}*/

//1st initialization work do before while
//2nd updation work after print  inside the code

// let i =  1
// while (i <= 5){
//   console.log("i = ", i)
//   i++;
// }

// Do while loop
/* 
do{
// do some work
} while(condition) */

// let i = 1;
// do{
//   console.log("i= ", i)
//   i++;
// }while (i <=5 );

//for of Loop
// used only in string and array
//syntask
/*
for(let value of strValue){
do some work
}*/

// let valu = ("Ranjan kumar")

// for ( let i of valu){          // iterate each charater
//   console.log("i =", i)
// }

//for in Loop
// used in objects
//syntask
/*
for(let key in strValue){
do some work
}*/

// let student = {
//   nameof : "Ranjan",
//   age : 24,
//   lan : "javascript",
//   ispass : true,
//   cls : "b.tech"
// }
// for (let i in student){
//   console.log("Key= ",i,"  value= ",student[i])
// }

//problems
// 1. print all the even numbers 0-100
//even numbers
// for (let i =0; i<=100; i++){
//   if ( i % 2===0 ){       // of odd numbers (i %2 !==0)
//     console.log(i)
//   }
// }

//2. craete a game of guessing numbers ask numbers untill its correct

// let gamenum = 11;  // if this number is string then use "!=="
// let usernum=  prompt("enter any numbers: ");

// while (usernum != gamenum ){      // prompt retun string only so dont use "!==" use "!=" this
//   usernum=  prompt("You enter wrong numbers: ");
// }

// console.log("congrats its a right number")

///// STRINGS////
/// strings are immutable means you cant change

//string are sequence of charaters used to re prasent in text

// create string
// let str = "ranjan";
// let str2= 'kumar';

// string length
// str.length

//string index
//str[0]

// template Literals //
//a way to have embedded expression in string means add some place holder
//escape charaters in string  "\n" and "\t"
// next line in string use "\n" and for ta tab space use "\t"

// let product={
//   nameof : "pen",
//   price : 10
// }
// console.log("name is ",product.nameof, "price is ",product.price )
// //same work here
// console.log(`name is ${product.nameof} \t and price is ${product.price}`)  // \t use for string tab space
// //same work here
// let output = `name is ${product.nameof} \n and price is ${product.price}` // \n use for string new line
// console.log(output)

// let specialstring = `this is a template literals string`
// console.log(typeof specialstring)

//// string methods ///
// in-built function there to manipulate a string

//str.toUppercase() is use for upper case of string
//str.to Lowercase() is use for Lower case of string
//str.trim() is use for remove of string
//str.slice(start, end) is use for return part of string

//problems
//1. create a prompt to user input condition is start with "@" and full name and last length of name

// let username = prompt("Enter your name: ")
// console.log(`Your user name is @${username}${username.length} `)

// // same work here
// let newname = "@"+ username + username.length
// console.log(newname)

////Arrays////
//arrays are muitable
// collection of item
//index matters in this

// let marks = [89, 65, 57, 66, 22];
// console.log(marks);

//Looping over an Array
// let hero = ["tony", "thor", "iron man", "captain", "wanda"]
// console.log(hero)

//for Loop
// for(let i =0; i < hero.length; i++){
//   console.log(hero[i])
// }

// For-of Loop
// for (let i of hero){
//   console.log(i)
// }

//problems
//1. fine the average marks of the class , marks of student is [87, 65, 99, 27, 57, 76]

// let marks = [87, 65, 99, 27, 57, 76];
// let sum = 0
// for(let i of marks){
// sum += i
// }
// let avg = sum / marks.length ;
// console.log(`average marks of class is ${avg}`)

//2. price of a item is [566, 667, 677, 999, 216, 260], all item have 10% off  give a final price after off

// let price = [566, 667, 677, 999, 216, 260]
//for of loops
// let i = 0
// for(let valu of price){
// let offer = valu / 10
// price[i] = price[i] - offer
// console.log(price[i])
// i++
// }

//for Loops
// for (let i =0; i < price.length;i++){
//   let offer = price[i] /10;
//   price[i] -= offer;
// }
// console.log(price)


//// Arrays methods////

// let food = ["mango", "apple"]

// push()  add in end
// pop()  delete from end and return
// tostring() converts array to string 
//concat() add 2 array ane return new array

/////slice() method 
// return a pice of that array
// slice(start index, end index)

/////splice() method
//change original array (add, remove, replace)
//splice(start index, delCount, newElement)

// let num = [21, 32, 33, 322, 94, 83, 456, 66]

// console.log(num.slice(2, 5))  //33, 322,94
// console.log(num.splice(3,2,100))  // 322, 94s
// console.log(num)

//add element 
// num.splice(2, 0, 300)  // 33,300,322

//remove element
// num.splice(3, 1)        // 322 removed

//replace element
// num.splice(7, 1, 500)     // 500 replace in the place of 66  

// num.splice(2) //if u pass only one element then rest all are removed like a slice method 


//problems
//1. create an  array of companys and apply method on it like add,remove,replace

// let companys= ["amazon", "flipkart", "ola", "zomato", "cred", "olx"]
// console.log(companys)
// remove 1st company
// companys.shift(0,1)
// companys.splice(0,1)

// remove ola add uber
// companys.splice(2,1,"Uber")

//add phonepe to the end
// companys.splice(6, 0,"phonepe")
// companys.push("phonepe")





//// Harry///

// let a= 1

// for (let i = 0; i <10; i++){
//   console.log(a+i)
// }

//for in loop

// let obj = {
//   "name" : "ranjan",
//   "company": "multinational",
//   "salary":1300000,
// }

// for(let i in obj){
//   console.log(i)
// }