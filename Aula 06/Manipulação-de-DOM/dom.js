// // MANIPULAÇÃO DE DOM
// // DOM -> Document Object Model é a forma como o navegador organiza o html para que o js consiga acessar os elementos

// //Principais métodos de seleção de elemetos no DOM
// /*
//     getElementById -> serve para selecionar um elemento pelo seu ID.

//     querySelector -> serve para selecionar o 1° elemento que correspode a um seletor CSS (tag(ex. p, h1, h2), ID, nome de classe)

//     querySelectorAll -> serve para selecionar TODOS os elementos que correspondem a um seletor.

//     getElementsByClassName -> serve para selecionar TODOS os elementos que correspondem a uma classe.
// */

// // getElementById
// const titulo = document.getElementById("titulo");
// const valor = document.getElementById("titulo").innerText;

// console.log(titulo);
// console.log(valor);

// // querySelector 
// const titulo1 = document.querySelector("#titulo"); // chamando id -> #nomeid
// const paragrafo = document.querySelector(".paragrafo"); // chamando classes -> .nomeclasse
// const tituloH2 = document.querySelector("h2"); // chamando tags -> h2

// console.log(titulo);
// console.log(paragrafo);
// console.log(tituloH2);

// // querySelectorAll
// const elementos = document.querySelectorAll(".texto");
// console.log(elementos); // imprime o elemento (p)

// elementos.forEach(elemento => console.log(elemento.innerText)); // imprime o valor que está dentro do elemento (p)

// elementos.forEach(elemento => elemento.innerText = "Alterado"); // trocando o texto que está dentro do elemento

// elementos.forEach(elemento => elemento.innerHTML = "<h2>Item</h2>"); // trocando a tag

// elementos.forEach(elemento => elemento.style.color = "#0000FF"); // trocando a cor da fonte (letra)


// // Eventos -> são ações do usuário

// // Evento de click
// const botao = document.getElementById("btn");

// // adicionando um "escutador de eventos" no botão
// botao.addEventListener("click", () => { 
//     alert("Você clicou!");
// });

// // Evento de digitação (input / keyup)
// // evento input -> dispara sempre que digita, em tempo real
// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado");

// campo.addEventListener("input", () => {
//     resultado.innerText = campo.value; // value -> o valor digitado dentro da caixinha de texto
// });

// // evento keyup -> dispara quando solta a tecla
// campo.addEventListener("keyup", () => {
//     resultado.innerText = campo.value;
//     console.log("Tecla pressionada");
// });

// // evento de mouse
// const elemento = document.getElementById("troca-cor");
// const botao1 = document.getElementById("btn");

// // mouseover -> quando passa o mouse por cima do elemento
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#FF0000";
// });

// // mouseout -> quando o mouse sai de cima do elemento
// elemento.addEventListener("mouseout", () => {
//     // elemento.style.backgroundColor = "#0000FF";
//     botao.style.backgroundColor = "#0000FF";
//     elemento.style.backgroundColor = "";
// })

// // mousemove -> pega a posição do mouse
// document.addEventListener("mousemove", (evento) => {
//     console.log("Posição de X: ", evento.clientX, " Posição de Y: ", evento.clientY);
// })

// Evento de formulário (submit)
// const form = document.getElementById("form");

// // comportamento padrão de um formulário é recarregar a página
// form.addEventListener("submit", (evento) => {
//     evento.preventDefault(); // impede o comportamento padrão

//     const nome = document.getElementById("nome").value;
// });

// // Criando elementos napágina
// const novoElemento = document.createElement("p"); // cria um elmento <p>
// novoElemento.innerText = "Elemento novo criado"; // cria um texto no elemento


// form.appendChild(novoElemento); // estamos adicionando um elemento filho (p) dentro do pai (form).

// const botao2 = document.createElement("button");
// botao2.innerText = "Excluir elemento";
// form.appendChild(botao2);

// botao2.addEventListener("click", (e) => {
//     e.preventDefault();

//     novoElemento.remove();

//     // apagando direto do pai
//     // form.removeChild(novoElemento)
// });

// Adicionando elementos em uma lista (ul) através de um input
const input = document.getElementById("input") // input
const botao3 = document.getElementById("add") // button
const lista = document.getElementById("lista") // ul

botao3.addEventListener("click", () => {
    const valor1 = input.value; // pega o valor digitando na caixinha (input)

    const li = document.createElement("li");
    li.innerText = valor1; // li recebe o texto digitado na caixinha

    lista.appendChild(li); // <li> vai ser criado dentro do <ul>

    input.value = "";
});