const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// Adicionar Elementos
// push: Adiciona um elemento no final do array e devolve o novo tamanho do array
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array
tamanho = arr.unshift("teste")
console.log(arr)
console.log(tamanho)

// pop: Remove um elemento no final do array e devolve o elemento removido
let ultomoElemento = arr.pop()
console.log(arr)
console.log(ultomoElemento)

// shift: Remove um elemento no começo do array e devolve o elemento removido
ultomoElemento = arr.shift()
console.log(arr)
console.log(ultomoElemento)

// Pesquisar por um elemento
// includes: Verifica se um certo elemento está presente no array 
const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array
const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortar e Concatenar
// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

// Substituição dos Elementos
// splice: Permite remover elementos em qualquer posição do array e substituir por novos
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzeto")
console.log(sociedade)
console.log(elementosRemovidos)