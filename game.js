import inquirer from "inquirer";
let favouriteNumber = 70;
let guessingNumber = await inquirer.prompt([
    {
        message: "Enter Your Number",
        type: "number",
        name: "YourGuess",
    },
]);
if (guessingNumber.YourGuess < 70) {
    console.log("opp's! your Number is too Low ");
}
else if (guessingNumber.YourGuess > 70) {
    console.log("opp's! your Number is too High ");
}
else if (guessingNumber.YourGuess === 70) {
    console.log("Congratulation! You Guess Correct Number ");
}
else {
    console.log("Try Again !!!!!!!!!!");
}
