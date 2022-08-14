const inquirer = require("inquirer");

inquirer.prompt([
    {
        name: "p1",
        message: "Qual a primeira nota?",
    }, 
    {
        name: "p2",
        message: "Qual a segunda nota?",
    }
]).then((answers) => {
    console.log(`Nota 1: ${answers.p1} e a Nota 2: ${answers.p2}`);

    const media = (parseFloat(answers.p1) + parseFloat(answers.p2)) / 2;

    console.log(`A sua média é: ${media}`);

}).catch(err => console.log(err));