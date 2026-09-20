//Aprendendo sobre as funções imediatas - IIFE (Immediately Invoked Function Expression)
(function fazerSaudacao() {
  const nome = "John";
  console.log("Olá, meu nome é " + nome);
})(30, 20, 40);

function fazerSaudacao() {
  const nome = "Paul";
  console.log("Olá, meu nome é " + nome);
}

fazerSaudacao();
