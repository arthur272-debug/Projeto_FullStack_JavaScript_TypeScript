//Aula prática -> exercício calculadora
function criarCalculadora() {
  return {
    display: document.querySelector(".display"),
    clear: document.querySelector(".btn-clear"),

    inicia() {
      this.cliqueBotoes();
    },

    limparDisplay() {
      this.display.value = "";
    },

    limparCaracter() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizarConta() {
      let conta = this.display.value;
      try {
        conta = eval(conta);
        if (!conta) {
          alert("Conta inválida");
          return;
        }
      } catch (e) {
        alert("Conta inválida");
        return;
      }
      this.display.value = conta;
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) this.mostrarDisplay(el.innerText);
        if (el.classList.contains("btn-clear")) this.limparDisplay();
        if (el.classList.contains("btn-dell")) this.limparCaracter();
        if (el.classList.contains("btn-equal")) this.realizarConta();
      });
    },

    mostrarDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criarCalculadora();
calculadora.inicia();
