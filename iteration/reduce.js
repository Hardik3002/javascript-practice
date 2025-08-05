// const myarray = [1,2,3,4,56];

// const myaction =myarray.reduce(function (acc,cvalue){
//      console.log("acc is ", acc, "cvalue is ", cvalue);
//      return acc + cvalue;
// }, 0);
// console.log("my action is ", myaction); 
// OR using arrow function
// const myaction2 =myarray.reduce((acc,cvalue) => {
//      console.log("acc is ", acc, "cvalue is ", cvalue);
//      return acc + cvalue;
// }, 678);
// console.log("my action2 is ", myaction2);


const myaction3 = [
    {
        item : "apple",
        price : 20
    },
    {
        item : "appl",
        price : 40
    },
    {
        item : "aple",
        price : 50
    },
    {
        item : "ap",
        price : 10
    },
]

const finalaction = myaction3.reduce((acc,item) =>acc + item.price, 0)
console.log("final action is ", finalaction);