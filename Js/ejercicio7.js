// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1



let lineas = parseInt(prompt("Ingrese la cantidad de lineas que tendrá su pirámide (no mayor de 50)")); 

if (!isNaN(lineas) && lineas <= 50 && lineas > 0) {
for (i=lineas; i>=0; i--) {
    document.write(`${i}`.repeat(i));
       document.write('<br>');    
   }
} else {
    alert("Usted no ingresó un número válido.");
}