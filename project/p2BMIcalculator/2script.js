const form = document.querySelector('form');


// submit event listener for the form for taken input values
form.addEventListener('submit', function(e){
    e.preventDefault();
    // prevent the default form submission behavior
// we use parseInt to convert string to integer
   const height =  parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
    
   //  formula for bmi calculator (const bmi = weight / ((height / 100) ** 2);)
   const results  = document.querySelector('#results');

   if (height === '' || height < 0 || isNaN(height)){
     results.innerHTML = `pls enter the valid height${height}`;
   }
     else if (weight === ''|| weight < 0 || isNaN(weight)){
        results.innerHTML = `pls enter the valid weight${weight}`;
     }
        else {
            const bmi = (weight / ((height / 100) ** 2)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`;
        }
   });
