// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.


let vocales = ["a", "e", "i", "o", "u"];
let texto = (prompt("Ingrese una frase")).toLowerCase();

let posicion = 0;
let stop = false;

for (let i = 0; i < texto.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (vocales[j] === texto.charAt(i)) {
      posicion = i;
      stop = true;
      break;
    }
  }
 
  if (stop) {
    break;
  }
}
if(stop!= true){
  document.write(`La palabra ingresada no tiene vocales` );

}
else{
    document.write(`La primera vocal es la '${texto.charAt(posicion)}' y está en la posición ${posicion}` );
}