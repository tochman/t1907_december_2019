const calculateMetricBMI = (weight, height) => {
  let results = parseInt(weight) / (parseInt(height) / 100 * parseInt(height) / 100)
  return results.toFixed(2)
}

// BMI Classification	
// Underweight	<18.5
// Normal weight	18.5-24.9
// Overweight	25-29.9
// Obesity Class 1	30-34.9
// Obesity Class 2	35-39.9
// Extreme Obesity Class 3	>40

const getBMIMessage = bmiValue => {
  if (bmiValue < 18.5) {
    return 'Underweight'
  } else if (bmiValue > 18.5 && bmiValue < 24.9) {
    return 'Normal weight'
  } else if (bmiValue > 25 && bmiValue < 29.9) {
    return 'Overweight'
  } else if (bmiValue > 30 && bmiValue < 34.9) {
    return 'Obesity Class 1'
  } else if (bmiValue > 35 && bmiValue < 39.9) {
    return 'Obesity Class 2'
  } else if (bmiValue > 40 ) {
    return 'Extreme Obesity Class 3'
  }
}