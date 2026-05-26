// Criação de Botão de Like (curtir)
const reagir = document.getElementById("curtida");
const botao = document.getElementById("like");
// const botaoDescurtir = document.getElementById("deslike");

let like = false;

botao.addEventListener("click", () => {
    like = !like;

    if(like) {
        reagir.textContent = "👍 curtido";
        botao.style.color = "#ff0000ff"
    }
    else {
        reagir.textContent = "👎 não curtido";
        botao.style.color = "#000000"
    }
});