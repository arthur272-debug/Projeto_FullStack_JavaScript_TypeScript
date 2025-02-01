// Revisão funções

// uma maneira de declarar uma função
// function DarSaudacao(nome) {
//   console.log(`Olá, ${nome}!`);
// }

// saudacao("Tuturito");
// saudacao("Jessicão");

// outra maneira de declarar uma função
// function DarSaudacao(nome) {
//   return `Olá, ${nome}!`;
// }

// const saudacao = DarSaudacao("Tuturito");
// console.log(saudacao);

// function somarValores(valor1, valor2) { // forma 'tradicional' de declarar uma função
//   const resultado = valor1 + valor2;
//   return resultado;
// }

// const somatorio = somarValores(10, 20); // função sem valor padrão
// console.log(somatorio);
// console.log(somarValores(100, 1000));

// function multiplicarValores(valor1 = 0, valor2 = 0) { // função com valor padrão
//   // forma 'moderna' de declarar uma função
//   const resultado = valor1 * valor2;
//   return resultado;
// }

// const multiplicacao = multiplicarValores(10, 20);
// console.log(multiplicacao);
// console.log(multiplicarValores());

// const raiz = function (n) { // função anônima
//   return n ** 0.5;
// };

// arrow function -0 mais moderna
const raiz = (n) => {
  return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(25));
