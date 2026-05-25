// Criar um contador simples utilizando JavaScript, onde o número exibido na tela aumenta a cada clique do usuário.
let contador = 0;
let meucontador = document.getElementById("numero");
let botao = document.getElementById("meuBotao"); 

botao.addEventListener("click", () => {
    contador = contador + 1;
    meucontador.innerText = contador;
});