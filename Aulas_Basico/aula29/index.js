// aprendendo sobre o for in

const frutas = ["maçã", "banana", "laranja"];

const pessoas = {
  nome: "Lucas",
  idade: 25,
  cidade: "São Paulo",
};

for (let chave in pessoas) {
  console.log(chave, pessoas[chave]);
}

// for (let i in frutas) {
//   console.log(i);
// }
