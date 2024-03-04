// Primitive
// 7 types : 
//String, Number, Boolean, null, undefined, Symbol, bigint

const score = 100
const  scoreValue = 100.1   
// dono hi number category ke under ayenge - NO INT NO DECIMAL like other Langugaes

const Veg = false  // boolean data type
const Result = null  // no zero value i.e empty value 
let userEmail;  //undefined value because we have not provided the value

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2);  // Even though the value is same, but then also it will give output false as because the return type is different.


const bignumber = 833276204868289888n       //after adding n is the lst it become bigint data type.
console.log(typeof bignumber);


// Reference (Non Primitive)
// Array, Object, Functions

const heros = ["Captain America", "Ironman", "Hulk"]        //Example of Array 

let obj= {
    name: "Rohan Dev",      //anything present in {} is object
    age: 23
}

const myFunction = function(){
    console.log("Hello World");     //Example of Function which is stored in the myfunction
}

console.log(typeof myFunction);
console.log(typeof obj);
console.log(typeof heros);