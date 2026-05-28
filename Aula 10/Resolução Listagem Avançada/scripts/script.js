const botaoAdicionar = document.getElementById("botao-adicionar");
const lista = document.getElementById("lista");
const inputTarefa = document.getElementById("input-tarefas");
const botaoLimpar = document.getElementById("botao-limpar"); 

botaoAdicionar.addEventListener("click", () => {
   
    if(inputTarefa.value.trim() === "") {
        alert("Digite uma tarefa!");
        return; // serve para quebrar e não executar mais nada pra baixo dessa função.
    }

    // cria a tag <li> mas ainda não usa ela.
    const li = document.createElement("li");

    // o elemento <li> recebe o valor digitado no input.
    const texto = document.createElement("p");
    texto.innerText = inputTarefa.value;

    // criando o botão de lixeira.
    const botaoLixeira = document.createElement("button");
    botaoLixeira.innerText = "🗑️";

    botaoLixeira.style.border = "none"; // tira a borda do botão de lixeira.
    botaoLixeira.style.cursor = "pointer"; // trocar setinha por mãozinha.
    botaoLixeira.style.backgroundColor = "none"; // retira a cor do fundo.

    botaoLixeira.addEventListener("click", () => { // removendo os itens da lixeira.
        // li.remove(); // remove a tarefa.
        texto.style.textDecoration = "line-through"; // risca a tarefa.
    })

    li.appendChild(texto);
    li.appendChild(botaoLixeira);

    lista.appendChild(li);
    
    inputTarefa.value = "";
})

botaoLimpar.addEventListener("click", () => {
    lista.innerHTML = "";
})