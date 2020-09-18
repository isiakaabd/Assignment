// to ensure a number is entered when it prompts
do {
    inputNumber1 = parseInt(prompt("Enter the first value"));
    inputNumber2 = parseInt(prompt("Enter the second value value"));
    // entering a number
}
while (!inputNumber1 || !inputNumber2)



// function to use calculator
//function expression

function calculator(number1, number2) {
    // to ensure one of the four options are selected and a number not on the list isn't imputed
    do {
        calcOperatioon = parseInt(prompt("Welcome to REMLAD SERVICE \n\n Pls select the operation you want to do \n 1. addition \n 2. subtraction \n 3. multiplication \n 4. Division "))
    }
    while (!calcOperatioon || calcOperatioon > 4)

    // checking with the if-statement
    // var love = function (calcOperatioon){
    //     if calcOperatioon===
    // }
    // 
    // 
    //     
    var operation, display;
    if (calcOperatioon === 1) {
        operation = (number1 + number2);
        display = `${number1} +  ${number2} `

    } else if (calcOperatioon === 2) {
        operation = number1 - number2;
        display = `${number1} -  ${number2} `
    } else if (calcOperatioon === 3) {
        operation = number1 * number2
        display = `${number1} ×  ${number2} `;

    } else if (calcOperatioon === 4) {
        operation = (number1 / number2);
        display = `${number1} /  ${number2} `
    }
    return `${display} = ${operation} `;













}















// function calling
alert(calculator(inputNumber1, inputNumber2))