const marvelhero = ["act", "names", "age", ""];
const marvelhero2v = ["ac" , "dch" , "Headers","iksharma"];

// const allheroes = marvelhero.concat(marvelhero2v)
// // .concat() method is used to merge two or more arrays.
// console.log(allheroes);

const allheroes = [...marvelhero,...marvelhero2v];
// The spread operator (...) is used to expand the elements of an array.
console.log(allheroes);
console.log(allheroes.join(", "));
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));