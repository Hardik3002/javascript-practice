const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [] empty array, {}empty object, function(){}

const emptyobject = {"hardik": "hitesh"}

if (Object.keys(emptyobject).length === 0) {
    console.log("This is a truthy value");
}else {
    console.log("This is a falsy value");
}
 // Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);


// TERNARY OPERATOPR (condition)? expression1 : expression2 
		// ? means → “if true, then…”
		// : means → “otherwise…”


        const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
