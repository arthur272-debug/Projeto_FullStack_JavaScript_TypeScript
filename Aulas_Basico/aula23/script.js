// Aprendendo sobre o objeto Date

// const tres_horas = 60 * 60 * 3 * 1000; // 3 horas em milissegundos
// const um_dia = 60 * 60 * 24 * 1000; // 1 dia em milissegundos
// const data = new Date(0 + tres_horas);
// console.log(data.toString());

//const data = new Date(2025, 2, 30, 4, 0, 40, 0);
//const data = new Date("2023-05-13 07:06:32"); // mais usado
// const data = new Date(1745331815612); // mais usado
// console.log("Dia", data.getDate());
// console.log("Mês", data.getMonth() + 1);
// console.log("Ano", data.getFullYear());
// console.log("Hora", data.getHours());
// console.log("Minuto", data.getMinutes());
// console.log("Segundo", data.getSeconds());
// console.log("Miléssimo", data.getMilliseconds());
// console.log("Dia Semana", data.getDay());
// console.log(data.toString());

// console.log(Date.now());

function colocarZero_aEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formatarData(data) {
  const dia = colocarZero_aEsquerda(data.getDate());
  const mes = colocarZero_aEsquerda(data.getMonth() + 1);
  const ano = colocarZero_aEsquerda(data.getFullYear());
  const hora = colocarZero_aEsquerda(data.getHours());
  const minutos = colocarZero_aEsquerda(data.getMinutes());
  const segundos = colocarZero_aEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const data = new Date();
const data_Brasil = formatarData(data);
console.log(data_Brasil);
