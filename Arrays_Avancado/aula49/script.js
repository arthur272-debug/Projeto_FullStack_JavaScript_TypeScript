// Praticando o método splice

const avioes = [
  "Boeing737",
  "Airbus A320",
  "Embraer E195",
  "Cessna 172",
  "Bombardier CRJ900",
];

console.log("Aviões originais:", avioes);
//removendo elementos do array
const avioesRemovidos = avioes.splice(2, 2); // remove 2 elementos a partir do índice 2
console.log("Aviões removidos:", avioesRemovidos);

//adicionando elementos no array
avioes.splice(1, 0, "Boeing747", "Airbus A380");
console.log("Aviões após adição:", avioes);
