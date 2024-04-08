//objects can be declared using constructor or literals
//singelton banega to sirf constructor banega literals se nahi banega

//Singelton
//->Object.create

//object literal
const sym=Symbol("key1")
const JsUser={
    name:"Ujjawal",
    "full Name":"Ujjawal Kumar",
    age:20,
    [sym]:"mykey1",//correct way to represent symbol is [sym] rather than write sym in key.
    location:"Muzaffarpur",
    email:"kujjawal8294@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Sunday"],
}
// console.log(JsUser.email)//mostly used but some time not work
// console.log(JsUser["email"])//"email" is correct
//JsUser[email] not correct-> because key is in the form of String
console.log(JsUser["full Name"])//this is right approach
//JsUser.full Name ->Not accepted
console.log(JsUser[sym])

//update value
JsUser.email="ujjawal@google.com"

//freeze->To stop update in object

// Object.freeze(JsUser)
// JsUser.email="ujjawal@microsoft.com"//It can't update and replicate on output
// console.log(JsUser)

//make functon for object

JsUser.greeting=function(){
    console.log("hello Js user")
}

// console.log(JsUser.greeting) //->function anonymous
console.log(JsUser.greeting())

JsUser.greeting2=function(){
    console.log(`hello Js user,${this["full Name"]}`)
}
console.log(JsUser.greeting2())