const marvel_heros=["thor","IronMan","spiderman"]
const dc_heros=["superman","batman","flash"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);

const allHeros=marvel_heros.concat(dc_heros);
console.log(allHeros);


const allNewHeros=[...marvel_heros,...dc_heros];
console.log(allNewHeros);

const anotherArray=[1,3,[4,5,[8,12],4],4,9,[5,12]]
const realAnotherarray=anotherArray.flat(Infinity)
console.log(realAnotherarray);

console.log(Array.isArray("UJjawal"));
console.log(Array.from("UJjawal"));
console.log(Array.from({name:"UJjawal"}));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));