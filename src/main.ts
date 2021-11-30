console.log('Hello world from Main.js');

// Type: Number
// explicit
let phone: number;
phone = 1;
phone = 25656565;
// phone = ""; // error Type 'string' is not assignable to type 'number'

// inferred
let phoneNumber = 22525493;
phoneNumber = 5;
// phoneNumber = true; // error Type 'boolean' is not assignable to type 'number'

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o7412;

// Type: Boolean
// explicit
let isPro: boolean;
isPro = true;

// inferred
let isUSerPro = false;

// Type: String
// explicit
let username: string = "Will Martinez";
username = "test";
// username = true;  // Error Type 'boolean' is not assignable to type 'string'

// Template String
// Use of back-tick `
let userInfo = `
  User info :
  username: ${username}
  firstName: ${username + 'Martinez'}
  phone: ${phoneNumber}
  isPro: ${isPro}
  `
  console.log('userInfo ', userInfo);