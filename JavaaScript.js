function function_calcular(){

const PJ1 = parseInt(document.getElementById("Ju1").value);
const PJ2 =parseInt (document.getElementById("Ju2").value);
const divResultado = document.getElementById("resultado");


  
  if (PJ1 === PJ2) {
    resultado = "Empate";
  } else if (PJ1 === 1 && PJ2 === 3) {
    resultado = "Jugador 1 gana";
   
  } else if (PJ1 === 2 && PJ2 === 1) {
    resultado = "Jugador 1 gana";
  } else if (PJ1 === 3 && PJ2 === 2) {
    resultado = "Jugador 1 gana";
  } else {
    resultado = "Jugador 2 gana";

  }

  divResultado.innerHTML = resultado;
};