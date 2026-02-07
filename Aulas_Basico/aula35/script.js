// Revisando sobre o tratamento e lançamento de erros(try,catch,finally) - parte 2

function retornarHoraAtual(date) {
  if (date && !(date instanceof Date)) {
    throw new TypeError("Instância inválida com o tipo Date.");
  }
  if (!date) {
    date = new Date();
  }

  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

try {
  const hora1 = retornarHoraAtual();
  const hora2 = retornarHoraAtual("teste");
  console.log(hora1);
  console.log(hora2);
} catch (e) {
  if (e instanceof TypeError) {
    console.log("Ocorreu um erro de tipagem: " + e.message);
  } else {
    console.log("Ocorreu um erro inesperado: " + e.message);
  }
} finally {
  console.log("Programa finalizado.");
}
