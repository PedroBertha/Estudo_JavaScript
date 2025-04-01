const turista = prompt("Qual é o seu nome?")
let cidades = "" 
let contagem = 0 

let continuar = prompt("Você visitou alguma cidade? (sim/não)").toLowerCase()

while (continuar === "sim") {
    let cidade = prompt("Qual é o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"  
    contagem++
    continuar = prompt("Você visitou outra cidade? (sim/não)").toLowerCase()
}

alert(
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
)
