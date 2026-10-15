//Aprendendo sobre funções geradoras em JavaScript

function* geradora1() {
  yield "Valor 1";
  yield "Valor 2";
  yield "Valor 3";
}

function* geradora2() {
  yield* geradora1();
  yield "Valor 4";
  yield "Valor 5";
  yield "Valor 6";
}

const g2 = geradora2();
for (let valor of g2) {
  console.log(valor);
}
