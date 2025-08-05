const arr =["hardik","hitesh", "sundar", "choudhary"]

arr.forEach(function(value){
    console.log("value is",value);
})


arr.forEach((value) => {
    console,log("value is ",value);
});


const myarray =[
    {
        name : "hardik",
        age : 2
    },
    {
          name : "hitesh",
          age : 30 
    },
    {
            name : "sundar",
            age : 40
    }
]

myarray.forEach((value) => {
    console.log(value.name, value.age);
})