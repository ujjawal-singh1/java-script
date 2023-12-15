//   Primitive

// 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIN=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

const bigNumber=345545447797779n


//Refrence Type (Non primitive)

// array,objects,functions

const heros=["RaghavJi","hanuman","Raghunandan"]
let myObj={
    name: "Ramchandra ji",
    age: 17,
}

const myFunction=function(){
    console.log("HEllo Bhagwan");
}

console.log(typeof heros )

// +++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive),Heap(Non-Primitive)

let myYoutubename="ayodhya@bhagwan.com"

let anothername=myYoutubename
anothername="Shree Hari"
console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@ybl",

}
let userTwo=userOne

userTwo.email="prabhuRam@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);