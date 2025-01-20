// Revisando e praticando sobre Arrays

const coisas = [1, null, "Tutu", true, 3.1, "Tuturitutu"];
console.log(coisas);

const alunos = ["Luizão", "Maria Bela", "Alessandro"];
console.log(alunos);
alunos[1] = "Mariazinha";
console.log(alunos);
console.log(alunos.length);
alunos[alunos.length] = "Tchuca";
alunos.push("Tchucão");
console.log(alunos);
alunos.unshift("Tuturito");
const removido = alunos.pop();
console.log(removido);
console.log(alunos);
delete alunos[0];
console.log(alunos);
console.log(alunos.slice(0, 1));
console.log(alunos instanceof Array);
console.log(typeof alunos);
