/*                                           FOR LOOP
for (let  i=1; i<=5;i++){
    console.log("hardik");
}
*/
/*                                          WHILE LOOP
 let i=1;
while(i<=20){
    if(i%2 == 0){
    // console.log(i);
    }
     i++; //🔁 Don't forget to update! otjerwise it will create an infinte loop 
}
*/
/*
let i=1;

while(i <=7){
    console.log(`hardik ${i}`);
    i++;
}
*/


/*                                          DO WHILE
let i=1;

do {
    console.log(`hardik ${i}`);
    i++;
}
while(i<=7);//🔁 Do-While loop will always execute at least once, even if the condition is false initially.
*/


/*                                          FOROF LOOP                                        */


const arr  = [1,2,3,4,66,78,50];
for (let value of arr){
    // VALUE IS THE ELEMENT OF THE ARRAY ,JUST LIKE (i) iteration IN FOR LOOP 
    // ARR IS THE THING IN WHICH IT IS ITERATING
    // console.log(value);
}
/*
const baby = { namre  :"harshita"};

for(let key of baby){
//   console.log(`${key} : ${baby[key]}`); // Accessing the value using the key
}
// FOR-OF-LOOP : NOT APPLY ON OBJECTS DIRECTLY, IT WILL GIVE ERROR  


const greetings = "Hello, World!";
for (let greet of greetings) {
    console.log(greet); // This will log each character in the string
}

//                                   FOR-EACH-LOOP  (1)
const guests = ["Anjali", "Raj", "Pooja", "Hardik"];

guests.forEach((guest) => {
    console.log(`hello ${guest}, welcome `)
});
*/
/*
//                                             (2)
const prices = [199, 249, 99, 150, 299];
let total = 0;

prices.forEach((price) =>{
    total += price;
});
// console.log(`${total} `)
*/
/*
Use forEach when:
- You need simple iteration over arrays.
- You don’t care about breaking or async/await.

Use for...of when:
- You want more control like break/continue.
- You’re working with strings, sets, or want async/await support.

Don’t use either directly on objects — use for...in or Object.keys().
*/

//                                    FOR-IN-LOOP
/*
for...in → Used for objects.
- 'key' is each property name.
- Use object[key] to get the value.
- Good when looping through all info in an object.
//                                       (1)
const objects = {
      name : "Hardik",
      age : 22,
      city : "surat"
};

for (const key in objects) {
    console.log(`${key} : ${objects[key]}`);
    //  KEY GIVE US (NAME , AGE ,CITY)
    //   OBJECT[KEY] GIVE US VALUE 
    }
*/

//                                             (2)
/*
const car = {
    brand: "Tata",
    model: "Nexon",
    year: 2024

};

for(let key in car){
    // console.log(`${key} : ${car[key]}`);
}


//                                            (3)

const marks = {
  English: 88,
  Math: 92,
  Science: 79,
  History: 85
};


for ( let mark in marks){
    console.log(`${mark} : ${marks[mark]}`)
}
    */



//                                    Loop Combo Challenge
//                                        (1) for loop
const numbers = [12, 25, 30, 41, 58, 63, 74, 85];



for (let i=0; i<numbers.length;i++){
    if (numbers[i] % 5 == 0){
        // console.log(numbers[i]);
    }
}

//                                         (2) while loop 

let i = 1;
while( i <= 10){
    // console.log(`${i} : Hardik`)
    i++;
}


//                                        (3) Do While loop
let j = 1;
do {
    console.log(`hardik love coding`);
    j++;
} while (j <= 3);


//                                       (4) for-of-loop

for ( let value of numbers){
    // console.log(`doubled value : ${value*2}`);
};


//                                     (5)for-each-loop

// x is like a paramter 
numbers.forEach((x)=>{
    let y = x + x/10;
    console.log(`${x}  after tax ${y}` );

});

const student = {
  name: "Hardik",
  age: 22,
  city: "Surat"
};

for(let keys in student ){
    console.log(`${keys} : ${student[keys]}`);
}

