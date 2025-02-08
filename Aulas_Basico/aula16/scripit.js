// revisando sobre objetos - básico

// uma das formas de criar um objeto
// const pessoal = {
//   nome: "Tuturito",
//   sobrenome: "Silvana",
//   idade: 65,
// };
// console.log(`Nome: ${pessoal.nome}`);
// console.log(`Idade: ${pessoal.idade}`);
// console.log(pessoal);

function criarPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

pessoa1 = criarPessoa("Tuturito", "Silvana", 65);
pessoa2 = criarPessoa("Joãozinho", "Ribeiro", 98);
pessoa3 = criarPessoa("Passarinho", "Sodré", 23);

console.log(pessoa1.nome, pessoa2.nome);
