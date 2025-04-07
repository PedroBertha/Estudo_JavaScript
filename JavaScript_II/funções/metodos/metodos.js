//funções atreladas a objetos

let pessoa = {
    nome: "Pedro",
    idade: 19,
    dizerOla(){
        console.log("Olá,mundo! Meu nome é " + this.nome + " e tenho " + this.idade)
    }
}

console.log(pessoa)

pessoa.dizerOla() //chamando a função atrelada ao objeto pessoa
