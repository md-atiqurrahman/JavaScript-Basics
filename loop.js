// 1. for loop:

for (let i = 0; i < 5; i++) {
  console.log(i);
}
//এই লুপটি 0 থেকে 4 পর্যন্ত সংখ্যা লুপ করবে এবং প্রতিবার সংখ্যাটি কনসোলে দেখাবে।

// 2. while loop:

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
//এই লুপটিও 0 থেকে 4 পর্যন্ত সংখ্যা লুপ করবে এবং প্রতিবার সংখ্যাটি কনসোলে দেখাবে।

// 3. for of:

let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}

// 4. for in:

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
