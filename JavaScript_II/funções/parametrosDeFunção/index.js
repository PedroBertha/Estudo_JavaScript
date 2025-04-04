/* O parâmetro é a entrada da função.

// Ele é como uma variável que fica disponível dentro da função
// mas que é informada na hora de chamar a função

function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2));
}

dobro(5)
dobro(7)

// Se uma função for chamada sem informar o parâmetro
// o valor usado para ele será o undefined

dobro()// NaN: Not a Number
dobro(undefined)// NaN: Not a Number

// Mas podemos declarar um valor padrão para um parãmetro, assim, 
// se ele não for informado, o valor padrão será usado no lugar do undefined

function dizerOla(nome = "mundo") {
    alert("Olá, " + nome + "!");
}

dizerOla("Pedro")
dizerOla()

// Uma função pode ter quantos parâmetros quisermos, basta separaá-los por vírgula

function soma (a, b) {
    alert("O resultado da soma é " + (a + b))
}

soma(1, 1)
soma(2, 3)

// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último*/

function criarUsario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome, //memso que nome: nome
        email,// mesmo que email: email
        senha,//mesmo que senha: senha
        tipo  // mesmo que tipo: tipo
    }
    console.log(usuario)
}

function novoUsuario(nome, tipo = "admin", email, senha) {
    const usuario = {
        nome, //memso que nome: nome
        email,// mesmo que email: email
        senha,//mesmo que senha: senha
        tipo  // mesmo que tipo: tipo
    }
    console.log(usuario)
}

criarUsario("Pedro", "phlikoskibertha2gmail.com", "123456", "admin")
novoUsuario("Pedro", "phlikoskibertha2gmail.com", "123456")

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
// e passar esse objeto como parâmetro da função
// Assim, podemos passar apenas os parâmetros que quisermos
// e não precisamos nos preocupar com a ordem deles
// e nem com os valores padrão

function muitosParametros (nome, telefone, endereco, aniversario, email, senha) {
    //...  
}

function obejtoComoParametros (usuario) {
    usuario.nome
    usuario.email 
}

muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")

const dadosUsuario = {
    nome: "",
    telefone: "",
    endereco: "",           
    aniversario: "",
    email: "",
    senha: ""
}

obejtoComoParametros(dadosUsuario)