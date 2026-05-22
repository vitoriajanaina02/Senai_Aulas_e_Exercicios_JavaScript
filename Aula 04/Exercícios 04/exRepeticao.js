// NÍVEL BÁSICO

// 1. Contagem de 1 à 10
let exibicao = 0;

for(let i = exibicao; i <= 10; i++) {
    if(i > exibicao) {
        console.log(i);
    }
}

// 2. Tabuada de um número
let tabuada = Number(prompt("Digite um número: "));

for (let i = 1; i<= 10; i++) {
    if(resultado1 = tabuada * i) {
        console.log(resultado1);
    }
}

// 3. Soma dos primeiros N números naturais
let N = Number(prompt("Digite um número: "));
let soma = 0;

for (let i = 1; i <= N; i++) {
    soma += i;
}

console.log(soma);


// NÍVEL INTERMEDIÁRIO
// 1. Exibir os números pares de 1 à 50:
let inicioPar = 2;

for(let i = inicioPar; i <= 50; i++) {
    if(i % 2 == 0) {
        console.log(i)
        }
}

// 2. Jogo de adivinhação

const numeroSecreto = Math.floor(Math.random() * 100 ) + 1;

let tentativas = 0;
let acertou = false;

while(acertou == false) {
    let palpite = Number(prompt("Adivinhe o número secreto (entre 1 e 100): "));
    tentativas++;

    console.log(`Tentativa ${tentativas}: você digitou ${palpite}`);

    if (palpite == numeroSecreto) {
        alert(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
        acertou = true;
    }
    else if (palpite < numeroSecreto) {
        alert(`Errou! O número secreto é MAIOR que ${palpite}. Tente novamente`);
    }
    else {
        alert(`Errou! O número secreto é MENOR que ${palpite}. Tente novamente`);
    }
}


// EXEMPLOS DA PROFESSORA 

function mensagem() {
}

// random gera numeros aleatorios entre 0 e 1.
// nath.floor: remove os números decimais e deixa os numeros inteiros.
const numeroSecreto2 = Math.floor(Math.random() * 100 ) + 1;
let tentativas2;

while(tentativas2 !== numeroSecreto2) {
    tentativa2 = Number(prompt("Digite um número de 1 à 100: "));
}

    if(tentativas2 > numeroSecreto2) {
        console.log("O número é menor!");
    }
    else if(tentativas2 < numeroSecreto2) {
    console.log("O número é maior!")
}
    else {
        console.log("Parabens! Você acertou!");
    }

// Intermediário 3
let numero = Number(prompt("Digite um número: "));

while(numero = 0) {
    console.log(numero);
    numero--; // numero = numero - 1
}

// Intermediario 4
let senha = "1234"
let senhaDigitada = "";

while(senhaDigitada !== senha) {
    senhaDigitada = prompt("Digite a senha: ");

    if(senhaDigitada !== senha) {
        alert("Senha incorreta! Tente novamente.")
    }
}

alert("Senha correta! Acesso permitido.");

// Intermediário 5
let soma2 = 0;

let valor = Number(prompt("Digite um número ou 0 para parar: "));

while(valor !== 0) {
    soma2 += valor; // soma = soma + valor
    valor = Number(prompt("Digite um número ou 0 para parar: "));
    console.log(`Você digitou: ${valor}`);
}

console.log(`Total da soma: ${soma2}`);

// Intermediário 6
let somaValores = 0;

for(let i = 1; i <= 3; i++) {
    let valor2 = Number(prompt(`Digite o ${i}º número`));
    somaValores += valor2; // somaValores = somaValores + valor2
}

let media = somaValores / 3;
console.log(`A média é: ${media}`);