// revisando a estrutura de repetição for (clássico)

// for (let i = 0; i < 2000; i++) {
//   console.log(`Número ${i}`);
// }

// for (let i = 0; i <= 100; i++) {
//   let numero_par = i % 2 === 0;
//   console.log(numero_par ? `Número ${i} é par` : `Número ${i} é ímpar`);
// }

const avioes = ["airobus", "boeing", "embraer", "cessna", "airbus"];

for (let i = 0; i < avioes.length; i++) {
  console.log(`Avião ${i + 1}: ${avioes[i]}`);
}
