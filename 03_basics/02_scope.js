//var c=300
//Global Scope
let a=200
if(true){
let a=10                    //Block scope
const b=20
var c=30
console.log("Inner",a);
}



console.log(a);
console.log(b);
console.log(c);

function one(){
    const username="ujjawal"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website)
    two()
}
one()

addone(5)
function addone(num){
    return num+1
}
//addtwo(4) here it give error
const addtwo=function(num){
    return num+2
}
addtwo(4)