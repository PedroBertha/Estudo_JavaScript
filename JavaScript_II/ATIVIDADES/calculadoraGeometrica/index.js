// CALCULADORA GEOMÉTRICA

/*Escreva um programa em javascript para calcular 
a área de diferentes formas geométricas. 
O programa deve iniciar com um menu contendo
as diferentes opções de cálculas. As opções devem ser:*/

//área do triângulo: base * altura / 2

//área do retângulo: base * altura

//área do quadrado: lado²

//área do trapézio: (base maior + base menor) * altura / 2

//área do círculo: pi * raio² (considere pi = 3.14)

/*Você deve escrever o programa usando funções sempre que possível 
para separar os procedimentos. O programa também 
deve ter uma opção de “Sair” e enquanto ela
não for escolhida deverá voltar ao menu.*/

function calcularAreaTriangulo() {
    const base = parseFloat(prompt("Informe a base do triângulo: "))
    const altura = parseFloat(prompt("Informe a altura do triângulo: "))
    return (base * altura) / 2
}

function calcularAreaRetangulo() {
    const base = parseFloat(prompt("Informe a base do retângulo: "))
    const altura = parseFloat(promp("Informe a altura do retângulo: "))
    return base * altura
}

function calcularAreaQuadrado() {
    const lado = parseFloat(prompt("informe o lado do quadrado: "))
    return lado * lado
}

function calcularAreaTrapezio() {
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio: "))
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio: "))
    const altura = parseFloat(prompt("Informe a altura do trapézio: "))
    return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo() {
    const raio = parseFloat(prompt("Informe o raio do círculo: "))
    return 3.14 * (raio * raio)
}

function exibirMenu() {
    return prompt(
        "CALCULADORA GEOMÉTRICA\n" +
        "1. Calcular área do triângulo\n" +
        "2. Calcular área do retângulo\n" +
        "3. Calcular área do quadrado\n" +
        "4. Calcular área do trapézio\n" +
        "5. Calcular área do círculo\n" +
        "6. Sair\n"
    )
}

function calcularArea() {
    let opcao = " "

    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = calcularAreaTriangulo()
                break
            case "2":
                resultado = calcularAreaRetangulo()
                break
            case "3":
                resultado = calcularAreaQuadrado()
                break
            case "4":
                resultado = calcularAreaTrapezio()
                break
            case "5":
                resultado = calcularAreaCirculo()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida!")
                break
        }

        if (resultado) {
            alert("Resultado: " + resultado)
        }
        
    } while (opcao !== "6");
}
calcularArea()





