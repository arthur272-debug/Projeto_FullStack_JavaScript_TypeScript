// exercício sobre lógica de programação
// -> Escreva uma função que receba 2 números e retorne o maior deles

function maiorNumero(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

const maiorNumero2 = (num1, num2) => (num1 > num2 ? num1 : num2); // arrow function

console.log(maiorNumero(5, 10)); // 10
console.log(maiorNumero(20, 15)); // 20

console.log(maiorNumero2(50, 10)); // 50
console.log(maiorNumero2(1, 15)); // 15
