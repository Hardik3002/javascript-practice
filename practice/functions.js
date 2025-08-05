//                                      FUNCTION 
/*
function greet(){
    console.log(" Welcome back hardik");
}
greet();
*/


//                                FUNCTION WITH PARAMETERS


function greet(name){
    console.log(`hello ${name} bro `);
}

greet("hardik");


//                                    RETURN IN FUNCTION

function multiply (a,b) {
 return a*b;
}

let result = multiply (23,45);
console.log(result);



//                                      ARROW FUNCTION (1)
//   IN ARROW YOU HAVE NO NEED TO WRITE WORD (function)
/*
 multiply = (A,B) => {
    return A*B;
};

console.log(multiply(1234,456));       
*/

//                                           (2)
// in single line without curly bracket 
const mulitiplication = (A,B) => A*B;

console.log(mulitiplication(7,6));


//                                           (3)

function checkAge(age) {
    if (age >= 18) {
        console.log("You are eligible to vote");
    } else {
        console.log("Not eligible for vote");
    }
}

checkAge(56);
checkAge(12);

