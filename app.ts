// Basic Types
let myString: string = "Hello, World!";
let myNumber: number = 42;
let myBoolean: boolean = true;

console.log(myString);
console.log(myNumber);
console.log(myBoolean);

// Interfaces
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

let john: Person = {
  name: "John",
  age: 25,
};

greet(john);
