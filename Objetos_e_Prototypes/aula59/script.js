// Vendo os métodos úteis para objetos em JavaScript

// const produto = {
//   nome: "Notebook",
//   preco: 300.99,
// };
// const carro = { ...produto, combustivel: "Gasolina", ano: 2020 };
// const casa = Object.assign({}, produto, { quartos: 3, banheiros: 2 }); // outra forma de copiar um objeto
// const pet = {
//   nome: produto.nome,
//   preco: produto.preco,
//   especie: "Cachorro",
//   idade: 5,
// }; // outra forma de copiar um objeto

// produto.preco = 155.99;
// carro.preco = 200.99;
// casa.preco = 95000;
// pet.preco = 500.99;
// console.log(produto);
// console.log(carro);
// console.log(casa);
// console.log(pet);

// vendo sobre getOwnPropertyDescriptor
const trem = {
  locomotiva: "Diesel",
  vagao: "Passageiros",
  passageiros: 2200,
};
Object.defineProperty(trem, "passageiros", {
  writable: false,
  enumerable: true,
  configurable: false,
});
trem.passageiros = -1;
delete trem.passageiros;
console.log(Object.getOwnPropertyDescriptor(trem, "locomotiva"));
console.log(Object.getOwnPropertyDescriptor(trem, "passageiros"));
//console.log(Object.values(trem));
console.log(Object.entries(trem));
//console.log(Object.keys(trem));
