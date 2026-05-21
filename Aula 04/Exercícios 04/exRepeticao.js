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