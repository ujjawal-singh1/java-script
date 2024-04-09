// function callMyName(){
//     console.log("U")
//     console.log("j")
//     console.log("j")
//     console.log("a")
//     console.log("w")
//     console.log("a")
//     console.log("l")
// }
// callMyName();

// function addTwoNumbers(number1,number2){
//     return number1+number2;
// }

// let sum=addTwoNumbers(3,null);//->3
// let sum=addTwoNumbers(3,4);//->7
// let sum=addTwoNumbers(3,"a");//->3a
// console.log(sum);
//  function loginUserMessage(username){
//     if(username===undefined){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
//  }
// // console.log(loginUserMessage("Ujjawal"))
// console.log(loginUserMessage())

//function loginUserMessage(username="Ram"){//default value
    //     if(username===undefined){
    //         console.log("Please enter a username")
    //         return
    //     }
    //     return `${username} just logged in`
    //  }

    function calculateCartPrice(...num1){
        return num1
    }
    console.log(calculateCartPrice(200,400,500))

    const user={
        username:"Ujjawal",
        price:100,
    }
    function handleObject(anyobject){
        console.log(`Usename is ${anyobject.username} and price is ${anyobject.price}`)
    }
    // handleObject(user);
    handleObject({
        username:"sam",
        price:399,
    })

    const myNewArray=[200,300,400,600]
    function returnSeconValue(getArray){
        return getArray[1];
    }
    console.log(returnSeconValue(myNewArray));