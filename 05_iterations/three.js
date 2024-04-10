// for of
// ["","",""]
// {"","",""}
const object=[20,13,4,5,1,28,9]
//for of
// for (const iterator of object) {
//     console,log(iterator)
// }

//Maps
const map=new Map();
map.set("Imdia",1);
map.set("pakistan",-1)
console.log(map);

for(const [key,value] of map){
    console.log(key,":-",value);
}
