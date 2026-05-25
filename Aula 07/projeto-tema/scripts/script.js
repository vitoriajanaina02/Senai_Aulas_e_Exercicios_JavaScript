const botao = document.getElementById("botaoTema");
const corpoPagina = document.body;
const caixa = document.getElementById("caixa");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

let modoEscuroAtivado = false;

botao.addEventListener("click", () => {
    if(modoEscuroAtivado === true) {
        corpoPagina.style.backgroundColor = "#FFFFFF;" // muda o fundo para branco
        corpoPagina.style.color = "#000000"; // muda as letras para preto

        caixa.style.backgroundColor = "#F4F4F4"; // muda a cor do fundo da caixinha
        caixa.style.color = "#CCCCCC"; // muda a cor da borda da caixinha

        botao.style.backgroundColor = "#000000"; // muda a cor de fundo do botão
        botao.style.color = "#FFFFFF"; // muda a cor da letra do botão
        botao.style.border = "none"; // retira a borda que é criada por padrão nos botões

        titulo.style.color = "#222222"; // muda a cor da letra do titulo
        texto.style.color = "#333333"; // muda a cor da letra do texto

        botao.innerText = "Ativar modo escuro"; // muda o texto do botão

        modoEscuroAtivado = false; // indica que o modo escuro não está mais ativado
    }
    else {
        corpoPagina.style.backgroundColor = "#1E1E1E";
        corpoPagina.style.color = "#FFFFFF";

        caixa.style.backgroundColor = "#333333";
        caixa.style.border = "1px solid #FFFFFF";
        
        botao.style.backgroundColor = "#FFFFFF";
        botao.style.color = "#000000";
        botao.style.border = "none";

        titulo.style.color = "#00FFFF";
        texto.style.color = "#DDDDDD";

        botao.innerText = "Ativar modo claro";

        modoEscuroAtivado = true;
    }
});