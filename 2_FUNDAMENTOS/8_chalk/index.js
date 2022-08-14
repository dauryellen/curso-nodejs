const chalk = require("chalk");

const nota = 5;

if(nota >= 7){
    console.log(chalk.green("Parabéns! Vocẽ está aprovado."));
} else {
    console.log(chalk.bgRed.black.bold("Você precisa fazer a prova de recuperação."));
}