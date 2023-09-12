// Makj0005

// Counter starts at zero
let counter = 0;

// Making a function for increase button
function increase() {
    counter++;
    document.getElementById("count-value").innerHTML = counter;
    if (counter === 0 || counter === 1) // no need to update at numbers higher than 1
        checkColorUpdate(counter);
}

// Making a function for decrease button
function decrease() {
    counter--;
    document.getElementById("count-value").innerHTML = counter;
    if (counter === 0 || counter === -1) // no need to update at numbers lower than -1
        checkColorUpdate(counter);
}

// Making a reset function for reset button
function reset() {
    counter = 0;
    document.getElementById("count-value").innerHTML = counter;
    checkColorUpdate();
}

// Color palette from CSS when counter > 0
let colorPositiveDark = getComputedStyle(document.documentElement).getPropertyValue("--color-positive-dark");
let colorPositiveMedium = getComputedStyle(document.documentElement).getPropertyValue("--color-positive-medium");
let colorPositiveLight = getComputedStyle(document.documentElement).getPropertyValue("--color-positive-light");

// Color palette from CSS when counter < 0
let colorNegativeDark = getComputedStyle(document.documentElement).getPropertyValue("--color-negative-dark");
let colorNegativeMedium = getComputedStyle(document.documentElement).getPropertyValue("--color-negative-medium");
let colorNegativeLight = getComputedStyle(document.documentElement).getPropertyValue("--color-negative-light");

// Color palette from CSS when counter < 0
let colorZeroDark = getComputedStyle(document.documentElement).getPropertyValue("--color-zero-dark");
let colorZeroMedium = getComputedStyle(document.documentElement).getPropertyValue("--color-zero-medium");
let colorZeroLight = getComputedStyle(document.documentElement).getPropertyValue("--color-zero-light");

// Check if background color need to be updated
function checkColorUpdate() {
    console.log("UPDATED AT:", counter)
    if (counter > 0) {
        changeSectionColor(colorPositiveMedium);
        changeButtonsColor(colorPositiveLight);
    } else if (counter < 0) {
        changeSectionColor(colorNegativeMedium);
        changeButtonsColor(colorNegativeLight);
    } else {
        changeSectionColor(colorZeroMedium);
        changeButtonsColor(colorZeroLight);
    }
}

// Const for section and button elements
const sectionElement = document.querySelector("section");
const buttonElements = document.querySelectorAll("ul li button");

function changeSectionColor(color) {
    sectionElement.style.backgroundColor = color;
}

function changeButtonsColor(color) {
    buttonElements.forEach((button) => {
        button.style.backgroundColor = color;
    });
}
