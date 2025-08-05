function sum(num1 , num2) {
    return num1 + num2;
}

const sum2 = sum(34456,75432);
// console.log(sum2);


function greet (username)
{
  return `username is ${username}`;
}

const greeting = greet("i am the best ever");
console.log(greeting);


function calculateCartPrice(val1, val2, ...num1){
// ...num1 is a rest parameter that collects all remaining arguments into an array(spread operator)
return num1
}


// console.log(calculateCartPrice(200, 400, 500, 2000))
// ouptut is // [ 500, 2000 ] because val1 and val2 are not included in the rest parameter array

const object1 ={
    anme : "hardik",
    age : 33,
    city : "delhi"
}

function printObject(obj){
      return `name is ${obj.anme},age is ${obj.age},city is ${obj.city}`;
}

const objectOutput = printObject(object1);
console.log(objectOutput);
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));