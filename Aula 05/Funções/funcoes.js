// Funções nativas do JavaScript
// Ajudam a manter um código limpo e organizado e evita muita repetição de código

// MAP -> Percorre uma lista e cria uma nova lista om base em uma condição
let numeros = [1, 2, 3, 4];
let numerosDobrados = numeros.map(function(num){
    return num * 2;
});

console.log(numerosDobrados);

// mesma função, mas agora com arrow function
let numerosDobrados2 = numeros.map(num => num * 2);
console.log(numerosDobrados2);

numeros.map(num => {
    let resultado = num * 2;
    return resultado;
})

console.log(teste);

// IF Ternário
// se for verdadeiro -> a resposta vem depois da interrogação
// se for falso -> a resposta vem depois dos dois pontos
// se depois dos dois pontos tiver outra condição, a gente volta para o começo
let resposta = (idade > 18) ? "maior de idade" : "menor de idade";
let resposta2 = (idade > 18) ? "maior de idade" : (idade > 75) ? "idoso" : "menor de idade";

// FILTER -> Filtra os elementos de uma lista com base em uma condição
let numeros2 = [5, 10, 15, 20];
let maiorQueDez = numeros2.filter(num => num > 10);
console.log(maiorQueDez); // [15, 20]

// REDUCE -> Reduz os valores de um array para um único valor
let numeros3 = [1, 2, 3, 4]

// acumulador
// variável auxiliar
// 0 -> é o valor inicial do acumulador
let soma = numeros3.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);
console.log(soma);

// FIND -> retorna o primeiro elemento que atende a uma condição
let produtos = [
    {id: 1, nome: "Teclado", preco: 50},
    {id: 2, nome: "Mouse", preco: 30},
    {id: 2, nome: "Fone de ouvido", preco: 200},
]

let item = produtos.find(produto => produto.id === 2); 
console.log(item);

// SPLIT -> Divide uma string em partes, transformano em uma lista.
let frase = "JS é muito bom!";
let num = "1234"

// criando um array de palavras usando split
let palavras = frase.split(" ");
console.log(palavras)
let numSeparado = num.split("2");
console.log(numSeparado);

// TRIM -> remove espaços no inicio e final de uma string
let nome = "    João    ";
let nome2 = "   João    ";
let nomeLimpo = nome.trim();

console.log(nomeLimpo);
console.log(nome2);

// INCLUDES -> verifica se existe um valor dentro de uma lista ou string
let frutas = ["maça", "banana"];
let frutaExiste = frutas.includes("banana"); // booleano
console.log(frutaExiste); // true (verdadeiro)

// toLowerCase -> transforma o texto em minúsculo
// toUpperCase -> transforma o texto em maiúsculo
let nome3 = "Késsia";
let cargo = "instrututa";

console.log(nome.toLowerCase()); // kessia
console.log(cargo.toUpperCase()) // INSTRUTORA 

// FOREACH -> Percorre todos os elementos do array
let nomes = ["Pedro", "João", "Thiago"];

nomes.forEach(nome => console.log(`Seu nome é: ${nomes}`));

// SOME -> Verifica se pelo menos um item da lista atende a condição
let numeros4 = [1, 3, 5, 8];
let temPar =numeros4.some(num => num % 2 === 0); // true or false
console.log(temPar); // true

// EVERY -> Verifica se TODOS os elementos da lista atendem a uma condição
let todosPares = numeros4.everu(num => num % 2 === 0);
cnsole.log(todosPares); // false

// SORT -> Ordena os elementos de uma lista
let numeros5 = [3, 10, 5, 2, 4];
let letras = ["c", "a", "x", "h"];
let teste = ["Desenvolvedor", "Vitoria"];

// ordenando letras 
letras.sort();
console.log(letras);

// ordenando números
numeros5.sort((a, b) => a - b);
// console.log(numeros5);

// // REVERSE -> Inverte a ordem de um array
// numeros5.reverse();
// console.log(numeros5);

// teste.reverse();
// console.log(teste);

// JOIN -> junta os elementos de um array em uma string
let palavras2 = ["JS", "é", "muito", "bom!"];
let frase2 = palavras2.join(" ");
console.log(frase2);


// PUSH -> Adicionar elementos no final do array
// POP -> Remover elementos no do array
let lista = ["A", "B"];

lista.push("C"); // adicionando
console.log(lista);

lista.pop(); // removendo
console.log(lista);


// SHIFT -> Remover elementos do inicio do array
// UNSHIFT -> Adicionar elementos no inicio do array
let lista2 = ["B", "C"];

lista2.unshift("A"); // adiciona
console.log(lista2);

lista2.shift(); // remove
console.log(lista2);

// SLICE -> Cria uma cópia de uma parte da lista
/*
    arra.slice(inicial,final)

    inicial -> onde começa (a copiar o array)
    final -> onde para (não inclui a posição final (indice / index))
 */

let numeros6 = [1, 2, 3, 4];
let copia =numeros6.slice(1, 3); // 1 e 3 são posições do array
console.log(copia);

// SPLICE -> Remove ou adiciona elementos em qualquer posição
/*
    array.splice(indice, count, item1, item2, ..., itemX)
    indice -> posição do elemento no array(index)
    count -> números de itens a serem removidos (pode ser 0)
    item -> itens que vão ser adicionados
*/

let numeros7 = [1, 2, 3, 4]
numeros7.splice(1, 1);
console.log(numeros7);


let frutas2 = ["Banana", "Laranja", "Maça", "Manga"];
frutas2.splice(0, 3, "Limão", "Kiwi");
console.log(frutas2);


let frutasNovas = ["Banana", "Laranja", "Maça", "Manga"];
frutasNovas.splice(2, 0, "Limão", "Kiwi");
console.log(frutasNovas);

// REPLACE -> Substitui uma parte da string
let texto = "Olá, mundo";

// replace(valorProcurado, valorSubstituto)
let novoTexto = texto.replace("mundo", "cliente");
console.log(novoTexto);


// SPOILER........
let textoP = document.getElementById("texto");
// console.log(textoP);

let saudacao = prompt("Digite uma saudação: ");

textoP.textContent = saudacao == "bom dia" ? saudacao : "QUINTOOOOOOOOOOOU!!!";