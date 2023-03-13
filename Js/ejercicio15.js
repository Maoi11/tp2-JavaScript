//15- Realiza un script que cuente el número de vocales que tiene un texto.

let frase = (prompt('Ingrese un texto para contar las vocales')).toLowerCase();
let contador = 0
let letra = ''


for (i=0; i < frase.length; i++){
    letra = frase.charAt(i);
    if ( letra == 'a' || letra == 'á' || letra == 'e' ||  letra == 'é' || letra == 'i' || letra == 'í' || letra == 'o' || letra == 'ó' || letra == 'u' || letra == 'ú')   {
        contador ++
    }
}

document.write(`Su frase tiene ${contador} vocales.`);