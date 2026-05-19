// NÍVEL BÁSICO
// 1. Verificar maioridade
let idade = Number(prompt("Digite a sua idade: "));

if(idade >= 18) {
    alert("Você é maior de idade!");
}
else {
    alert("Você é menor de idade!");
}

// 2. Verificar se um número é positivo ou negativo
let numero = Number(prompt("Digite um número: "));

if(numero > 0) {
    console.log("O número é positivo!");
}
else {
    console.log("O número é negativo!");
}

// 3. Aprovação em uma prova
let nota = Number(prompt("Digite a nota do aluno: "));

if (nota >= 60) {
    alert("Aprovado");
}
else {
    alert("Reprovado");
}

// 4. Verificar se um número é positivo, negativo ou zero
let numero1 = Number(prompt("Digite um número: "));

if (numero1 > 0) {
    alert("O número é positivo");
}
else if (numero1  < 0) {
    alert("O número é negativo");
}
else {
    alert("O número é zero");
}

// 5. Classificação de idade
let idade1 = Number(prompt("Digite a sua idade: "));

if (idade1 < 0) {
    alert("Idade inválida, insira um número positivo");
}
else if (idade1 > 0 && idade1 <= 12) {
    alert("Você é uma criança");
}
else if (idade1 >= 13 && idade1 < 18) {
    alert("Você é um adolescente");
}
else {
    alert("Você é um adulto");
}

// 6. Verificar se um número é par ou ímpar
let numero2 = Number(prompt("Digite um número: "));

if (numero2 % 2 == 0) {
    alert("O número é par");
}
else {
    alert("O número é ímpar");
}


// NÍVEL INTERMEDIÁRIO
// 1. Calculadora simples
let num1 = Number(prompt("Digite o primeiro número; "));
let num2 = Number(prompt("Digite o segundo número; "));
let operador = prompt("Digite um operador (+,-,*,/: ");

if (operador === "+") {
    alert(`O resultado de ${num1} + ${num2} é igual ${num1+num2}`);
}
else if (operador === "-") {
    alert(`O resultado de ${num1} - ${num2} é igual ${num1-num2}`);
}
else if (operador === "*") {
    alert(`O resultado de ${num1} * ${num2} é igual ${num1*num2}`);
}
else if (operador === "/") {
    alert(`O resultado de ${num1} / ${num2} é igual ${num1/num2}`);
}
else {
    alert("Informação inválida");
}

// 2. Maior entre três números
let num_1 = Number(prompt("Digite o primeiro número: "));
let num_2 = Number(prompt("Digite o segundo número: "));
let num_3 = Number(prompt("Digite o terceiro número: "));

if (num_1 > num_2 && num_1 > num_3) {
    alert(`O maior é ${num_1}`);
}
else if (num_2 > num_1 && num_2 > num_3) {
    alert(`O maior é ${num_2}`);
}
else if (num_3 > num_1 && num_3 > num_2) {
    alert(`O maior é ${num_3}`);
}
else {
    alert("Informação inválida");
}


// 3. Desconto em compras
let compra = 97;

if (compra > 100) {
    let desconto = compra * 0.1;
    let compraDesconto = compra - desconto;
    console.log(`O valor total da compra é ${compraDesconto} reais, com 10% de desconto`);
}
else {
    console.log(`O valor total da compra é ${compra} reais, esse valor não tem desconto`);
}

// 4. Sistema do login simples
let usuario = prompt("Digite seu usuário: ");
let senha = prompt("Digite sua senha: ");

if (usuario == "admin" && senha == "1234") {
    console.log("Login bem-sucedido.");
}
else {
    console.log("Acesso negado.");
}

// NÍVEL AVANÇADO
// 1. Frete de pedido
const valorCompra = 163;

if (valorCompra >= 100) {
    alert("Frete grátis.");
}
else if (valorCompra <= 50 && valorCompra < 100) {
    alert("Frete 10 reais");
}
else {
    alert("frete 20 reais");
}

// 2. Acesso por idade e convite
let age = Number(prompt("Digite a sua idade: "));
let temConvite = prompt("Você tem convite? ") == "sim";

if (age >= 18 || temConvite) {
    console.log("Pode entrar!");
}
else {
    console.log("BARRADO!");
}

// 3. Conversão de notas para conceitos
let notas = Number(prompt("Insira uma nota: "));

if (notas >= 90 && notas <= 100) {
    console.log("Nota A");
}
else if (notas >= 80 && notas <= 89) {
    console.log("Nota B");
}
else if (notas >= 70 && notas <= 79) {
    console.log("Nota C");
}
else if (notas >=60 && notas <= 69) {
    console.log("Nota D");
}
else if (notas < 60 && notas >= 0) {
    console.log("Nota F");
}
else {
    console.log("Nota inválida, digite de 1 à 100.");
}

// 4. Cálculo de IMC
let pesoIMC = Number(prompt("Digite o seu peso: "));
let alturaIMC = Number(prompt("Digite a sua altura: "));
let calculoIMC = pesoIMC / (alturaIMC ** 2);

if (calculoIMC < 18.5) {
    console.log("Abaixo do peso");
}
else if (calculoIMC >= 18.5 && calculoIMC < 25) {
    console.log("Peso normal");
}
else if (calculoIMC > 25 && calculoIMC < 30) {
    console.log("Sobrepeso");
}
else {
    console.log("Obesidade");
}

// 5. Verificação de estoque
let estoque = Number(prompt("Digite a quantidade de produtos: "));

if (estoque == 0) {
    alert("Esgotado");
}
else if (estoque >= 1 && estoque < 10) {
    alert("Últimas unidades");
}
else {
    alert("Produto disponível");
}