const inputPedido = document.getElementById("input-pedido");
const botaoAdicionar = document.getElementById("btn-adicionar");
const listaPedidos = document.getElementById("lista-pedidos");

let pedidos = [];

function salvarPedidos() {
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

function mostrarPedidos() {
    listaPedidos.innerHTML = "";

    for(let i = 0; i < pedidos.lenght; i++) {
        const li = document.createElement("li");
        li.innerText = pedidos[i];

        
    }
}