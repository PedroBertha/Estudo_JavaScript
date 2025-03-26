const numero = parseFloat(prompt("Qual número você deseja calcular a tabuda?"))
let resultado = ""

for (let fator = 1; fator <= 10; fator++){
    resultado += " -> " + numero + " x " + fator + " = " + (numero * fator) + "\n"
}

alert("Resultado da Tabuada de " + numero + ":\n\n" + resultado)