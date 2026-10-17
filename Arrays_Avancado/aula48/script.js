//Revisando arrays -> Básico

const cidades = [
  "Rio de Janeiro",
  "São Paulo",
  "Belo Horizonte",
  "Curitiba",
  "Porto Alegre",
];

const cidadesNovas = [...cidades, "Florianópolis", "Recife"];

delete cidades[4];
console.log(cidades);
console.log(cidadesNovas);

let removido = cidadesNovas.pop();
console.log(removido);
cidades.push("Nova Iguaçu");
console.log(cidades);

let cidadesRemovidas = cidadesNovas.splice(1, 2);
console.log(cidadesRemovidas);
console.log(cidadesNovas);
