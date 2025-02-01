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

function somarValores(valor1, valor2) {
  const resultado = valor1 + valor2;
  return resultado;
}

const somatorio = somarValores(10, 20);
console.log(somatorio);
console.log(somarValores(100, 1000));
