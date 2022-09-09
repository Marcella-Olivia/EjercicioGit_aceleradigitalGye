
let bonusText = "www.techacademy.com";
console.log(bonusText);
let nuevoTexto = "";
let flag = 0;
for (let index = 0 ; index <= bonusText.length; index++) {
    let letra= bonusText.charAt(index);
    if (flag== 0) {
        letra = letra.toUpperCase();
    }
    nuevoTexto = nuevoTexto + letra;
    if (letra==".") {
        flag = 1
    }
}

console.log(nuevoTexto);