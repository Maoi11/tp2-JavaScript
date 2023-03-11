// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let mensaje = '';
let palabra = '';

do {
    let palabra = prompt('Ingresa una palabra');
    if (mensaje == '') {
        mensaje = palabra;
    } else {
        mensaje = mensaje + '-' + palabra;
    }
} while (confirm('¿Desea continuar ingresando texto?'));

document.write(mensaje);


