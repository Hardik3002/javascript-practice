const mynums = [1,3,45,67,8990]

const myaction = mynums
     .map((num) => (num * 2))
     .map((num) => (num + 1))
     .filter((num) => (num > 10))

console.log("my action is ",myaction);

