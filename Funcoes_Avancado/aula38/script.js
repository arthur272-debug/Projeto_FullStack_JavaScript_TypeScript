//Aprendendo sobre os parâmetros e argumentos de uma função
function aleatorio() {
  console.log(arguments);
}

//aleatorio(1, 2, 3, 4, 5, "Hello World!"); // Chamada da função "aleatorio" com argumentos

function aleatorio2(a, b, c, d, e) {
  console.log(a, b, c, d, e);
}

//aleatorio2(1, 2, 3); // Chamada da função "aleatorio2" com apenas 3 argumentos, os outros serão undefined

function aleatorio3(a = 100, b, c, d = 20, e = -1) {
  console.log(a + b + c + d + e);
}

//aleatorio3(null, 30, 9); // Chamada da função "aleatorio3" com alguns argumentos, os outros serão os valores padrão

//desestruturação de objetos
function desestruturarObjeto({ nome, idade, cidade }) {
  console.log(nome, idade, cidade);
}

obj = { nome: "João", idade: 25, cidade: "São Paulo" };
//desestruturarObjeto(obj); // Chamada da função "desestruturarObjeto" passando um objeto como argumento

//desestruturação de arrays
function desestruturarArray([a, b, c]) {
  console.log(a, b, c);
}

//desestruturarArray(["Tutu", "Tata", "Tete"]); // Chamada da função "desestruturarArray" passando um array como argumento

//acumulador simples
function fazerCalculos(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "*") acumulador *= numero;
    if (operador === "/") acumulador /= numero;
  }
  return acumulador;
}

fazerCalculos("+", 0, 20, 30, 40, 50); // Chamada da função "fazerCalculos" com operador de soma e acumulador inicial 0
fazerCalculos("*", 1, 2, 3, 4, 5); // Chamada da função "fazerCalculos" com operador de multiplicação e acumulador inicial 1
