const palavra = prompt("informe uma palavra")
let inverso = " "

for (let i = palavra.length - 1; i >= 0; i--){
    inverso += palavra[i]
}

if (palavra === inverso) {
    alert(palavra + "é uma palíndromo")
} else {
    alert(palavra + "não é um palíndromo\n\n" + palavra + " !== " + inverso)
}