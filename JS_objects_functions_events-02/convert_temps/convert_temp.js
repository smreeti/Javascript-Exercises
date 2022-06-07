"use strict";
var $ = function (id) { return document.getElementById(id); };

var clearTextBoxes = function () {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

window.onload = function () {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
    $("degrees_entered").focus();
};

const toFahrenheit = () => {
    clearTextBoxes();
    $("degree_label_1").innerHTML = "Enter C Degrees";
    $("degree_label_2").innerHTML = "Degrees Fahrenheit:";
    $("degrees_entered").focus();
}

const toCelsius = () => {
    clearTextBoxes();
    $("degree_label_1").innerHTML = "Enter F Degrees";
    $("degree_label_2").innerHTML = "Degrees Celsius:";
    $("degrees_entered").focus();
}

const convertTemp = () => {
    const degreesEntered = parseFloat($("degrees_entered").value);
    if (isNaN(degreesEntered)) {
        alert("You must enter a valid number for degrees.");
        clearTextBoxes();
    } else {
        let toCelsius = $('to_celsius').checked;
        let degreeComputed = toCelsius ? convertFahrenheitToCelsuis(degreesEntered) : convertCelsiusToFahrenheit(degreesEntered);
        $("degrees_computed").value = parseFloat(degreeComputed).toFixed(0);
    }
}

const convertFahrenheitToCelsuis = fahrenheit => ((fahrenheit - 32) * 5 / 9);


const convertCelsiusToFahrenheit = celsius => ((celsius * 9 / 5) + 32);



