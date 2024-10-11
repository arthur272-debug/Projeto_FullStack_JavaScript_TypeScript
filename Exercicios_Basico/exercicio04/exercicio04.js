// Exercício de variáveis

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

let auxiliar;

auxiliar = varA;
varA = varB;
varB = varC;
varC = auxiliar;

console.log(varA, varB, varC);