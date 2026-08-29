/**
 * =====================================================
 * PROJECT: BMI Calculator
 * =====================================================
 *
 * Definition:
 * BMI = weight(kg) / height(m)^2
 *
 * Why it is important:
 * Form values are strings. You must convert and validate
 * before doing math — the same rule as API query params.
 *
 * Open: projects/project-02/index.html
 */

const form = document.getElementById("bmi-form");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const result = document.getElementById("result");

function getCategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  }
  if (bmi < 25) {
    return "Normal";
  }
  if (bmi < 30) {
    return "Overweight";
  }
  return "Obese";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const heightCm = Number(heightInput.value);
  const weightKg = Number(weightInput.value);

  if (!Number.isFinite(heightCm) || !Number.isFinite(weightKg) || heightCm <= 0 || weightKg <= 0) {
    result.textContent = "Please enter valid height and weight.";
    return;
  }

  const heightMeters = heightCm / 100;
  const bmi = weightKg / (heightMeters * heightMeters);
  const rounded = bmi.toFixed(1);
  result.textContent = `BMI: ${rounded} (${getCategory(bmi)})`;
});
