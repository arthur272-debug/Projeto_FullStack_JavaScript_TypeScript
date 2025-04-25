// praticando a estrutura de switch/case
// terminar de assistir o vídeo da resolução do exercício

const h1 = document.querySelector(".container h1");
const data = new Date();

function escolherDiaDaSemana(dia) {
  switch (dia) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda-feira";
    case 2:
      return "Terça-feira";
    case 3:
      return "Quarta-feira";
    case 4:
      return "Quinta-feira";
    case 5:
      return "Sexta-feira";
    case 6:
      return "Sábado";
    default:
      return "Dia inválido!";
  }
}

function escolherMes(mes) {
  switch (mes) {
    case 0:
      return "Janeiro";
    case 1:
      return "Fevereiro";
    case 2:
      return "Março";
    case 3:
      return "Abril";
    case 4:
      return "Maio";
    case 5:
      return "Junho";
    case 6:
      return "Julho";
    case 7:
      return "Agosto";
    case 8:
      return "Setembro";
    case 9:
      return "Outubro";
    case 10:
      return "Novembro";
    case 11:
      return "Dezembro";
    default:
      return "Mês inválido!";
  }
}

const dia_semana = escolherDiaDaSemana(data.getDay());
const dia_mes = data.getDate();
const nome_mes = escolherMes(data.getMonth());
const ano = data.getFullYear();
const hora_completa = data.toLocaleTimeString("pt-BR", {
  hour12: false,
});
h1.innerHTML = `${dia_semana}, ${dia_mes} de ${nome_mes} de ${ano} <br> ${hora_completa}`;
