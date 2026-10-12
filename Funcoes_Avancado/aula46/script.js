// Aprendendo sobre funções recursivas em JavaScript

function contarRegressivamente(numero) {
  if (numero < 0) {
    return; // Condição de parada
  }
  console.log(numero);
  contarRegressivamente(numero - 1); // Chamada recursiva
}

contarRegressivamente(500);
