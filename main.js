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
    if(counter !== 0) { // no need to update if already 0
        counter = 0;
        document.getElementById("count-value").innerHTML = counter;
        checkColorUpdate();
    }
}

// Check if background color need to be updated
function checkColorUpdate() {
    if (counter > 0) {
        setTheme("positive");
    } else if (counter < 0) {
        setTheme("negative");
    } else {
        setTheme("zero");
    }
}

// Changing the theme in CSS file
function setTheme(theme) {
    document.documentElement.className = theme;
}