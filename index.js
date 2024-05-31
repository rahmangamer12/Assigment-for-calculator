// Made calculator with inquirer
import inquirer from "inquirer";
// Ask question From User Through inquirer
let answers = await inquirer.prompt([
    {
        message: "Enter Your First Number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Enter your Second Number",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "Select your Operator to perform opretions",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        name: "operator"
    },
]);
// Conditional sataement if else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Input");
}
