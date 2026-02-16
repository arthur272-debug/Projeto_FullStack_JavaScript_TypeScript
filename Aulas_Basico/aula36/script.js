// relembrando sobre setInterval e setTimeout

function mostrarHoraAtual() {
  const data = new Date();
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

const hora_atual = setInterval(function () {
  console.log(mostrarHoraAtual());
}, 1000);

setTimeout(function () {
  clearInterval(hora_atual);
}, 5000);

setTimeout(function () {
  console.log("Tempo esgotado!");
}, 7000);
