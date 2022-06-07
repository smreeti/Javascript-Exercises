"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function () {
    $("calculate").onclick = processEntry;
};

function processEntry() {
    const income = $("income").value;
    if (isNaN(income) || income < 0) {
        alert("Taxable income must be greater than zero");
    } else {
        $("tax").value = parseFloat(calculateTax(income)).toFixed(2);
    }
    $("income").focus();
}

const calculateTax = (income) => {
    let incomeTax, excessOverAmount;
    income = parseInt(income);
    if (income >= 0 && income <= 9275) {
        excessOverAmount = income - 0;
        incomeTax = excessOverAmount * 10 / 100;
    } else if (income > 9275 && income <= 37650) {
        excessOverAmount = income - 9275;
        incomeTax = 927.50 + (15 * excessOverAmount) / 100;
    } else if (income > 37650 && income <= 91150) {
        excessOverAmount = income - 37650;
        incomeTax = 5183.75 + (25 * excessOverAmount) / 100;
    } else if (income > 91150 && income <= 190150) {
        excessOverAmount = income - 91150;
        incomeTax = 18558.75 + (28 * excessOverAmount) / 100;
    } else if (income > 190150 && income <= 413350) {
        excessOverAmount = income - 190150;
        incomeTax = 46278.75 + (33 * excessOverAmount) / 100;
    } else if (income > 413350 && income <= 415050) {
        excessOverAmount = income - 413350;
        incomeTax = 119934.75 + (35 * excessOverAmount) / 100;
    } else if (income > 415050) {
        excessOverAmount = income - 415050;
        incomeTax = 120529.75 + (39.6 * excessOverAmount) / 100;
    }
    return incomeTax;
}