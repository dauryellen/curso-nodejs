// módulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");


// módulos internos
const fs = require("fs");

operation();

function operation() {

    /**
     *  ===> Mais operações
     *    ==> transferência de conta
     *    ==> cheque especial
     * 
     */
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "O que você deseja fazer?",
            choices: [
                "Criar Conta",
                "Consultar Saldo",
                "Depositar",
                "Sacar",
                "Transferir",
                "Solicitar Cheque Especial",
                "Sair"
            ],
        },
    ])
    .then((answer) => {
        const action = answer["action"];

        if (action === "Criar Conta") {
            createAccount();
        } else if (action === "Consultar Saldo") {
            getAccountBalance();
        } else if (action === "Depositar") {
            deposit();
        } else if (action === "Sacar") {
            withdraw();
        } else if(action === "Transferir") {
            console.log("Transferência");
        } else if(action === "Cheque Especial") {
            overdraft();
        } else if(action === "Excluir Conta") {
            console.log("Excluir");
        } else if(action === "Sair") {
            exitAccount();
        }
    })
    .catch((err) => console.log(err));
}

// create an account
function createAccount() {
    console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco!"));
    console.log(chalk.green("Defina as opções da sua conta a seguir"));

    buildAccount();
}

function buildAccount() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Digite um nome para a sua conta:"
        }
    ])
    .then((answer) => {
        const accountName = answer["accountName"];
        
        // verify if name is empty
        if (nameIsEmpty(accountName)) {
            buildAccount();
            return;
        }

        if (!fs.existsSync("accounts")) {
            fs.mkdirSync("accounts");
        } 
        
        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black("Esta conta já existe. Escolha outro nome."));

            buildAccount();
            return;
        }

        fs.writeFileSync(`accounts/${accountName}.json`, `{ "balance": 0, "overdraft": false }`, (err) => console.log(err));

        console.log(chalk.green(`Parabéns! A sua conta ${accountName} foi criada com sucesso.`));

        operation();
    })
    .catch((err) => console.log(err));
}

// show account balance 
function getAccountBalance() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Qual o nome da sua conta?"
        }
    ]).then((answer) => {
        const accountName = answer["accountName"];
        
        // verify if name is empty and verify if account exists
        if (nameIsEmpty(accountName)) {
            return getAccountBalance();
        } else if (!checkAccountExists(accountName)) {
            return getAccountBalance();
        }

        const accountData = getAccount(accountName);

        console.log(chalk.bgBlue.black(
            `Olá ${accountName}, o saldo da sua conta é de R$${accountData.balance}.`
        ));

        operation();

    }).catch((err) => console.log(err));
}

// add an amount to user account
function deposit() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Qual o nome da sua conta?"
        }
    ])
    .then((answer) => {
        const accountName = answer["accountName"];

        // verify if account exists
        if(!checkAccountExists(accountName)) {
            return deposit();
        }

        inquirer.prompt([
            {
                name: "amount",
                message: "Quanto você deseja depositar?",
            }
        ]).then((answer) => {
            const amount = answer["amount"];

            // add an amount
            addAmount(accountName, amount);

            operation();
        }).catch((err) => console.log(err));

    })
    .catch((err) => console.log(err));
}

// add an amount
function addAmount(accountName, amount) {
    const accountData = getAccount(accountName);

    if (!amount) {
        console.log(chalk.bgRed.black.bold("Ocorreu um erro, tente novamente mais tarde."));
        return deposit();
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err);
        },
    );

    console.log(chalk.green(`Foi depositado o valor de R$${amount} na sua conta.`));

}

// withdraw an amount from user account
function withdraw() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Qual o nome da sua conta?"
        }
    ])
    .then((answer) => {
        const accountName = answer["accountName"];
        
        // verify if name is empty and verify if account exists
        if (nameIsEmpty(accountName)) {
            return withdraw();
        } else if (!checkAccountExists(accountName)) {
            return withdraw();
        }

        inquirer.prompt([
            {
                name: "amount",
                message: "Quanto você deseja sacar da sua conta?"
            }
        ])
        .then((answer) => {
            const amount = answer["amount"];

            removeAmount(accountName, amount);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

// remove amount
function removeAmount(accountName, amount) {
    const accountData = getAccount(accountName);

    if (!amount) {
        console.log(chalk.bgRed.black("O valor não pode estar vazio."));

        return withdraw();
    }

    if (accountData.balance < amount) {
        console.log(chalk.bgRed.black("Valor indisponível"));

        return withdraw();
    }

    if (amount <= 0) {
        console.log(chalk.bgRed.black("O valor precisa ser maior que zero."));

        return withdraw();
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), (err) => console.log(err));

    console.log(chalk.green(`Foi realizado um saque no valor de R$${amount} da sua conta.`));

    operation();
}

// overdraft
function overdraft() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Qual o nome da sua conta?"
        }
    ])
    .then((answer) => {
        console.log("Cheguei aqui");
    })
    .catch((err) => console.log(err));
}

// exit account
function exitAccount() {
    console.log(chalk.bgBlue.black.bold("Obrigado por usar o Accounts!"));
    process.exit();
}

// check account exists
function checkAccountExists(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black.bold("Esta conta não existe. Tente novamente."));
        return false;
    }
    return true;
}

// check account name is empty
function nameIsEmpty(accountName) {
    if (accountName === "") {
        console.log(chalk.bgRed.black.bold("O nome da conta é obrigatório. Tente novamente."));
        return true;
    }
    return false;
}

// get account an user
function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: "utf-8",
        flag: "r",
    });

    return JSON.parse(accountJSON);
}