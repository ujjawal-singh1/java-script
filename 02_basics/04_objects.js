//const tinderUser=new Object

const tinderUser={}

tinderUser.id="abc13"
tinderUser.name="Sam"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    email:"monu@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Ujjawal",
            lastName:"Kumar",
        }
    }
}
// console.log(regularUser.fullName);

const ob1={1:"a",2:"b"}
const ob2={2:"a",4:"b"}
//const ob3=Object.assign({},ob1,ob2)

//.assign(target,source)

//spread operator
const ob3={...ob1,...ob2}
console.log(ob3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('id'));

//destructor
const course={
    price:999,
    name:"JS ki kahani",
    instructor:"hitesh",
}

const{instructor:master}=course
console.log(master)

