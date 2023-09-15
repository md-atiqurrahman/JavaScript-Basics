//Comparison Operators (তুলনা অপারেটর): এই অপারেটরগুলি দুটি মান তুলনা করে দেখে সত্য বা মিথ্যা হলে নির্দিষ্ট কোড ব্লক রান করা হয়।

//  ">" (Greater Than): এটি দুই মানের তুলনা করে, যদি প্রথম মান দ্বিতীয় মানের চেয়ে বড় হয়, তবে কন্ডিশন সত্য হয়।

// "<" (Less Than): এটি দুই মানের তুলনা করে, যদি প্রথম মান দ্বিতীয় মানের চেয়ে ছোট হয়, তবে কন্ডিশন সত্য হয়।

//  ">=" (Greater Than or Equal To): এটি দুই মানের তুলনা করে, যদি প্রথম মান দ্বিতীয় মানের সমান বা বড় হয়, তবে কন্ডিশন সত্য হয়।

// "<="(Less Than or Equal To): এটি দুই মানের তুলনা করে, যদি প্রথম মান দ্বিতীয় মানের সমান বা ছোট হয়, তবে কন্ডিশন সত্য হয়।

// "==" (Equal): এটি দুই মানের সমান বা সমান নয় তা তুলনা করে, তবে টাইপ চেক না করে।

// "!="(Not Equal): এটি দুই মানের সমান না থাকলে সত্য হয়।

let x = 5;
let y = 10;

// Greater Than
if (x > y) {
  console.log("x is greater than y");
} else {
  console.log("x is not greater than y");
}

// Less Than
if (x < y) {
  console.log("x is less than y");
} else {
  console.log("x is not less than y");
}

// Greater Than or Equal To
if (x >= y) {
  console.log("x is greater than or equal to y");
} else {
  console.log("x is neither greater than nor equal to y");
}

// Less Than or Equal To
if (x <= y) {
  console.log("x is less than or equal to y");
} else {
  console.log("x is neither less than nor equal to y");
}

// Equal
if (x == "5") {
  // x is a number and "5" is a string. It will check only value , not type
  console.log("x is equal to '5'");
} else {
  console.log("x is not equal to '5'");
}

// Not Equal
if (x != y) {
  console.log("x is not equal to y");
} else {
  console.log("x is equal to y");
}




// Strict Equality Operators (সখট সমানতা অপারেটর): এই অপারেটরগুলি দুই মানের সমান হলে সত্য হয়, এবং টাইপ চেক করে।

// "===" (Strict Equal): এটি দুই মানের সমান এবং সমান টাইপ থাকতে হবে, তবে অবশ্যই সমান হতে হবে, আরও আপাতত সমান না থাকলে মিথ্যা হয়।

// "!==" (Strict Not Equal): এটি দুই মানের সমান না হলে সত্য হয়, অথবা টাইপ সমান না হলে সত্য হয়।

let a = 5;
let b = "5";

// Strict Equal
if (a === b) {
    console.log("a is strictly equal to b");
} else {
    console.log("a is not strictly equal to b");
}

// Strict Not Equal
if (a !== b) {
    console.log("a is strictly not equal to b");
} else {
    console.log("a is strictly equal to b");
}
