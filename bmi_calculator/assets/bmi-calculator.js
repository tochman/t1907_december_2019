const calculateMetricBMI = (weight, height) => {
  let results = parseInt(weight) / (parseInt(height) / 100 * parseInt(height) / 100)
  return results.toFixed(2)
}

const calculateImperialBMI = (weight, height) => {
  let results = (parseInt(weight) * 703) / (parseInt(height) * parseInt(height))
  return results.toFixed(2)
}

const getBMIMessage = bmiValue => {
  switch (true) {
    case (bmiValue < 18.5):
      return 'Underweight'
    case (bmiValue < 25):
      return "Normal weight"
    case (bmiValue < 30):
      return 'you are Overweight'
    case (bmiValue < 35):
      return 'Obesity Class 1'
    case (bmiValue < 40.1):
      return 'Obesity Class 2'
    default:
      return 'Extreme Obesity Class 3'
  }
};


