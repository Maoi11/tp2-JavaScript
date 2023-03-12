// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let lineas = parseInt(prompt("Ingrese la cantidad de lineas que tendrá su pirámide (no mayor de 50)"));
let i = 1
let rep = 1
if (!isNaN(lineas) && lineas <= 50 && lineas > 0) {
    for (i = 1; i <= lineas; i++) {
        for (rep=1; rep <=i; rep++)
        document.write(rep);
        document.write('<br>');    
    }
    
}
else {
    alert("Usted no ingresó un número válido.");
}