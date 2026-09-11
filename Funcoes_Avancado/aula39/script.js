// Aprendendo sobre retorno de funções
// function falaFrase(comeco) {
//   function falaRestoFrase(resto) {
//     return comeco + ", " + resto;
//   }
//   return falaRestoFrase;
// }

// const comeco = falaFrase("Bom dia");
// const fim = comeco("Senhoras e Senhores!");
// console.log(fim);

function definirMultiplicador(multiplicador) {
  return function (numero) {
    return numero * multiplicador;
  };
}

const duplica = definirMultiplicador(2);
const triplica = definirMultiplicador(3);
const quadriplica = definirMultiplicador(4);
const quintuplifica = definirMultiplicador(5);

console.log(duplica(10));
console.log(triplica(10));
console.log(quadriplica(10));
console.log(quintuplifica(10));
