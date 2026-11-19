// aula sobre getters e setters -> vendo de forma mais profunda

function Notebook(memoria, processador, preco) {
  this.memoria = memoria;
  this.processador = processador;
  this.preco = preco;

  let precoPrivado = preco;
  Object.defineProperty(this, "preco", {
    get: function () {
      return precoPrivado;
    },
    set: function (novoPreco) {
      if (typeof novoPreco !== "number") {
        throw new TypeError("O preço deve ser um número.");
      }
      precoPrivado = novoPreco;
    },
  });
}

let notebook1 = new Notebook("16GB", "i7", 5000);
console.log("Preço antigo: " + notebook1.preco); // 5000

notebook1.preco = 6000;
console.log("Preço novo: " + notebook1.preco); // 6000
