// Aprendendo sobre Factory Functions --> Entendendo como funciona por trás das Factory Functions
function CriarCarro(modelo, preco) {
  return {
    modelo,
    preco,
    acelerar() {
      //forma curta de escrever uma função
      console.log(`${this.modelo} acelerou`); //this se refere ao objeto que chamou a função -> carro1 no caso
    },
    // Getters são funções que retornam valores
    get fazerValorVenda() {
      return this.preco * 1.5;
    },
    get modeloCompleto() {
      return `O modelo do carro é ${this.modelo} e o preço é ${this.preco}`;
    },

    set modeloNovo(modelo) {
      this.modelo = modelo;
    },

    set precoNovo(preco) {
      this.preco = preco;
    },
  };
}

// Criando um carro
carro1 = CriarCarro("Fusca", 2000);
console.log(carro1.modeloCompleto);
carro1.acelerar();
carro1.modeloNovo = "Fusca Turbo";
carro1.precoNovo = 2500;
console.log(carro1.modeloCompleto);
console.log(carro1.fazerValorVenda);

// Criando outro carro
carro2 = CriarCarro("Gol", 3000);
carro2.acelerar();
console.log(carro2.fazerValorVenda);
