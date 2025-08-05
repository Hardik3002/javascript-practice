// if
const isUserloggedIn = true
const temperature = 41
if (temperature < 40) {
    console.log("It's too hot outside")
} else{
    console.log("It's not too hot outside")
}


// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// } 

// console.log(`user power: ${power}`); // This will throw an error because 'power' is not defined outside the if block
// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");
// unreadable code 

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }


const userlogin = true;
const debitcard = true;
const loginfromgoogle = false;
const logingmail = true;

if (userlogin && debitcard) {
    console.log("User is logged in and has a debit card");
}
if (userlogin || logingmail){
    console.log("User is logged in or has logged in with Gmail");
}