//                                 <----- BMI CALCULATOR ----->
/*
function calculateBMI(height,weight) {
            let bmi = weight / (height * height);
            if (bmi <= 18.5){
                return "under weight";
            }
              else {
                return "she is perfect";
              }
            return bmi;
}

calculateBMI(1.67,34);
*/

//                               <---- Tip Calculator ---->

/*
function calculateTip(billAmount, tipPercent) {
  let tip = billAmount * (tipPercent / 100);
  let total = billAmount + tip;
  return `For ₹${billAmount} with ${tipPercent}% tip, you should pay ₹${total}`;
}


console.log (calculateTip(1200,20));
*/

//                                 <---- Grade calculator ---->

 let marks = 0;
function gradecalcultor(marks) {
    if(marks >= 90 && marks <= 100){
        return "A";
    } else if (marks >= 80 && marks <= 89){
        return "B+";
    } else if (marks >= 70 && marks <= 79){
        return "B";
    } else if (marks >= 60 && marks <= 69){
        return "C+";
    }else  {console.log("fail h ji tumhara ladka")};
}


const grade = gradecalcultor(78);
console.log(grade);