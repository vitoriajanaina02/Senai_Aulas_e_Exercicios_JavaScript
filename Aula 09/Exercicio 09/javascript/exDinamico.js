const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista");

botaoAdicionar.addEventListener("click", adicionarTarefas);

function adicionarTarefas() {
    const tarefa = document.getElementById("input-tarefa");
    const texto = tarefa.value.trim();

    if(texto === "") {
        alert("Digite uma tarefa");
        return;
    }
    const item = document.createElement("li");
    item.textContent = texto
    item.addEventListener("click", function() {
        item.remove
    });
    listaTarefas.appendChild(item);
    tarefa.value = "";
}