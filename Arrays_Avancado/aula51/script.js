// apredendo sobre o método filter em arrays

const numeros = [10, 9, 2, 50, 80, 100, 2, 1, 7, 3, 0, 12, 18, 90];
const numerosFiltrados = numeros.filter((valor) => valor >= 10);
console.log(numerosFiltrados);

//pratica com strings
const colaboradores = [
  { nome: "Luiz", idade: 62, empresa: "Google" },
  { nome: "Maria", idade: 23, empresa: "Microsoft" },
  { nome: "Eduardo", idade: 55, empresa: "IBM" },
  { nome: "Letícia", idade: 19, empresa: "Rededor" },
  { nome: "Diogo", idade: 42, empresa: "Hexa Jobs" },
];

//filtro aplicado para colaboradores com idade maior que 30
const colaboradoresFiltrados = colaboradores.filter(
  (colaborador) => colaborador.idade > 30,
);
console.log(colaboradoresFiltrados);

//filtro aplicado para colaboradores que tenham o nome que inicie com a letra "L"
const colaboradoresFiltradosNome = colaboradores.filter(
  (colaborador) => colaborador.nome[0] === "L",
);
console.log(colaboradoresFiltradosNome);
