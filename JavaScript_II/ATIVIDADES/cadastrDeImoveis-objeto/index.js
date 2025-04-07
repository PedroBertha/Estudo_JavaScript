const imoveis = []
let opcao = " "

do {
    opcao = prompt(
        "Bem vindo ao Cadrasto de Imóveis!\n" +
        "Total de Imóveis Cadastrados: " + imoveis.length +
        "\n\nEscolha uma opção:\n1. Novo Imóvel\n2. Listar Imóveis\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const imovel = {}
            imovel.proprietario = prompt("Informe o nome do proprietário: ")
            imovel.quartos = parseFloat(prompt("Infrome o número de quartos: "))
            imovel.banheiros = parseFloat(prompt("Informe o número de banheiros"))
            imovel.garagem = prompt("O imóvel possui garegem? (Sim/Não)")

            const confirma = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui garagem? " + imovel.garagem 
            ) 
            if (confirma) {
                imoveis.push(imovel)
            }
            break

        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem? " + imoveis[i].garagem
                )


                
            }
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida")
            break
    }
} while (opcao !== "3")