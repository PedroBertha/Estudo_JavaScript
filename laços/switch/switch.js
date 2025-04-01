const reasultado = prompt("ERscolha uma alternativa: \na)\nb)\nc)")

const reasultadoNumerico = parseFloat(reasultado)

switch (reasultadoNumerico) {
    case 1:
        alert("O reasultado é 'a'")
        break
    case 2:
        alert("O reasultado é 'b'")
        break
    case 3:
        alert("O reasultado é 'c'")
        break
    default:
        alert("Finalizando")
}