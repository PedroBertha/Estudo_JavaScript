//htmlFor é o mesmo atributo da label
// gera uma label
function creatLabel(label, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

// cria um input
function createInput(id, value, name, type ='text', placeholder) {
    const input = document.createElement('input')
    input.id =id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

// adiciona um evento de click no botão
addTechBtn.addEventListener('click', function(ev){
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    // indice da linha
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'inputRow' + rowIndex
    newRow.className = 'inputRow'

    const techNameLabel = creatLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName')

    newRow.append(
        techNameLabel, techNameInput
    )

    stackInputs.appendChild(newRow)
})
