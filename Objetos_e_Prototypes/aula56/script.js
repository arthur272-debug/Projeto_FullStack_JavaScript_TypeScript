// Revisando objetos

//Pode ser feito assim:
const carro1 = new Object();
carro1.marca = "Ford";
carro1.modelo = "Ka";
carro1.ano = 2020;
carro1.buzinar = function () {
  console.log("Biiiiiiiiiiiiiiiiiiiiiiiii");
};

delete carro1.ano;
console.log(carro1);
carro1.buzinar();

// Pode ser através de Factory Function
function criarCarro(marca, modelo, ano) {
  return {
    marca: marca,
    modelo: modelo,
    ano: ano,
    buzinar: function () {
      console.log("Biiiiiiiiiiiiiiiiiiiiiiiii");
    },
  };
}

const c1 = criarCarro("Ford", "Ka", 2020);
console.log(c1);
c1.buzinar();

// Pode ser através de Constructor Function
function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.buzinar = function () {
    console.log("Biiiiiiiiiiiiiiiiiiiiiiiii");
  };
}

const c2 = new Carro("Ford", "Ka", 2020);
console.log(c2);
c2.buzinar();
