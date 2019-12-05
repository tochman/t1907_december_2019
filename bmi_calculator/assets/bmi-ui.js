const calculateBMI = () => {
  let resultsElement = document.getElementById('results')
  let weightInput = document.getElementById('weight')
  let heightInput = document.getElementById('height')
  // debugger
  let results = calculateMetricBMI(weightInput.value, heightInput.value)
  let message = getBMIMessage(results)
  resultsElement.innerHTML = `<h1>Your BMI is ${results} and you are deemed ${message}</h1>`
}