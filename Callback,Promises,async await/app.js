///  async await  >>  promise chains >> callback hell

///synchronous//
//  code run in a perticular secquence each instroction waits for previous instroction to complete and execute

///asynchronous//

// due to synchronous program code will not execute next work due to pervious work not done ,which cause dealy in UI , in that time asynchronous program will allow you to do next work with out wait previous work to complite

// function hello(){
//     console.log("hello")
// }
// setTimeout(hello, 2000) // timeuot  2s = 2000ms  , // settimeout take callback as a function

//same work using arrow function
// console.log("hel--1")
// console.log("hel--2")
// setTimeout(() => {0-=
//     console.log("hello")
// }, 2000)
// console.log("hel--3")

/// Callback//
// A callback is a function passed as an argument to another function.

// function sum (a, b){
//     console.log (a+b);
// }
// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }
// calculator(2, 4, sum) // valid code
// calculator(2, 4,(a,b)=>{    // using arrow function
//     console.log(a+b)
// })

/// Callback Hell//

// Nested callback stacked below one another forming like a pyramid structure. (pyramid of Doom)

// function getdata(dataid, nextdata) {
//   // take 2s
//   setTimeout(() => {
//     console.log("data", dataid);
//     if(nextdata){
//         nextdata();
//     }
//   }, 2000);
//   // console.log("data", dataid)
// }
// // this is callback Hell
// getdata(1, ()=>{
//     getdata(2, ()=>{
//         getdata(3);
//     });
// });

///// Promises///
// promises are eventual complete of task, its an Object in JS and its a solution of CallbackHell
// it hase 3 state pending, resolve(fulfilled), rejected
// .then(), .catch()
// promise.then((resolve) => {...})
// promise.catch((error) => {...})

/*
let promises = new Promises((resolve, reject)=>{...} )

resolve and reject are callback provided bt JS
*/

// let promise = new Promise((resolve, reject) =>{
// console.log("i am a promises");
// // resolve("sucess");
// reject("rejected my me")
// });

// function getdata(dataid, nextdata) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//           console.log("data", dataid);
//           resolve("sucess")
//           if(nextdata){
//               nextdata();
//           }
//         }, 7000);
//     })
// }

// function getpromise () {
//     return new Promise ((resolve, reject) => {
//         setTimeout(()=> {
//             console.log("data 1");
//             resolve("status ok");
//         }, 3000)
//     })
// };
// function getpromise1 () {
//     return new Promise ((resolve, reject) => {
//         setTimeout (() => {
//             console.log("data 2");
//             resolve("promise 1 ok");
//         }, 3000)
//     })
// };

// // console.log("1st ");
// // let pro = getpromise();
// // pro.then((res) => {
// //     console.log( res)
// //     console.log("2nd ");
// //     let pro1 = getpromise1();
// //     pro1.then((ress) => {
// //         console.log( ress)
// //     });
// // });

// // same work on it using channing of promise
// console.log("1st ");
// let pro = getpromise().then((res) => {
//     console.log( res)
//     console.log("2nd ");
//     let pro1 = getpromise1().then((ress) => {
//         console.log( ress)
//     });
// });

// //  work on using channing of promise

// function getdata(dataid) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataid);
//       resolve("sucess");
//     }, 3000);
//   });
// }
// // this is callback Hell
// getdata(1, ()=>{
//     getdata(2, ()=>{
//         getdata(3);
//     });
// });

// this is Promise chain
// let p1 = getdata(1212);
// p1.then((res) =>{
//     console.log(res)
// });

// same work shorter form
// getdata(1212).then((res) =>{
//     console.log(res);
//     getdata(222).then((res) => {
//         console.log(res);
//     })
// });

// same work shorter form
// getdata(111)
//   .then((res) => {
//     return getdata(222);
//   })
//   .then((res) => {
//     return getdata(333);
//   }).then((res) => {
//     return console.log(res)
//   });

///////    async await   ///////

// async function always return a promise.

// async function myfunc(){...}
// await  pause the execution of async function until promise complete.

// async function data (){
//     console.log("some data")
// }

// function weateher (){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("data of weather");
//             resolve("data acces")
//         }, 2000)
//     });
// };
// async function getdata(){
//     await weateher();
//     await weateher();
// }

function getdata(dataid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataid);
      resolve("sucess");
    }, 3000);
  });
}
// // async await
// async function newdata() {
//   await getdata(111);
//   await getdata(222);
//   await getdata(333);
// }
// // Promise chain
// getdata(111)
//   .then((res) => {
//     return getdata(222);
//   })
//   .then((res) => {
//     return getdata(333);
//   })
//   .then((res) => {
//     return console.log(res);
//   });
// // this is callback Hell
// getdata(111, () => {
//   getdata(222, () => {
//     getdata(333);
//   });
// });


////  IIFE : immediatly invoked function expression ////

//its a function that is called immediatly as soon as its defined.

// async await using IIFE
// (async function() {
//   await getdata(111);
//   await getdata(222);
//   await getdata(333);
// }) ();





