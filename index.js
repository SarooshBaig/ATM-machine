import inquirer from "inquirer";
let myBalance = 100000; //Dollar
let myPin = 33297;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin ",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("correct pin code !!!");
}
;
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option ",
        type: "list",
        choices: ["withdraw ", " check balance", "Deposit"],
    },
]);
console.log(operationAns);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number",
        },
    ]);
    console.log(amountAns);
    myBalance -= amountAns.amount;
    console.log("your remaining balance is :" + myBalance);
}
else if (operationAns.operation === "check balance") {
    console.log("your balance is:" + myBalance);
}
else {
    console.log("incorrect pin code !!!");
}
