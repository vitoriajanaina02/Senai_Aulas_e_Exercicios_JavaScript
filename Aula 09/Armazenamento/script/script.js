const inputTarefa = document.getElementById("input-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

// criando uma lista vazia
let tarefas = [];

// função para salvar tarefas no local storage
function salvarTarefas() {

    // localStorage -> armazenamento local do navegador 
    // setItem -> salva no armazenamento o conteúdo recebido
    // JSON.stringify(tarefas) -> pega a lista de tarefas, converte para texto (string) e armazena esse texto
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// função para mostrar tarefas na tela
function mostrarTarefas() {
    listaTarefas.innerHTML = ""; // limpa a lista de tarefas na tela

    // tarefas = [tomar café, almoçar, jantar]
    for(let i = 0; i < tarefas.length; i++) {
        const li = document.createElement("li"); // para cada elemento, cria um li
        li.innerText = tarefas[i]; // cada vez que criar o li, passa o valor que está na lista de tarefas na posição i

        const botaoRemover = document.createElement("button")
        botaoRemover.innerText = "🗑️";
        botaoRemover.className = "botao-remover"; // cria classe para usar estilização do css

        botaoRemover.addEventListener("click", () => {
            // CHAMAR FUNÇÃO PARA REMOVER TAREFA
            removerTarefas(i);
        })

        li.appendChild(botaoRemover);
        listaTarefas.appendChild(li);
    }
}

function removerTarefas(posicaoTarefa) {
    // splice -> (posiçãoInicial, qtde_itens)
    tarefas.splice(posicaoTarefa, 1);

    // depois de remover, chamo a função de salvar no localStorage
    // atualiza localStorage com arrau de tarefas atualizado
    salvarTarefas(); 

    // mostra as tarefas atualizadas, sem as tarefas que foram removidas
    mostrarTarefas();
}

function adicionarTarefas() {
    const valorTarefa = inputTarefa.value;

    if(valorTarefa.trim() === "") {
        alert("Digite uma tarefa!");
        return; // não deixa a tarefa vazia aparecer na tela 
    }
    tarefas.push(valorTarefa); // adiciona tarefas dentro do array
    inputTarefa.value = "";

    salvarTarefas();
    mostrarTarefas();
}

// função para carregar as tarefas salvas no localStorage
function carregarTarefas () {
    // pega as tarefas e armazena na varíavel do localStorage e armazena na varíavel 'tarefasSalvas'
    const tarefasSalvas = localStorage.getItem("tarefas");

    // se existir alguma coisa dentro de tarefasSalvas então convere a tarefa e mostra na tela
    if(tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas);// transforma o texto no local que está no localStorage em array novamente
        mostrarTarefas();
    }
}

botaoAdicionar.addEventListener("click", adicionarTarefas);
carregarTarefas();