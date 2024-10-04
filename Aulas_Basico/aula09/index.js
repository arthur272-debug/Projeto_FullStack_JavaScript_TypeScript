// Operadores aritméticos + - / 

let conta = 2;
let soma = parseFloat('2.2');
let subtracao = parseInt('0');

console.log('\nOperadores de aritméticos:')


soma = conta + 2;
console.log(soma)
subtracao = conta - 2;
console.log(subtracao)
conta = conta / 2 * 3 - 2;
console.log(conta)
conta = (2 + 2) % 2;
console.log(conta)

// Operadores de incremento
console.log('\nOperadores de incremento:')
let contador = 1;

contador++;
contador++;
++contador;
++contador;
console.log(contador);
contador--;
contador--;
--contador;
console.log(contador);

// Operadores de atribuição
console.log('\nOperadores de atribuição:')
contador = 0;

contador += 2;
contador += 5;
console.log(contador);
contador -= 2;
console.log(contador);