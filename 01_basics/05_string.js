const name="Ujjawal"
const repoCount=50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('Uj-ja-wa-l')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString =gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-6,4)
console.log(anotherString);

const s1="    Ujjawal"
console.log(s1);
console.log(s1.trim());

const url="https://bhagwanRam.com/Ram%20Bhagwan"

console.log(url.replace('%20','-'))

console.log(url.includes('chandra'));

console.log(gameName.split('-'));