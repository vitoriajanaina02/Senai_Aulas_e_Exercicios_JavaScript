const inputPedido = document.getElementById("input-pedido");
const botaoAdicionar = document.getElementById("btn-adicionar");
const listaPedidos = document.getElementById("lista-pedidos");
const botaoAtender = document.getElementById("btn-atender");
const botaoAndamento = document.getElementById("pedido-atual");

let pedidos = [];
let pedidoAtual = null;

function salvarPedidos() {
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

function mostrarPedidos() {
    listaPedidos.innerHTML = "";

    for(let i = 0; i < pedidos.length; i++) {
        const li = document.createElement("li");
        li.innerText = pedidos[i];

        const botaoRemover = document.createElement("button");
        botaoRemover.innerText = "❌";
        botaoRemover.className = "botao-remover";

        botaoRemover.addEventListener("click", () => {
            removerPedidos(i);

        })

        li.appendChild(botaoRemover);
        listaPedidos.appendChild(li);
    }
}
function removerPedidos(posicaoPedido) {
    pedidos.splice(posicaoPedido, 1);

    salvarPedidos();
    mostrarPedidos();
}

function adicionarPedidos() {
    const valorPedido = inputPedido.value;

    if(valorPedido.trim() === "") {
        alert("Digite um pedido.");
        return;
    }

    pedidos.push(valorPedido);
    inputPedido.value = "";

    salvarPedidos();
    mostrarPedidos();
}

function carregarPedidos() {
    const pedidosSalvos = localStorage.getItem("pedidos");

    if (pedidosSalvos) {
        pedidos = JSON.parse(pedidosSalvos);
        mostrarPedidos();
    }
}

function atenderPedidos() {
   pedidoAtual = pedidos.shift();

    botaoAndamento.innerText = "Atendendo: " + pedidoAtual;
}



botaoAdicionar.addEventListener("click", adicionarPedidos);
carregarPedidos();

botaoAtender.addEventListener("click", atenderPedidos);
carregarPedidos();