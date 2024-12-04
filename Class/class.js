//classes///

//class is aprogram code template for createing object, those object will have some state (variable) and some behavior(function) inside it.

// syntax
/*
 class myclass{
  construtor(){...}
  method(){...}
}
let myjob = new myclass();
*/
// class toyota {
//     constructor(brand, milage){
//         console.log("this is a cons.")
//         this.brand = brand;
//         this.milage = milage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }
// let fortuner = new toyota("fortuner", 12);
/*        
constructor() method is :        class myclass{
automatically invoke by new      construtor(){...}
initialize object                method(){...}
                                    }
*/


///// inheritance///
// passing down properties and method from parent class to chiled class. 

//syntax
/*
class parent {
}
Class child extends parent{
}
 // if child and parent have some method , child method will be used [method overriding]
*/
// class parent {
//     hello(){
//         console.log("helo")
//     }
// }
// class child extends parent{}
// let childs = new child();

// class person {
//     constructor(){
//         this.species = "human"
//     }
//     eat (){
//         console.log("eat")
//     }
//     sleep(){
//         console.log("sleep")
//     }
//     work(){
//         console.log("nothing")
//     }
// }
// class engineer  extends person {
//     work(){
//         console.log("working something")
//     }
// }
// let ranjan = new engineer() ;


///super keyword///
// this keyword use to call constructor of its  pafrent class to access parent properties and methods.

//   super(arg)   // call parent constructor
//   super.parentmethod(arg)

// class person {
//     constructor(name){
//         this.species = "human",
//         this.name = name
//     }
//     eat (){
//         console.log("eat")
//     }
// }
// class engineer  extends person {      // child (derived)
//     constructor(branch, name ){
//         super(name); // to invoke parent constructor
//         this.branch = branch;
//     }
//     work(){
//         super.eat();
//         console.log("working something")
//     }
// }
// let ranjan = new engineer("etc branch", "ranjankumar") ;


/// problems ///
//1. create website for clg , class user with 2 prop name,email. and also has method viewData() that allow user to view the data on website.

// let data = "secret data of the wensite"
// class user {
//   constructor(name, email){
//     this.name = name;
//     this.email = email;
//   }
//     viewData(){
//         console.log("viewData of the website", data)
//     }
// }
// let student = new user("ranjan", "ranjan@1221");
// let studen1 = new user("sipun", "sipin@1212");


//2. create class Admin inherit from user add new metgod called editData that allow admin to edit the data of website

// let data = "secret data of the wensite"
// class user {
//   constructor(name, email){
//     this.name = name;
//     this.email = email;
//   }
//     viewData(){
//         console.log("viewData of the website", data)
//     }
// }
// class Admin extends user {
//     constructor(name, email){
//         super(name, email)
//     }
//         editdata(){
//             data = "new data added"
//         }
// }
// let student = new user("ranjan", "ranjan@1221");
// let studen1 = new user("sipun", "sipin@1212");
// let admin1 = new Admin("Admin", "admin@1212");


////Error Handeling///
// try-catch block
/*
try {
    ...code
} catch (error) {    // error is error object
    ...handeling error
}
*/

// a=2
// b=3
// console.log(a+b)
// try{
//     console.log(a+c)
// }catch(error){
//     console.log(error)
// }
// console.log(a+b)
