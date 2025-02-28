// Aprendendo sobre curto-circuito

function falaOi() {
  return "Oi";
}

const vaiExecutar = "Tutu";
let vaiExecutar2;

console.log(vaiExecutar && falaOi());
console.log(vaiExecutar2 && falaOi());

// OR
console.log(0 || null || "Fabio" || true);

const corUsuario = null;
const corPadrao = corUsuario || "preto";
