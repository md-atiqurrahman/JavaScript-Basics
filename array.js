// 1. Array ডিক্লেয়ার করা:

let fruits = ["apple", "banana", "cherry"];

// 2. অ্যারের লেংথ (Length):
let length = fruits.length; // এই অ্যারেটির লেংথ 3

// 3. ইন্ডেক্স (Index):

fruits[0]; //এখানে 'apple' যেটা 0 ইন্ডেক্সে রয়েছে।
fruits[1]; //এখানে 'banana' যেটা 1 ইন্ডেক্সে রয়েছে।
fruits[2]; //এখানে 'cherry' যেটা 2 ইন্ডেক্সে রয়েছে।

// 4. পুশ (Push): অ্যারের শেষে নতুন মান যোগ করতে push মেথড ব্যাবহার করা যায়:

fruits.push("orange"); //output: ['apple', 'banana', 'cherry', 'orange']

// 5. পপ (Pop):অ্যারের শেষে মান সরে ফেলতে pop মেথড ব্যাবহার করা যায়:

fruits.pop(); // ['apple', 'banana']

// 6. ইন্ডেক্স খোঁজা (indexOf): একটি মান এর ইন্ডেক্স খোঁজতে indexOf মেথড ব্যবহার করা যায়:

let index = fruits.indexOf("banana"); // ইন্ডেক্স 1

// 7. ইনক্লুড (includes):একটি মান অ্যারেতে আছে কিনা তা চেক করতে includes মেথড ব্যাবহার করা যায়:

let isIncluded = fruits.includes("banana"); // true

// 8. স্লাইস (slice):অ্যারের নির্দিষ্ট অংশকে নতুন অ্যারে হিসেবে পেতে slice মেথড ব্যাবহার করা যায়:

let slicedFruits = fruits.slice(1, 2); // output: ['banana']

// 9. স্প্লাইস (splice):অ্যারের মধ্যে মুছে ফেলা বা নতুন মান যোগ করতে splice মেথড ব্যাবহার করা যায়:

// Syntax: array.splice(start, deleteCount, item1, item2, ...)

// Start at index 1 ('banana'), delete 1 element ('banana'), and add 'kiwi' and 'Mango' in its place.
fruits.splice(1, 1, "kiwi", "Mango");

console.log(fruits); // Output: ['apple', 'kiwi', 'Mango', 'cherry']

// 10. স্থান পরিবর্তন করা (shift, unshift):shift মেথড দিয়ে অ্যারের শুরুর মান বাদ দেওয়া যায়, এবং unshift মেথড দিয়ে অ্যারের শুরুতে নতুন মান যোগ করা যায়:

fruits.shift();
console.log(fruits); // ['banana', 'cherry']
fruits.unshift("grape");
console.log(fruits); // ['grape', 'banana', 'cherry']

// 11. যোইন (join):join মেথড দিয়ে অ্যারের সব মানগুলি একটি স্ট্রিং হিসেবে যোগ করা যায়:

const fruitString = fruits.join(",");
console.log(fruitString); // Output: "apple,banana,cherry"

const words = ["Hello", "world", "in", "JavaScript"];
const sentence = words.join(" ");
console.log(sentence); // Output: "Hello world in JavaScript"



// 12. reduce:

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15