const nome = 'Tutu';
const sobrenome = 'Miranha';
const idade = 22;
const peso = 44;
const alturaEmMetros = 1.57;
let indiceMassaCorporal;
let anoNascimento;

anoNascimento = 2002;
indiceMassaCorporal = peso / (alturaEmMetros ^ 2);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg `);
console.log('tem', alturaEmMetros, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome + ' nasceu em ' + anoNascimento + '.');
