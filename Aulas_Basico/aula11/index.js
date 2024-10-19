// Tudo sobre String

let exemplo = "\"texto em português\"";
let exemplo2 = " \\texto em português";
let exemplo3 = "Textinho em English";

// exemplos sobre a barra de escape
console.log(exemplo);
console.log(exemplo2);

// funções string
console.log(exemplo3.charAt(6));
console.log(exemplo3[9]);
console.log(exemplo.concat(': ', 'Irmãozão', ' é ', 'o mais', ' brabo de todos!!'));
console.log(exemplo + ": Irmãozão é o mais brabo de todos!!");
console.log(`${exemplo}: Irmãozão é o mais brabo de todos!!`);
console.log(exemplo.indexOf('texto'));
console.log(exemplo.indexOf('o', 3));
console.log(exemplo3.slice(2, 5));
console.log(exemplo3.split('i'));
console.log(exemplo3.split('i', 2));
console.log(exemplo2.toUpperCase());
console.log(exemplo3.toLowerCase());

// expressão regular
console.log(exemplo2.match(/[a-z]/g)); // retorna todas as letras minúsculas do texto

console.log(exemplo2.replace(/e/, 'x'));
console.log(exemplo2.replace(/e/g, 'xx'));
console.log(exemplo2.length);

