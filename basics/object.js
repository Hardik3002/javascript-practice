const mysym = Symbol("mySymbol");


const objects = {
    name: "objects",
   " full name": "Objects Application",
//    fullName this is a string but worked as a key
   age : 20,
keyname : "Hardik",
[mysym]: "This is my symbol",
}
//  console.log(objects.name);
//     console.log(objects[" full name"]); // Accessing property with space in key
//     console.log(objects.fullName); // Accessing property with space in key
//     console.log([mysym])

myjs.greetingtwo = function () {
    console.log(`Hello, this is my greeting function , ${this.name}`);
}
// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));
