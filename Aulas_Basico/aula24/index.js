// revisando sobre switch/case

const data = new Date();
const dia_da_semana = data.getDay(); // 0 - domingo, 1 - segunda, 2 - terça, 3 - quarta, 4 - quinta, 5 - sexta, 6 - sábado
switch (dia_da_semana) {
  case 0:
    console.log("Hoje é domingo!");
    break;
  case 1:
    console.log("Hoje é segunda!");
    break;
  case 2:
    console.log("Hoje é terça!");
    break;
  case 3:
    console.log("Hoje é quarta!");
    break;
  case 4:
    console.log("Hoje é quinta!");
    break;
  case 5:
    console.log("Hoje é sexta!");
    break;
  case 6:
    console.log("Hoje é sábado!");
    break;
  default:
    console.log("Dia inválido!");
}
