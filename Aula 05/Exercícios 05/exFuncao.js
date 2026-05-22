// Lista de produtos
const produtos = [
    {id: 1, nome: "Notebook", preco: 3500 },
    {id: 2, nome: "Mouse", preco: 150 },
    {id: 3, nome: "Teclado", preco: 200 },
    {id: 4, nome: "Monitor", preco: 1200 },
];

// Filtrar produtos com preço acima de 500
let item1 = produtos.filter(produto => produto.preco > 500);
console.log(item1)

// Encontrar o primeiro produto chamado "Mouse"
let item2 = produtos.find(produto => produto.nome === "Mouse");
console.log(item2);

// Criar um array apenas com os nomes dos produtos
let item3 = produtos.map(produto => produto.nome);
console.log(item3);

// Somar todos os preços dos produtos usando reduce
let soma = produtos.reduce((acumulador, auxiliar) => acumulador + auxiliar.preco, 0);
console.log(soma);


// NÍVEL BÁSICO
// 1. Lista numerada
const nomes = ["Rosiane", "Johnny", "Junior", "Vitória", "Daniel"];
nomes.map((nome, indice) => console.log(`${indice} - ${nome}`));

// 2. Exibir posições
const cores = ["Azul", "Amarelo", "Vermelho", "Verde"];
cores.forEach((cores, indice) => console.log(`A cor ${cores} está na posição ${indice}`));

// 3. Primeiro e último
let numeros5 = [70, 600, 3000, 187, 350];
console.log(numeros5[0]);
console.log(numeros5[numeros5.length - 1]);

// 4. Contagem de itens
const frutas = ["banana", "manga", "abacate", "melancia"];
console.log(frutas.length);


// NÍVEL INTERMEDIÁRIO
// 1. Filtrar por posição
let nums = [24, 30, 20, 35, 34];
nums.filter((elemento, indice) => indice % 2 === 0);
console.log(nums);

// 2. Destacar item específico
const nome = ["Michel", "Vitória", "Késsia", "Eloá"];
for(let i = 0; i < nome.length; i++) {
    if(i === 2) {
        console.log(`Nome especial: ${nome[i]}`);
    }
}