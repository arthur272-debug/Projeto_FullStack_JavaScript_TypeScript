// Revisando valores primitivos e valores por referência

//Valores primitivos
let a = 10;
let b = a;

console.log(a, b);
b = 90;
a = -1;
c = a;
c = 80;
console.log(a, b, c);

//Valores por referência
let array1 = [1, 2, 3];
let array2 = array1;
let array3 = [...array1];
console.log(array1, array2);

array1.push(60);
array3.push(90);
console.log(`Novos valores: [${array1}] [${array2}]`);

array1.pop();
console.log(array1, array2, array3);
