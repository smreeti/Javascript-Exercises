var $ = function (id) {
    return document.getElementById(id);
};

document.addEventListener("DOMContentLoaded", () => {
    //event handler that gets the user entries, calculates the sales tax and total and displays in the text box
    $("calculate").addEventListener("click", processEntries);

    //event handler to clear all text boxes
    $("clear").addEventListener("click", clear);

    //event handler to clear data from subtotal text box
    $("subtotal").addEventListener("click", () => $("subtotal").value = "");

     //event handler to clear data from tax_rate text box
    $("tax_rate").addEventListener("click", () => $("tax_rate").value = "");

    //move the cursor to subtotal field by default
    $("subtotal").focus();
});

const calculateSalesTax = (subTotal, taxRate) => (subTotal * (taxRate / 100));
const calculateTotal = (subTotal, salesTax) => (subTotal + salesTax);


const processEntries = () => {
    const subTotal = parseFloat($("subtotal").value);
    const taxRate = parseFloat($("tax_rate").value);

    if (isNaN(subTotal) || subTotal < 0 || subTotal > 10000) {
        alert("Subtotal must be > 0 and < 10000");
        clear();
    } else if (isNaN(taxRate) || taxRate < 0 || taxRate > 12) {
        alert("Tax rate must be >0 and < 12");
        clear();
    } else {
        const salesTax = parseFloat(calculateSalesTax(subTotal, taxRate)).toFixed(2);
        $("sales_tax").value = salesTax;
        $("total").value = parseFloat(calculateTotal(subTotal, salesTax)).toFixed(2);
    }
};

const clear = () => {
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
    $("subtotal").focus();
};



