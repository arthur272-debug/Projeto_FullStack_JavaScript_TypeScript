// Aprendendo sobre define.Property e Object.defineProperties

// define.Property
function Trem(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;

  Object.defineProperty(this, "marca", {
    enumerable: true, // mostra a chave
    value: marca, // valor da chave
    writable: false, // se pode alterar o valor da chave
    configurable: false, // se pode apagar a chave
  });
}

const t1 = new Trem("Alston", "X-200", 2020);
t1.marca = "Volvo"; // não vai alterar o valor
console.log(t1);

// define.Properties
// function Aviao(marca, modelo, ano, pais) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.ano = ano;
//   this.pais = pais;

//   Object.defineProperties(this, {
//     marca: {
//       enumerable: true,
//       value: marca,
//       writable: false,
//       configurable: false,
//     },
//     modelo: {
//       enumerable: true,
//       value: modelo,
//       writable: true,
//       configurable: false,
//     },
//   });
// }

// const aviao01 = new Aviao("Boeing", "747", 2020, "EUA");
// aviao01.modelo = "737";
// aviao01.marca = "Airbus"; // não vai alterar o valor
// console.log(aviao01);
