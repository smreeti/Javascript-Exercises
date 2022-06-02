var $ = function (id) {
    return document.getElementById(id);
};

const processEntry = () => {
    const changeDue = parseFloat($("cents").value);

    if (changeDue < 0 || changeDue > 99 || !(Number.isInteger(changeDue))) {
        alert("Change Due must be between 0 and 99.");
        $("cents").value = "";
    } else {
        makeChange(changeDue);
    }
}

const makeChange = (changeDue) => {
    const quarters = parseInt(changeDue / 25);
    changeDue = changeDue - (quarters * 25);

    const dimes = parseInt(changeDue / 10);
    changeDue = changeDue - (dimes * 10);

    const nickels = parseInt(changeDue / 5);
    changeDue = changeDue - (nickels * 5);

    const pennies = parseInt(changeDue);

    $("quarters").value = quarters;
    $("dimes").value = dimes;
    $("nickels").value = nickels;
    $("pennies").value = pennies;
}

const clearFields = () => {
    $("cents").value = '';
    $("quarters").value = '';
    $("dimes").value = '';
    $("nickels").value = '';
    $("pennies").value = '';
}

$("calculate").addEventListener("click", processEntry);
$("cents").addEventListener("click", clearFields);

