const numero = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");
const texto2 = document.getElementById("texto2");

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número - 2 é ${numero - 2}</p>`;
texto2.innerHTML = `<p>Seu número + 2 é ${numero + 2}</p>`;
