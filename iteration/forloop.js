for (let i = 0; i < 10; i++) {

    const element =i;
    if(element ==5){
    // console.log("Hello World", i);
    }
    // console.log("Element is", element);
}


for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}



let myArray = ["hardik" , "hitesh", "undar", "choudhary"];


for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log("Element is", element);
}

// CONCEPT OF BREAK AND CONTINUE

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("stop at  the rope value  at 5 ")
        // console.log("Breaking the loop at 5");
        break; // Exits the loop when i is 5
    }
    // console.log("Current value of i:", i);
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Skipping the value at 5");
        continue; // Skips the current iteration when i is 5
    }
    // console.log("Current value of i:", i);
}