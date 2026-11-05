// aprendendo sobre reduce em arrays -> utilizado para reduzir um array a um único valor
// -> acumulando os valores do array em uma única variável

const numbers = [1, 90, 4, 5, 6, 7, 8, 9, 10];

const multiplicacao = numbers.reduce((acumulator, currentValue) => {
  return (acumulator += 2 * currentValue);
}, 0);

console.log(multiplicacao);
