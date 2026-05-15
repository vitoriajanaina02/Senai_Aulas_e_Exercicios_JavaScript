// EXERCÍCIO 1 - PERFIL

let nome1 = "Vitória";
let idade1 = 23;
let profissao = "Montadora Óptica";
let cidade = "Ribeirão Pires";

console.log(`Meu nome é ${nome}, tenho ${idade} anos, trabalho como ${profissao} e moro em ${cidade}`);

// EXERCÍCIO 2 - PRODUTO

let produto = "camisetas";
let preco = 100;
let quantidade = 2;

console.log(`Comprei ${quantidade} unidades de ${produto} por ${preco} reais cada`);

// EXERCÍCIO 3 - CALCULANDO VALORES

let valor1 = 10
let valor2 = 20

console.log(valor1 + valor2); 
console.log(valor1 - valor2); 
console.log(valor1 * valor2); 
console.log(valor1 / valor2);

// EXERCÍCIO 4 - TIPOS

// Variável String
let mensagem = "Desenvolvimento em JavaScript";
console.log(typeof mensagem);

// Variável Number
let altura1 = 1.62
console.log(typeof altura);

// Variável Boolean
let estouEstudando = true
console.log(typeof estouEstudando);

// Variável Underfined
let curso;
console.log(typeof curso);

// Variável Null / Object
let horario = null;
console.log(typeof horario);

// EXERCÍCIO 5 - CONVERSÕES

let numero = "100";
let convertido = Number(numero);
console.log(typeof numero);

let numero2 = 100;
let texto = String(numero2);
console.log(typeof numero2);

// DESAFIO - CRIAÇÃO DE UM MINI CADASTRO

let nome2 = "Vitória";
let idade2 = 23;
let altura2 = 1.62;
let peso = "50kg";
let cidade2 = "Ribeirão Pires";
let profissao2 = "Montadora Óptica";

console.log(`Nome: ${nome2}\nIdade: ${idade2}\nAltura: ${altura2}\nPeso: ${peso}\nCidade: ${cidade2}\nProfissão: ${profissao2}`);
