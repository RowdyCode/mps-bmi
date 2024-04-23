const form = document.getElementById('bmi-form');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultDiv = document.getElementById('result');


function showResult(bmi) {
    if (bmi < 16) {

        message = "(underweight.)";
    
      } else if (bmi >= 16 && bmi < 18.5) {
    
        message = "(normal weight.)";
    
      } else {
    
        message = "(overweight.)";
    
      }
    
      resultDiv.innerHTML = `Your BMI is ${bmi} ${message}`;
    
      resultDiv.classList.add('show');
    
      resultDiv.classList.add('bounce-in');
    
      setTimeout(() => {
    
        resultDiv.classList.remove('bounce-in');
    
      }, 1000);
  }
  
  function hideResult() {
    resultDiv.classList.remove('show');
    resultDiv.classList.remove('bounce-out');
    setTimeout(() => {
      resultDiv.classList.add('bounce-out');
    }, 10);
  }

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const bmi = (weight / (height / 100) ** 2).toFixed(2);
  showResult(bmi);
});
const resetButton = document.querySelector('button[type="reset"]');

resetButton.addEventListener('click', () => {
  weightInput.value = '';
  heightInput.value = '';
  hideResult();
});


