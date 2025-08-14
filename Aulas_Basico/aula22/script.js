// Aprendendo sobre a operação ternária

const pontuacaoUsuario = 999;
const nivelUsuario =
  pontuacaoUsuario >= 1000
    ? "O status do usuário é VIP"
    : "O status do usuário é Normal";

const respostaUsuario = null;
const respostaPadrao = respostaUsuario || "Não há resposta"; // outra forma de usar a operação ternária

console.log(nivelUsuario, respostaPadrao);