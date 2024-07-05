// Primitive Data Types
// 7 Types: String, Number, Boolean, null, undefined, Symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);
console.log(id === anotherId)

// Non-Primitve/ Reference Data Types
// Objects, Functions, Array
// For BigInt just put the n after the number


//Defining an Object
const heros = ["Iron Man", "Superman", "Captain America"];
let myObj = {
    firstName: "Om",
    age: 22,
}
console.log(heros);

//Defining a function

const myFunc = function(){
    console.log("Hello World");
}
myFunc()