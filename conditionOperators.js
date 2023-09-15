//JavaScript-এ কন্ডিশন লেখার জন্য ব্যবহৃত হয় তিনটি মুখ্য মধ্যবর্তী অপারেটর: if, else if, এবং else।


//উদাহরণ 1: if,else ব্যবহার

let peopleAge = 18;

if (peopleAge >= 18) {
  console.log("আপনি ভোট দিতে পারেন");
} else {
  console.log("আপনি ভোট দিতে পারবেন না");
}


//উদাহরণ 2: else if ব্যবহার

let score = 75;

if (score >= 80) {
    console.log("A+ প্রাপ্ত হয়েছে");
} else if (score >= 70) {
    console.log("A প্রাপ্ত হয়েছে");
} else if (score >= 60) {
    console.log("B প্রাপ্ত হয়েছে");
} else {
    console.log("C বা তার নিচের গ্রেড প্রাপ্ত হয়েছে");
}


//উদাহরণ 3: একাধিক কন্ডিশন এর মধ্যে সবগুলো  ফুলফিল করা। এই জন্য আমরা "&&" অপারেটর ব্যবহার করি।  এটি যদি সব কন্ডিশন সত্য হয়, তবে এই ব্লক রান হয়।

let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("আপনি গাড়ি চালাতে পারবেন");
} else {
    console.log("আপনি গাড়ি চালাতে পারবেন না");
}


//উদাহরণ 4: একাধিক কন্ডিশন এর মধ্যে যেকোন একটা ফুলফিল করা । এই জন্য আমরা "||" অপারেটর ব্যবহার করি। যদি কোন একটি কন্ডিশন সত্য হয়, তবে এই ব্লক রান হয়।

let isRaining = true;
let isSunny = false;

if (isRaining || isSunny) {
    console.log("আপনি বাংলো থেকে বাইসাইকেল নিয়ে বের হতে পারেন");
} else {
    console.log("আপনি বাইসাইকেল নিয়ে বের হতে পারবেন না");
}
