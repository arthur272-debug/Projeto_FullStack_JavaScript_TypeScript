// Aula prática -> exercício calculadora - constructor function

function Calculadora() {
  this.display = document.querySelector(".display");
  this.clear = document.querySelector(".btn-clear");

  this.apertarBotoes = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) this.mostrarDisplay(el);
      if (el.classList.contains("btn-clear")) this.limparDisplay();
      if (el.classList.contains("btn-dell")) this.limparCaracter();
      if (el.classList.contains("btn-equal")) this.realizarConta();
    });
  };

  this.mostrarDisplay = (el) => (this.display.value += el.innerText);
  this.limparDisplay = () => (this.display.value = "");
  this.limparCaracter = () =>
    (this.display.value = this.display.value.slice(0, -1));
  this.realizarConta = () => {
    let conta = this.display.value;
    try {
      if (!conta) {
        alert("Conta inválida");
        conta = "";
      }
      conta = eval(conta);
    } catch (e) {
      alert("Conta inválida");
      conta = "";
    }
    this.display.value = conta;
  };
  this.iniciarCalculadora = () => this.apertarBotoes();
}

const calculadora = new Calculadora();
calculadora.iniciarCalculadora();
