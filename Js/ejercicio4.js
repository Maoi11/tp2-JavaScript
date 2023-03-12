// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;
let numero = 0;

do {
    let numero = parseInt(prompt("Ingrese un número"));
    if (!isNaN(numero) && numero != null) {
        suma = (suma + numero);
    } else {
        alert("Usted no ingresó un número válido");
    }

} while (confirm("¿Desea continuar ingresando números?"));

document.write(suma);