// Aprendendo as maneiras de declarar uma função
//Declaração de função (Function Hoisting)
function saudacao() {
  console.log("Olá, seja bem-vindo!");
}

// First-class objects (Objetos de primeira classe)
// Function expression
const nome = function () {
  console.log("Meu nome é João.");
};

//Arrow function
const somarParcela = (a, b) => {
  return a + b;
};

//Dentro de um objeto
const pessoa = {
  nome: "Maria",
  idade: 30,
  apresentar: function () {
    console.log(
      `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos de idade.`,
    );
  },
};

saudacao(); // Chamada da função de saudação
nome(); // Chamada da função de expressão
console.log(somarParcela(5, 10)); // Chamada da função de soma
pessoa.apresentar(); // Chamada da função dentro do objeto pessoa
