
const height1 = document.getElementById("height_feet_input");
const height2 = document.getElementById("height_inches_input");
const weight = document.getElementById("weight_input");
const genderInput = document.getElementById("gender_input");
const ageInput = document.getElementById("age_input");
const resultOutput = document.getElementById("result_output");
const calculateBtn = document.getElementById("calculate_btn");

calculateBtn.addEventListener("click", calBmi);

class Calculator {
  constructor(height1, height2, weight) {
    this.height1 = height1;
    this.height2 = height2;
    this.weight = weight;
  }

  metrics() {
    var height = (this.height1 * 0.3048) + (this.height2 * 0.0254);
    return this.weight / (height * 2);
  }

  imperial() {
    var height = (this.height1 * 12) + this.height2;
    var weight = this.weight * 2.20462;
    return (weight * 703) / (height * 2);
  }

  result() {
    return `Your BMI is ${(this.metrics()).toFixed(1)} Kg/m2 or ${(this.imperial()).toFixed(1)} Lbs/m2`;;
  }
}

let myBmi = [];

function calBmi() {
  let bmi = new Calculator(height1.value, height2.value, weight.value);
  myBmi.push(bmi);
  console.log(myBmi);
  resultOutput.innerText = bmi.result();
}
