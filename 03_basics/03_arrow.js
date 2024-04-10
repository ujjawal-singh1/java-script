 const user={
    username:"Ujjawal Kumar",
    id:"ujjawalsingh",

    call:function(){
        console.log("Inner object function",this.username)
        console.log(this)
    }
 }
// user.call()
// user.username="Ram"
// user.call()

// console.log(this)

// function chai(){
//     console.log(this)
//     console.log(this.username)
// }

// const chai= ()=>{
//     console.log(this)
//     console.log(this.username)
// }

// const chai=()=>{
//     let username="Ujjawal"
//     console.log(this.username)
// }

// const addtwo=(num1,num2)=>{//explicit return
//     return num1+num2
// }

// const addtwo=(num1,num2)=> (num1+num2)//implicit return

// console.log(addtwo(5,6))


