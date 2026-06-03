const inputPedido = document.getElementById("inputPedido");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaPedidos = document.getElementById("listaPedidos");
const btnAtender = document.getElementById("btnAtender");
const pedidoAtual = document.getElementById("pedidoAtual");

let pedidos = [];

// carregando dados do localStorage
const dados = localStorage.getItem("pedidos");

// se existir dados no localstorage
if(dados) {
    // a lista de pedidos recebe os dados convertidos em JSON
    pedidos = JSON.parse(dados);

    //! CHAMAR A FUNÇÃO DE RENDERIZAR/mostrar na tela
    renderizar();
}

function salvar() {
    // a lista é convertida em texto e armazenada dentro do localStorage
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}


// função de mostrar as informações na tela
function renderizar() {
    listaPedidos.innerHTML = "";

    pedidos.forEach((pedido, posicao) => {
        const li = document.createElement("li");
        li.innerText = pedido.texto;

        if(pedido.concluido) {
            li.style.textDecoration = "line-through";
        }

        li.addEventListener("click", () => {
            li.style.textDecoration = "line-through";
        })

        // botão remover
        const btnRemover = document.createElement("button");
        btnRemover.innerText = "❌";

        btnRemover.addEventListener("click", () => {
            pedidos.splice(posicao, 1);
            salvar();
            renderizar();
        })

        li.appendChild(btnRemover);
        listaPedidos.appendChild(li);
    })
}

// evento para adicionar pedido
btnAdicionar.addEventListener("click", () => {
    const textoDigitado = inputPedido.value;

    if(textoDigitado === "") {
        alert("Digite um pedido!");
        return;
    }

    pedidos.push({
        texto: textoDigitado,
        concluido: false
    })

    salvar();
    renderizar();

    pedidoAtual.innerText = "Nenhum pedido sendo atendido";
    inputPedido.value = "";
})

// evento do botão atender / marcar como concluído
btnAtender.addEventListener("click", () => {

    // encontrar o primeiro elemento que NÃO está concluído
    const proximo = pedidos.find(pedido => pedido.concluido == false);

    // se NÃO existir nada dentro de proximo
    if(!proximo) {
        pedidoAtual.innerText = "Todos os pedidos já foram atendidos";
    }

    // marcar como concluído 
    proximo.concluido = true;

    pedidoAtual.innerText = "Atendido: " + proximo.texto;

    salvar();
    renderizar();
})