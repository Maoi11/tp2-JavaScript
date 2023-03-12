// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let filas = parseInt(prompt("Ingrese un numero de filas"));
let columnas = parseInt(prompt("Ingrese un numero de columnas"));

let numeros = filas * columnas;

document.write('<table>');
for (let f = 1; f <= filas; f++) {
    document.write(`<tr>`);
  for (let c = 1; c <= columnas; c++) {
    document.write(`<td>${numeros}<td>`);
    numeros--;
  }
  document.write(`</tr>`);
}
document.write('</table>');

