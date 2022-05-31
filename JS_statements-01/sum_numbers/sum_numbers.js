let tryAgain = 'y';

do {
    const inputNumber = parseInt(prompt("Enter any top number to sum from 1 through 100"));

    if (isNaN(inputNumber)) {
        alert("Please enter a valid number");
    } else if (inputNumber < 1 || inputNumber > 100) {
        alert("Please enter a number from 1 through 100");
    } else {
        //calculate sum of the numbers
        let sum = calculateSum(inputNumber);
        alert(`The sum of the numbers from 1 through ${inputNumber} is ${sum}`);
        tryAgain = prompt(`Do another sum?`);
    }
} while (tryAgain == 'y');

function calculateSum(inputNumber) {
    let sum = 0;

    for (let i = 0; i <= inputNumber; i++) {
        sum += i;
    }
    return sum;
}

