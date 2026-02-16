function cronometrarRelogio() {
  const relogio = document.querySelector(".relogio");
  let segundos = 0;
  let timer;

  document.addEventListener("click", function (event) {
    const elemento = event.target;
    if (elemento.id === "iniciar_contagem") {
      relogio.style.color = "black";
      clearInterval(timer);
      iniciarContagem();
    }
    if (elemento.id === "parar_contagem") {
      clearInterval(timer);
      relogio.style.color = "red";
    }
    if (elemento.id === "zerar_contagem") {
      relogio.style.color = "black";
      clearInterval(timer);
      segundos = 0;
      relogio.innerHTML = criaHoraFormatada(segundos);
    }
  });

  function criaHoraFormatada(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  function iniciarContagem() {
    timer = setInterval(() => {
      segundos++;
      relogio.innerHTML = criaHoraFormatada(segundos);
    }, 1000);
  }
}

cronometrarRelogio();
