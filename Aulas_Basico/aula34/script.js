// Revisando sobre o tratamento e lançamento de erros(try,catch,throw) - parte 1

// try {
//   console.log(ab);
// } catch (erro) {
//   console.log("Variável não declarada");
//   console.log(erro);
// }

function somarNumeros(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new ReferenceError("Ambos os parâmetros devem ser números.");
  }
  return x + y;
}

try {
  console.log(somarNumeros(2, 3));
  console.log(somarNumeros("a", 60));
} catch (error) {
  console.log(error);
}
