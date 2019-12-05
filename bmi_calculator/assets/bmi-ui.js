const calculateBMI = () => {
  let resultsElement = document.getElementById('results')
  let weightInput = document.getElementById('weight')
  let heightInput = document.getElementById('height')
  let results = calculateMetricBMI(weightInput.value, heightInput.value)
  let message = getBMIMessage(results)
  resultsElement.innerHTML = `<h2>Your BMI is ${results} and you are deemed ${message}</h2>`
}

const handlePress = () => {
  if (event.keyCode === 13) {
    calculateBMI()
  } else {
    return
  }
}