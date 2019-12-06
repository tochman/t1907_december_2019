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
  switch (true) {
    case (bmiValue < 18.5):
      return 'Underweight'
    case (bmiValue < 25):
      return "Normal weight"
    case (bmiValue < 30):
      return 'Overweight'
    case (bmiValue < 35):
      return 'Obesity Class 1'
    case (bmiValue < 40.1):
      return 'Obesity Class 2'
    default:
      return 'Extreme Obesity Class 3'
  }
};


