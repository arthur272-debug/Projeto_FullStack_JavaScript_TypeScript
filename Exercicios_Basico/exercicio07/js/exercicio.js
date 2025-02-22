// Exercício sobre array, objeto e função
function analisarDadosForm() {
  const form = document.querySelector(".form");

  function receberEventoForm(event) {
    event.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    
  }

  form.addEventListener("submit", receberEventoForm);
}
analisarDadosForm();
