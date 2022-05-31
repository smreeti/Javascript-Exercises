let numberGrade = 0;

do {
    numberGrade = parseInt(prompt("Enter number grade from 0 through 100 \nOr enter 999 to end entries temperature", 999));

    if (isNaN(numberGrade)) {
        alert("Please enter a valid number");
    } else if (numberGrade >= 0 && numberGrade <= 100) {
        //call function to convert number grade to letter grade
        let letterGrade = convertNumberToLetterGrade(numberGrade);
        alert(`Number grade = ${numberGrade}\nLetter Grade is ${letterGrade}`);
    }
} while (numberGrade != 999);

function convertNumberToLetterGrade(numberGrade) {
    if (numberGrade >= 88 && numberGrade <= 100) {
        return "A";
    } else if (numberGrade >= 80 && numberGrade <= 87) {
        return "B";
    } else if (numberGrade >= 68 && numberGrade <= 79) {
        return "C";
    } else if (numberGrade >= 60 && numberGrade <= 67) {
        return "D";
    } else if (numberGrade < 60) {
        return "F";
    }
}