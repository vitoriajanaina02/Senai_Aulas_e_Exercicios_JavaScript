// Estrutura condicional
// temos condições e decidimos os caminhos que vamos seguir na estrtura condicional

/*
    IF          -> SE (se chover...)
    ELSE        -> SENÃO (senão...)
    ELSE IF     -> SENÃO SE 
    SWITCH/CASE -> SWITCH (como se fosse um menu de opções, cada case é uma opção) 
*/

let nome = prompt("Digite seu nome: ");
console.log(nome);

// Exemplos:
// 1. Sistema de verificação de temperatura
// tudo que é digitado através do prompt, é recebido como tipo texto
// então vamos converter para number para garantir que a validação não tenha problema
let temperatura = Number(prompt("Digite uma temperatura: "));

if(temperatura < 20) {
    console.log("Está frio!");
} else {
    console.log("Está calor!");
}

// 2. Verificar o nível da bateria
let bateria = Number(prompt("Digite o nível da bateria (%): "));

if(bateria <= 30) {
    alert("Bateria está fraca!");
} else {
    alert("Bateria está carregada!");
}

// 3. Sistema de acesso
let tipoUsuario = prompt("Digite o tipo do usuário (admin, cliente): ").
toLowerCase();
// toUpperCase -> deixa as letras em maiusculo e toLowerCase -> deixa as letras em minusculo

if(tipoUsuario == "admin") {
    console.log("Acesso total ao sistema.");
} else if (tipoUsuario == "cliente") {
    console.log("acesso limitado ao sistema.");
} else {
    console.log("Tipo inválido!");
}

// 4. Classificar a qualidade da internet
let velocidade = Number(prompt("Digite a velocidade da internet"));

if(velocidade >= 100) {
    console.log("Internet rápida");
} 
else if(velocidade >= 50) {
    console.log("Internet média");
}
else {
    console.log("Internet lenta");
}

// 5. Analisar o volume de intens
// usando operadores lógicos
let quantidade = 10;

if(quantidade === 0) {
    console.log("Nenhum item selecionado");
}
else if(quantidade < 5) {
    console.log("Poucos intens selecionados");
}
else if(quantidade >= 5 && quantidade <= 10) {
    console.log("Quantidade média de itens");
}
else {
    console.log("Muitos itens");
}

// Condicional Aninhada
// 6. Uma condicional dentro da outra
const nota = 5;

if(nota >= 7) {
    if(nota === 10) {
        console.log("Aprovado com premiação!");
    }
    else {
        console.log("Aprovado!");
    }
}
else {
    console.log("Reprovado!");
}

//7. Adaptação de tela de dispositivo
let dispositivo = prompt("Você está usando: celular, tablet ou computador? ");

if(dispositivo == "celular" || dispositivo == "tablet") {
    console.log("Modo mbile ativado");
}
else if(dispositivo == "computador") {
    console.log("Modo desktop ativado");
}
else {
    console.log("Dispositivo desconhecido");
}

// 8. SWITCH/CASE
// mudar o tema do sistema
let tema = prompt("Digite um tema: claro, escuro, azul ou digite sair").
toLowerCase();

switch(tema) {
    case "claro":
        console.log("Tema claro ativado!");
        document.body.style.backgroundColor = "#FFFFFF";
        break;
    case "escuro":
        console.log("Tema escuro ativado!");
        document.body.style.backgroundColor = "#000000";
        break;
    case "azul":
        console.log("Tema azul ativado!");
        document.body.style.backgroundColor = "#0000FF";
        break;
    default:
        console.log("Tema inválido!");
        break;
}