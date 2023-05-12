const prompt = require("prompt-sync")({ sigint: true});

let entrada = prompt("Quantos números da Sequencia de Fibonacci você deseja ver? ");

let numA = 0;
let numB = 1;
let numC = 0;
let fibonacci = "";

fibonacci = numA + " " + numB;

for (let contador = 1; contador <= entrada; contador++){
    numC = numA + numB;
    fibonacci += " " + numC
    numA = numB
    numB = numC
}
console.log(fibonacci);
