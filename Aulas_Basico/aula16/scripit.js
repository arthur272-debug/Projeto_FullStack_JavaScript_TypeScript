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

// uma outra forma de criar um objeto
// function criarPessoa(nome, sobrenome, idade) {
//   return { nome: nome, sobrenome: sobrenome, idade: idade };
// }

// pessoa1 = criarPessoa("Tuturito", "Silvana", 65);
// pessoa2 = criarPessoa("Joãozinho", "Ribeiro", 98);
// pessoa3 = criarPessoa("Louisa", "Young", 23);
// pessoa4 = criarPessoa("Blake", "Campbell", 28);
// pessoa5 = criarPessoa("Rachel Brady", "Casey", 46);

// console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);

const pessoa_1 = {
  nome: "Tuturito",
  sobrenome: "Silvana",
  idade: 25,

  fazerDescricao() {
    return console.log(
      `Meu nome é ${this.nome} ${this.sobrenome}, tenho ${this.idade} anos.`
    );
  },

  aumentarIdade() {
    this.idade++;
  },
};

pessoa_1.fazerDescricao();
pessoa_1.aumentarIdade();
pessoa_1.fazerDescricao();
