//Imediately invoked function Expression (IIFE)

(function chai(){
//named IIFE
console.log('Db connected');
})();

( (name)=>{
    console.log(`DB Connected two ${name}`);
})("Ujjawal");