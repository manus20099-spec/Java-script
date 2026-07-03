// ===== Task 1 - Create Variables =====
// 1. String
let myName = "Ahmed"; // Apna naam yahan likho

// 2. Number
let myAge = 20; // Apni age likho

// 3. Boolean
let isStudent = true;

// 4. Array - 5 favorite colors
let favColors = ["Blue", "Black", "White", "Green", "Red"];

// 5. Object - name, age, city
let info = {
  name: myName,
  age: myAge,
  city: "Karachi" // Apna city likho
};

// 6. Undefined variable
let aboutMe; // value nahi di, to ye undefined hai

// 7. Null variable
let address = null;


// ===== Task 2 - Update Variables =====
// let se banaya aur value update ki
let score = 10;
score = 25; // update ho gaya

// const se banaya aur update try kiya
const rollNo = 101;
// rollNo = 102; // Error: Assignment to constant variable. 
// Reason: const ki value change nahi hoti. Sirf 1 baar assign hoti hai.


// ===== Task 3 - Print Output =====
console.log("--- Values ---");
console.log(myName);
console.log(myAge);
console.log(isStudent);
console.log(favColors);
console.log(info);
console.log(aboutMe);
console.log(address);
console.log(score);
console.log(rollNo);


// ===== Task 4 - Check Data Types =====
console.log("--- Data Types ---");
console.log(typeof myName);   // string
console.log(typeof myAge);    // number
console.log(typeof isStudent); // boolean
console.log(typeof favColors); // object -> array bhi object hota hai
console.log(typeof info);      // object
console.log(typeof aboutMe);   // undefined
console.log(typeof address);   // object -> ye JS ka 1 bug hai, null ka type object aata hai


// ===== Task 5 - Variable Naming Rules - Sahi Code =====

let name1 = "Ali"; // Number aakhir me aa sakta hai
let courseName = "Web Development"; // Reserved word nahi
let myName2 = "Test"; // name change kar diya 
let my_name = "Test"; // _ use kar sakte ho
let userId = "123"; // @ ke bajaye normal letters use karo