//Revisando sobre Escopo local e Global

const estado = 'RJ';

function mostrarEstado() {
    const estado = 'SP';
    console.log(estado);
}

function falarEstado() {
    console.log(estado);
    mostrarEstado();
}

falarEstado();
