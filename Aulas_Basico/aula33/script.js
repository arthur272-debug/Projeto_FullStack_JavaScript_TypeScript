// aprendendo sobre o Break e Continue
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
  if (numero === 2) {
    console.log("Número 2 pulado");
    continue;
  }
  console.log(numero);

  if (numero === 9) {
    console.log("9 encontrado, saindo...");
    break;
  }
}
console.log("Fim do loop");

while (true) {
  let numero = Math.floor(Math.random() * 10) + 1;
  console.log("Número aleatório:", numero);
  if (numero === 2) {
    console.log("Número 2 pulado");
    numero = Math.floor(Math.random() * 10) + 1;
    continue;
  }

  if (numero === 5) {
    console.log("5 encontrado, saindo...");
    break;
  }
}
