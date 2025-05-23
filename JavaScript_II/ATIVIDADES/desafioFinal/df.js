// Sistema de Vagas de Emprego

const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (testoFinal, vaga, indice) {
        testoFinal += indice + ". "
        testoFinal += vaga.nome
        testoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return testoFinal
    }, "")

    alert(vagasEmTexto
    )
}

function novaVaga() {
    const nome = prompt("Digite o nome da vaga:")
    const descricao = prompt("Descreva a vaga: ")
    const dataLimite = prompt("Digite a data limite (dd/mm/aaaa) para a candidatura: ")


    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição " + descricao + "\n Data Limite: " + dataLimite
    )

    if (confirmacao) {
        const novaVaga = {
            nome, descricao, dataLimite, candidatos: []
        }
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }
}

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir:") 

    if (indice >= vagas.length || indice < 0) {
        alert("Índice inválido.")
        return 
    }
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga nº " + indice +
        "\nDescrição: " + vaga.descricao +
        "\nData Limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do canditato(a): ")
    const indice = prompt("Informe o índice da vaga para qual o candidato(a) deseja se inscrever: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato(a) " + candidato + " na vaga " + indice + " ?\n" +
        "Nome: " + vaga.nome + "\nDescroção " + vaga.descricao + "\nData Limite: " + vaga.dataLimite)

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada. ")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluída.")
    }
}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções" +
        "\n1. Listar vagas disponíveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um(a) candidato(a)" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    )
    return opcao
}

function executar() {
    let opcao = ""
  
    do {
      opcao = exibirMenu()
  
      switch (opcao) {
        case "1":
          listarVagas()
          break
        case "2":
          novaVaga()
          break
        case "3":
          exibirVaga()
          break
        case "4":
          inscreverCandidato()
          break
        case "5":
          excluirVaga()
        case "6":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida.")
      }
  
    } while (opcao !== "6");
}
  
executar()
