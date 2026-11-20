//Apredendo sobre prototypes em javascript

function Animal(nome, especie) {
  this.nome = nome;
  this.especie = especie;
  this.som = function () {
    console.log("O animal faz um som específico");
  };
}

Animal.prototype.movimentar = function () {
  console.log("O animal se movimenta");
};

onca = new Animal("Onça", "Felino"); // Instaciando um objeto da função construtora Animal
onca.som(); // está dentro da função construtora Animal
onca.movimentar(); // está no prototype da função construtora Animal

console.dir(onca); // Mostra o objeto onca e suas propriedades.
console.log(onca.__proto__); // Mostra o prototype do objeto onca
