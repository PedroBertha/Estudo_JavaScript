// Retorno é a saída da função

// O retorno é usado para armazenarmos a saída da função em uma variável
// Se não explicitarmos qual deve ser a saída da função, sua saída será undefined

function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media
}

const resultado = calcularMedia(7, 2)

console.log(resultado)

function criarProduto(nome, preco) {
    const produto = { nome, preco, estoque: 1 }
    return produto
}

console.log(criarProduto("Notebook Intel core i3 8GB", 2500))
console.log(criarProduto("Smartphone Samsung Galaxy", 1000))

function areaRetangular(base, altura) {
    return area = base * altura
}

function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}

console.log(areaRetangular(3, 5))

console.log(areaQuadrada(9))

// Uma função só pode ter uma saída, depois do return nada é executado
// Repare que o VS Code nos avisa que nosso código não será executado
// depois do return, pois não faz sentido
// e isso pode gerar um erro
// Se quisermos retornar mais de um valor, podemos retornar um objeto

function ola() {
    let texto = " ... "
    return texto 
    texto = " Olá, mundo! " // não será executado, pois está após o return
    console.log(texto)
}

console.log(ola())

function maioridade(idade) {
    if (idade >= 18) {
        return true
    } else {
        return false
    }
}

console.log(maioridade(18)) // true
console.log(maioridade(17)) // false