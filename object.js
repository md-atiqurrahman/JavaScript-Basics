//object declare: 

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};



// object property access:

// 1. Dot Notation
console.log(person.firstName); // Output: "John"

// 2. Bracket Notation
const propertyName = "firstName";
console.log(person[propertyName]); // Output: "John"



// Add new property in object: 
person.email = "john@example.com";
console.log(person.email); // Output: "john@example.com"



// change property in object:
person.age = 35;
console.log(person.age); // Output: 35




// object array: 

const vipPerson = {
    name: "John",
    address: {
        city: "New York",
        country: "USA"
    },
    hobbies: ['Reading', 'Hiking']
};

console.log(vipPerson.address.city); // Output: "New York"
console.log(vipPerson.hobbies[0]); // Output: "Reading"
