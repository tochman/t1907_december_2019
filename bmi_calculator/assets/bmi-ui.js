const GLOBALS = {method: 'metric'}

const calculateBMI = () => {
  let resultsElement = document.getElementById('results')
  let weightInput = document.getElementById('weight')
  let heightInput = document.getElementById('height')
  let results 
  if (GLOBALS.method === 'metric') {
    results = calculateMetricBMI(weightInput.value, heightInput.value)
  } else {
    results = calculateImperialBMI(weightInput.value, heightInput.value)
  }
  let message = getBMIMessage(results)
  resultsElement.innerHTML = `<h2 class="message">Your BMI is ${results} and you are deemed ${message}</h2>`
}

const handlePress = () => {
  if (event.keyCode === 13) {
    calculateBMI()
  } else {
    return
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const radioButtons = document.querySelectorAll('input[type="radio"]')
  radioButtons.forEach(node => {
    node.addEventListener('change', () => {
      GLOBALS.method = event.target.value
      let weightInput = document.getElementById('weight')
      let heightInput = document.getElementById('height')
      if (GLOBALS.method === 'imperial') {
        weightInput.placeholder = "Your weight in pounds"
        heightInput.placeholder = "Your height in inches"
      } else {
        weightInput.placeholder = "Your weight in kg"
        heightInput.placeholder = "Your height in cm"
      }
    })
  })
})