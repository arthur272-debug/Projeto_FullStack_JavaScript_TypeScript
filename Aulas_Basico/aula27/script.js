// atribuição via desestruturação - objeto

const carro = {
  marca: "Fusca",
  ano: 1968,
  cor: "azul",
  motor: {
    cilindrada: 1.0,
    tipo: "gasolina",
  },
};

const { marca, ano = 1, cor, ...resto } = carro;
const {
  motor: { cilindrada },
} = carro; // atribuição via desestruturação - objeto aninhado
console.log(marca); // Fusca
console.log(ano); // 1968
console.log(carro.motor.tipo); // gasolina
console.log(cilindrada); // 1.0
console.log(resto); // { cor: 'azul', motor: { cilindrada: 1, tipo: 'gasolina' } }
