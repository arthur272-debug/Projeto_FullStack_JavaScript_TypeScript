//aprendendo sobre map em arrays

// const numeros = [1, 6, 3, 2, 0, 4, 5, 7, 8, 9];
// const numerosPares = numeros.map((numeros) =>
//   numeros % 2 === 0 ? numeros * 2 : 2,
// );
// console.log(numerosPares);

const cidades = [
  { nome: "São Paulo", estado: "SP" },
  { nome: "Rio de Janeiro", estado: "RJ" },
  { nome: "Belo Horizonte", estado: "MG" },
  { nome: "Nova Iguaçu", estado: "RJ" },
  { nome: "Campinas", estado: "SP" },
  { nome: "Niterói", estado: "RJ" },
  { nome: "Santos", estado: "SP" },
];

//Retorne apenas uma string com o nome do estado de cada cidade
const estados = cidades.map((cidade) => cidade.estado);
console.log(estados);

//Remova a chave "estado" do objeto, deixando apenas o nome da cidade
const nomesCidades = cidades.map((cidade) => cidade.nome);
console.log(nomesCidades);

//Adicione uma chave "regiao" em cada objeto, com o valor "Sudeste"
const cidadesComRegiao = cidades.map((cidade) => {
  return { ...cidade, regiao: "Sudeste" };
});
console.log(cidadesComRegiao);
console.log("Array de cidades: " + JSON.stringify(cidades));
