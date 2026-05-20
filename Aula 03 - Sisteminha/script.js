const cliente = prompt("Digite seu nome: ");
let produto = prompt("Escolha seu pedido: \nCasquinha: baunilha, chocolate e pistache \nMilkShake: frutas vermelhas, leite ninho, ovomaltine ");
let quantidade = Number(prompt("Digite a quantidade de produtos: "));

let casquinhaBaunilha = "Casquinha de Baunilha";
let casquinhaChocolate = "Casquinha de Chocolate";
let casquinhaPistache = "Casquinha de Pistache";
let milkshakeFrutasVermelhas = "Milkshake de Frutas Vermelhas";
let milkshakeLeiteNinho = "Milkshake de Leite Ninho";
let milkshakeOvomaltine = "Milkshake de Ovomaltine";

let nomeProduto;
let preco;

switch (produto) {
    case "casquinha de baunilha":
        preco = 8;
        break;
    case "casquinha de chocolate":
        preco = 8;
        break;
    case "casquinha de pistache":
        preco = 8;
        break;
    case "milkshake de frutas vermelhas":
        preco = 17;
        break;
    case "milkshake de leite ninho":
        preco = 17;
        break;
    case "milkshake de ovomaltine":
        preco = 17;
        break;
    default:
        alert("Produto inválido.");
}

let total = preco * quantidade;

console.log("Sorvete da Vila");
console.log(`Cliente: ${cliente}`);
console.log(`Produto: ${produto}`);
console.log(`Preço: ${preco}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Valor total: ${total}`);
console.log("Pedido realizado com sucesso!");
console.log("Seu pedido será entregue pelo seu nome. \nAgradecemos a preferência! \nBom apetite!");