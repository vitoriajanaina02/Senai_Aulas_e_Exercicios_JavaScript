// Estruturas de repetição
// permite executar várias vezes um bloco de código com base em uma condição

// tipos:
/*
    FOR
    WHILE
    DO WHILE
    FOREACH
*/

// FOR -> Usamos para repetir várias vezes quando sabemos quantas vezes o código vai se repetir.
/*
let i = 1;  ->  Criamos uma variável chamada "i". 
                essa varável vai servir como um estado inicial da estrutura de repetição
                conforme for se repetindo, ela vai aumentando de valor
i <= 5;     ->  condição essa condição vai definir o limite de repetição
                enquanto o valor de "i" for menor ou igual a 5 - imprime OI
i++         ->  iterador: quando usamos o ++, quer dizer que estamos acrescentando +1 dentro do i
                i++ é a mesma coisa que i = i + 1
*/
for(let i = 4; i <= 5; i++) {
    console.log("OI");
}

// WHILE -> Executa um bloco de código enquanto uma condição for verdadeira.
let contador = 4;

while(contador <= 10) {
    console.log("Repetindo...");
    console.log(contador);
    contador++ // contador = contador + 1
}

// DO WHILE -> Executa pelo menos uma vez antes da condição.
let numero = 5;

do {
    console.log("Executou pelo menos uma vez");
    numero++
}
while(numero > 3); // false

// diferença -> while pergunta e depois executa \\\ do while executa e depois pergunta
let numero2 = 2

while(numero2 < 3) {
    console.log("Executou aqui");
    numero2++
}

// FOREACH -> Usado para percorrer lista de elementos (para cada nome na lista)
let nomes = ["Davi", "Felipe", "Amanda"];

nomes.forEach(function(nome) {
    console.log(`Nome: ${nome}`);
    console.log(nomes[1]);
})

// foreach simplificada -> arrow function (função lamda) **usando setinha
nomes.forEach(nome => {
    console.log(`Nome: ${nome}`);
    console.log(nomes[2]);
})

// Sistema de intervalo definido pelo usuário
let inicio = Number(prompt("Digite o número inicial: "));
let fim = Number(prompt("Digite o número final: "));

// i+=5 -> soma +5 no i.
for (let i = inicio; i <= fim; i+=5) {
    console.log(i);
}

// while com condição para sair do sistema
let valor = "";  

while(valor != "sair") {
    valor = prompt("Digite algo para sair ou parar");
    console.log(`Você digitou: ${valor}`);
}

// contador - 1 à 10 (com regra).
let limite = Number(prompt("Mostrar números maiores que: "));

for(let i = 1; i <= 10; i++) {
    if(i > limite) {
        console.log(i);
    }
}

// percorreno um array usando for
let cores = ["Azul", "Verde", "Vermelho"] // tamanho 3 e a posição(indice) começa em zero - vai de 0 até 2

// length -> tamanho (pega o tamanho da lista)
for(let i = 0; i < cores.length; i++) {
    console.log(`Posição da cor: ${i} - ${cores[i]}`);
}

// condição dentro do foreach
let numeros = [3, 7, 10, 15];

numeros.forEach(num => {
    if(num > 8) {
        console.log(`Maior que 8: ${num}`);
    }
})

// percorrendo objeto
const pessoa = {
    nome: "Carlos",
    idade: 28,
    profissao: "Desenvolvedor",
};

// for ... in -> usamos para objetos (chaves / ìndices)
for(let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// for ... of -> usamos para arrays dos objetos para retornar o valor 
// outro exemplo
const produtos = [
    {
    nome: "Notebook",
    preco: 35000,
    estoque: 15,
    },
    {
        nome: "Mouse",
        preco: 80,
        estoque: 40,
    },
    {
        nome: "Teclado",
        preco: 150,
        estoque: 20,
    }
]

for(let produto of produtos) {
    console.log(produto.nome) // acessando o nome do produto
}

// imprimindo informações
for(let produto of produtos) {
    console.log(`Produto: ${produto.nome} | Preço: R$${produto.preco}`);
}