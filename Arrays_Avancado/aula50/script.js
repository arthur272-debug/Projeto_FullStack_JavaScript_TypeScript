// Revisando concatenação de arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const array4 = array1.concat(array2, array3); // forma de concatenar arrays
const array5 = [...array1, ...array2, ...[9, 10, 90, 100]]; // forma de concatenar arrays com spread operator

console.log(array4); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array5); // [1, 2, 3, 4, 5, 6, 9, 10, 90, 100]
