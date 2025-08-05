const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  // prevent the default form submission behavior 
  const heights = parseInt(document.querySelector('#height').value);
  const weights = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (isNaN(heights) || heights <= 0) {
    results.textContent = `Please enter a valid height: ${heights}`;
    return;
  }

  if (isNaN(weights) || weights <= 0) {
    results.textContent = `Please enter a valid weight: ${weights}`;
    return;
  }

  // You can calculate BMI here
  const bmi = (weights / ((heights / 100) ** 2)).toFixed(2);
  results.textContent = `Your BMI is ${bmi}`;
});