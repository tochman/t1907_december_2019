### Create the folder structure

```
index.html
assets/
  bmi-ui.js
  bmi-calculator.js
  style.css
```

### Add the basic HTML5 scaffold to index.html. Add the css and js imports

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./assets/style.css" />
    <title>BMI Calculator</title>
  </head>

  <body>
    <script src="./assets/bmi-calculator.js"></script>
    <script src="./assets/bmi-ui.js"></script>
  </body>
</html>
```

### Add the structure for index.html

- 2 input fields, weight and height.
- 1 button for calculating the function.

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./assets/style.css" />
    <title>BMI Calculator</title>
  </head>

  <body>
    <h1>BMI Calculator</h1>
    <input type="number" id="weight" placeholder="Your weight in kg" />
    <input type="number" id="height" placeholder="Your height in cm" />
    <button onclick="calculateBMI()">Calculate</button>

    <div id="results"></div>
    <script src="./assets/bmi-calculator.js"></script>
    <script src="./assets/bmi-ui.js"></script>
  </body>
</html>
```

### Add function to return the bmi results

```js
// assests/bmi-ui.js

const calculateBMI = () => {
  let resultsElement = document.getElementById("results");
  let weightInput = document.getElementById("weight");
  let heightInput = document.getElementById("height");
  let results = calculateMetricBMI(weightInput.value, heightInput.value);
  resultsElement.innerHTML = `<h2>Your BMI is ${results}</h2>`;
};
```

```js
// /assets/bmi-calculator.js

const calculateMetricBMI = (weight, height) => {
  let results =
    parseInt(weight) / (((parseInt(height) / 100) * parseInt(height)) / 100);
  return results.toFixed(2);
};
```

### Add function to compose the message

```js
// assets/bmi-ui.js

const calculateBMI = () => {
  let resultsElement = document.getElementById("results");
  let weightInput = document.getElementById("weight");
  let heightInput = document.getElementById("height");
  let results = calculateMetricBMI(weightInput.value, heightInput.value);
  let message = getBMIMessage(results);
  resultsElement.innerHTML = `<h2>Your BMI is ${results} and you are deemed ${message}</h2>`;
};
```

```js
// /assets/bmi-calculator.js

const calculateMetricBMI = (weight, height) => {
  let results =
    parseInt(weight) / (((parseInt(height) / 100) * parseInt(height)) / 100);
  return results.toFixed(2);
};

const getBMIMessage = bmiValue => {
  if (bmiValue < 18.5) {
    return "Underweight";
  } else if (bmiValue < 25) {
    return "Normal weight";
  } else if (bmiValue < 30) {
    return "Overweight";
  } else if (bmiValue < 35) {
    return "Obesity Class 1";
  } else if (bmiValue < 40.1) {
    return "Obesity Class 2";
  } else {
    return "Extreme Obesity Class 3";
  }
};
```

Shows how to copy style from internet.

```css
/* assets/style.css */

body {
  font-family: Arial, Helvetica, sans-serif;
}
input[type="number"] {
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

button {
  background-color: brown;
  color: white;
  padding: 11px 40px;
  font-size: 14px;
}
```

Shows how to listen to enter key being pressed and executes the function.

```html
<!-- index.html -->
...
<body onkeydown="handlePress()">
  ...
</body>
```

```js
// assets/bmi-ui.js

...
const handlePress = () => {
  if (event.keyCode === 13) {
    calculateBMI()
  } else {
    return
  }
}
```

### Refactor bmi message to use switch statement:

```js
// assets/bmi-calculator.js

...
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
```
