user="Ujjawal"
if(user){
    console.log("active user")
}
else{
    console.log("Inactive User")
}

// falsy value

// false,0,-0,BigInt 0n,null,undefined,Nan;

//truthy value

// "0",[],'false'," ",{},function(){};

//Nullish Coalescing Operator (??): null undefined

let val1;
val1=5??10

val1=null??30
val1=undefined??15

console.log(val1);

//Ternary operator

// condition?true:false

const ice=20
ice>=20?console.log("less than 100"):console.log("more than one");