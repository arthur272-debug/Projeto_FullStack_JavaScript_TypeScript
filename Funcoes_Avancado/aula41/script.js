// Revisando sobre closures

function multiplicarFator(n) {
  return function () {
    return n * n;
  };
}

funcao = multiplicarFator(2);
funcao2 = multiplicarFator(3);

console.dir(funcao);
console.dir(funcao2);

console.log(funcao());
console.log(funcao2());
