//Aprendendo sobre as Funções de callback

//Simulando atraso de uma requisição de API
function RandorizarTempo(min = 1000, max = 4000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function FalarDepois(callback) {
  setTimeout(() => {
    console.log("Falando assunto 1");
    if (callback) callback();
  }, RandorizarTempo());
}

function FalarDepois2(callback) {
  setTimeout(() => {
    console.log("Falando assunto 2");
    if (callback) callback();
  }, RandorizarTempo());
}

function FalarDepois3(callback) {
  setTimeout(() => {
    console.log("Falando assunto 3");
    if (callback) callback();
  }, RandorizarTempo());
}

//Chamando as funções de callback - de forma mais organizado, sem o aninhamento de if's
function f1Callback() {
  FalarDepois2(f2Callback);
}

function f2Callback() {
  FalarDepois3(f3Callback);
}

function f3Callback() {
  console.log("Falando por último!");
}

FalarDepois(f1Callback);
