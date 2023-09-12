// Makj0005

////////////////////////////////////////
// Const for section and button elements
const sectionElement = document.querySelector("section");
const buttonElements = document.querySelectorAll("ul li button");

// Color palette from CSS when counter > 0
const colorPositiveDark = getComputedStyle(document.documentElement).getPropertyValue("--color-positive-dark");
const colorPositiveMedium = getComputedStyle(document.documentElement).getPropertyValue("--color-positive-medium");
const colorPositiveLight = getComputedStyle(document.documentElement).getPropertyValue("--color-positive-light");

// Color palette from CSS when counter < 0
const colorNegativeDark = getComputedStyle(document.documentElement).getPropertyValue("--color-negative-dark");
const colorNegativeMedium = getComputedStyle(document.documentElement).getPropertyValue("--color-negative-medium");
const colorNegativeLight = getComputedStyle(document.documentElement).getPropertyValue("--color-negative-light");

// Color palette from CSS when counter = 0
const colorZeroDark = getComputedStyle(document.documentElement).getPropertyValue("--color-zero-dark");
const colorZeroMedium = getComputedStyle(document.documentElement).getPropertyValue("--color-zero-medium");
const colorZeroLight = getComputedStyle(document.documentElement).getPropertyValue("--color-zero-light");

// Current button color and current hover color (default is colorZeroDark and colorZeroLight)
let currentHoverButtonColor = colorZeroDark;
let currentButtonColor = colorZeroLight;
////////////////////////////////////////

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
    if(counter !== 0) { // no need to update if already 0
        counter = 0;
        document.getElementById("count-value").innerHTML = counter;
        checkColorUpdate();
    }
}

// Check if background color need to be updated
function checkColorUpdate() {
    if (counter > 0) {
        changeSectionColor(colorPositiveMedium);
        changeButtonsColor(colorPositiveLight);
        changeButtonHoverColor(colorPositiveLight,colorPositiveDark)
    } else if (counter < 0) {
        changeSectionColor(colorNegativeMedium);
        changeButtonsColor(colorNegativeLight);
        changeButtonHoverColor(colorNegativeLight,colorNegativeDark)
    } else {
        changeSectionColor(colorZeroMedium);
        changeButtonsColor(colorZeroLight);
        changeButtonHoverColor(colorZeroLight,colorZeroDark)
    }
}

function changeSectionColor(color) {
    sectionElement.style.backgroundColor = color;
    sectionElement.style.transition = "background-color 0.15s";
}

function changeButtonsColor(color) {
    buttonElements.forEach((button) => {
        button.style.backgroundColor = color;
        button.style.transition = "background-color 0.15s";
    });
}

function changeButtonHoverColor(currentColor,hoverColor){
    currentButtonColor = currentColor;
    currentHoverButtonColor = hoverColor;
}

/* Hover method needed to be made with javascript, thus
 it overrides the pseudo :hover in css, when changing button background */
function hoverEffect() {
    this.style.transition = "background-color 0.15s";
    this.style.backgroundColor = currentHoverButtonColor;
}

function endHoverEffect() {
    this.style.backgroundColor = currentButtonColor;
}

// Attach event listeners to apply and remove the hover effect for each button
buttonElements.forEach(function (button) {
    button.addEventListener("mouseover", hoverEffect);
    button.addEventListener("click", hoverEffect); // Needed to keep the hover-effect when color is updated
    button.addEventListener("mouseout", endHoverEffect);
});
