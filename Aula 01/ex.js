// VARIÁVEIS
/*
    LET     -> Quando o valor da varável pode mudar, usamos let
    VAR     -> Forma antiga - evitar usar(está sendo descontinuado por muitos problemas)
    CONST   -> Quando o valor da variável NÃO pode mudar
*/

// let nome = "Caio";
// const idade = 25;
// var cidade = "São Paulo";

// // console.log() -> imprime valores na tela
// console.log(nome);
// console.log(idade);

// // trocando informações da variável com let
// nome = "Vitória";
// console.log(nome);

// trocando informações da variável com const
// idade = 24;
// console.log(idade);

// imprimindo valores juntos
console.log(nome + cidade);

// imprimindo valores juntos com texto
console.log("Nome: " +  nome + ", cidade: " + cidade); // concatenação

// interpolação
console.log(`Nome: ${nome}, cidade: ${cidade}`);


// TIPOS PRIMITIVOS

// String (texto)
let mensagem1 = "Olá, mundo!";
console.log(typeof mensagem);

// Number (número)
let idade = 30;
let temperatura = 36.5;
console.log(typeof idade);
console.log(typeof temperatura);

// Boolean (booleano -> verdadeiro / falso)
let estaChovendo = true;
console.log(typeof estaChovendo);

// Underfined -> quando não definimos um valor para uma variável
let nome;
console.log(typeof nome);

// Null / object -> usado para ausência intencional de um valor
let endereco = null;
console.log(typeof endereco);

// Conversão dos tipos
// Convensão implícita (automática)
let soma = "5" + 3;
let sub = "5" - 3;

console.log(typeof soma);
console.log(soma); // 53 string
console.log(typeof sub);
console.log(sub); // 2 number

// Conversão explícita
// Converter string para número
let numero = "42";
let convertido = Number(numero);
console.log(typeof numero);

// Converter número para string
let numero = 100;
let texto = String(numero2);
console.log(typeof numero2);


// Operadores Relacionais
/*
    >       MAIOR QUE
    <       MENOR QUE
    >=      MAIOR OU IGUAL
    <=      MENOR OU IGUAL
    ==      IGUALDADE (ignora tipo)
    ===     IGUALDADE ESTRITA (verifica tipo)
    !=      DIFERENTE (ignora tipo)
    !==     DIFERENTE ESTRITO (verifica tipo)
*/

// Exemplo
console.log(10 > 5); // true
console.log(10 < 5); // false

console.log(5 == "5"); // true
console.log(5 === "5"); // false -> compara valor e tipo

// Operadores Matemáticos
/*
    +   SOMA
    -   SUBTRAÇÃO
    *   MULTIPLICAÇÃO
    /   DUVUSÃO
    %   RESTO DA DIVISÃO
    **  POTÊNCIA
*/

// Exemplo
let a = 10;
let b = 5;

console.log(a + b); // soma
console.log(a - b); // subtração
console.log(a * b); // multiplicação
console.log(a / b); // divisão
console.log(a % b); // resto da divisão
console.log(a ** b); // potência

// Operadores Lógicos
/*
    &&  (AND)   -> OPERADOR E 
    ||  (OR)    -> OPERADOR OU
    !(NOT)      -> OPERADOR NÃO (negação)  
*/

// Operador &&
// só retorna verdadeiro quando todas as condições forem verdadeiras

let num1 = 5
let num2 = 5
let num3 = 10
console.log(num1 == num2 && num3 > num2); // true

// Operador ||
// retorna verdadeiro se pelo menos uma das condições forem verdadeiras

let num4 = 9
console.log(num1 == num4 || num1 == num2); // true

// Operador !(NOT)
// inverte a condição, se é verdadeiro -> vira falso e vice e versa

let logado = false;
console.log(!logado); // true

console.log(5 != 3); // true
console.log(!(5 != 3)); // false


// ARRAY (lista)

let frutas = ["maça", "banana", "uva"];

// imprimindo a lista completa de frutas
console.log(frutas);


// imprimindo a fruta na posição 1
console.log(frutas[1]);

// imprimindo o tamanho da lista
console.log(frutas.lenghth);


// OBJETOS
let pessoa = {
    nome: "Pedro",
    idade: 25
};

// imprime a pessoa completa
console.log(pessoa);

// imprime somente o nome da pessoa
console.log(pessoa.nome);

// imprime somente a idade da pessoa
console.log(pessoa.idade);

// // array de objetos
// let pessoa = [
//     {
//         nome: "Pedro",
//         idade: 25;
//     },
//     {
//         nome: "Mauricio",
//         idade: 27;
//     }
// ]

// // recebendo dados do usuário
// let nome = prompt("Digite seu nome: ");
// alert(`Olá, ${nome}`);

function mensagem() {
    alert("Olá, seja bem vindo(a)!");
}

