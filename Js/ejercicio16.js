// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto = prompt("Ingrese el texto que desea invertir.")
const longitud = texto.length


for (let rep = longitud; rep >= 0; rep--) {
    document.write(texto.charAt(rep));
}
