/**
 * =====================================================
 * PROJECT: Color Changer (Chai aur JavaScript style)
 * =====================================================
 *
 * Definition:
 * Event listeners read a data-* attribute and update CSS.
 *
 * Why it is important:
 * This is the same pattern as theme switchers and UI kits.
 *
 * Open: projects/project-01/index.html
 */

const buttons = document.querySelectorAll(".color-btn");
const resetButton = document.getElementById("reset-btn");
const defaultColor = "#f5f6fa";

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const color = event.currentTarget.dataset.color;
    document.body.style.backgroundColor = color;
  });
});

resetButton.addEventListener("click", () => {
  document.body.style.backgroundColor = defaultColor;
});
