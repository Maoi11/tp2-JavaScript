// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

// let i = 1

 for (i=1; i<=30; i++) {
     let escribir = i
  document.write(`${i}`.repeat(i));
     document.write('<br>');    
 }

