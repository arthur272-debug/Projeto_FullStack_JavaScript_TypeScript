//Aprendendo sobre Funções Construtoras -> constructor functions

function Cidade(nome, estado, pais) {
  const ID = 1; // atributo privado
  this.nome = nome;
  this.estado = estado;
  this.pais = pais;
}

c1 = new Cidade("São Paulo", "SP", "Brasil");
c2 = new Cidade("Rio de Janeiro", "RJ", "Brasil");
