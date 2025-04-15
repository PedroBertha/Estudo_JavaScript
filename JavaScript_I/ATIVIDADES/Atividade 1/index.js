const primeiroNome = prompt("Informe o primerio nome do recruta:");
const sobrenome = prompt("Infirme o ultimo nome do recruta:");
const campoDeEstudo = prompt("Informe o campo de estrudo:");
const anoDeNascimento = prompt("Informe o ano de nascimento do recruta:");  

alert (
    "Recruta cadastrado com sucesso! \n" +
    "\n Nome completo: " + primeiroNome + " " + sobrenome +
    "\n Idade: " + (2025 - anoDeNascimento)
)