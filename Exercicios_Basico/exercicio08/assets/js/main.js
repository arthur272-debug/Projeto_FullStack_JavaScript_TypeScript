function processarDadosform() {
  const peso = document.querySelector(".peso").value;
  const altura = document.querySelector(".altura").value;
  const resultado = document.querySelector(".resultado_icm");
  const erros = document.querySelector(".dados_erros");

  if (peso > 300 || peso < 0) {
    erros.innerHTML = `Peso inválido`;
  } else if (altura > 3 || altura < 0) {
    erros.innerHTML = `Altura inválida`;
  } else if (peso && altura) {
    let imc = peso / (altura * altura);
    resultado.innerHTML = classificarIMC(imc);
  } else {
    erros.innerHTML = `Preencha corretamente os campos`; ///verificar condição
  }
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return `O IMC é: ${imc} e está abaixo do peso`;
  } else if (imc >= 18.5 && imc < 24.9) {
    return `O IMC é: ${imc} e está com o peso normal`;
  } else if (imc >= 25 && imc < 29.9) {
    return `O IMC é: ${imc} e está com sobrepeso`;
  } else if (imc >= 30 && imc < 34.9) {
    return `O IMC é: ${imc} e está com obesidade grau 1`;
  } else if (imc >= 35 && imc < 39.9) {
    return `O IMC é: ${imc} e está com obesidade grau 2`;
  } else {
    return `O IMC é: ${imc} e está com obesidade grau 3`;
  }
}

processarDadosform();
