const registroMockados = {
    "09345020": {
        nome: "Alisson Miguel Rodrigues",
        rg: "36504520x",
        nascimento: "09/07/1987"
    },
    "00009987": {
        nome: "Ailton da Silva Rodrigues",
        rg: "12520471x",
        nascimento: "24/05/1974"
    },
    "02051830": {
        nome: "Rafaela Rosa da Silva",
        rg: "40018241x",
        nascimento: "08/11/2025"
    },
    "03380624": {
        nome: "Ellie Carson Santos",
        rg: "18205784x",
        nascimento: "22/04/2006"
    }
}

const botaoBuscar = document.getElementById("buscar")
const campoCodigo = document.getElementById("codigo");
const campoNome = document.getElementById("nome");
const campoRG = document.getElementById("rg");
const campoNascimento = document.getElementById("nascimento");

function preencherCampos(dados) {
    campoCodigo.value = dados.codigo;
    campoNome.value = dados.nome;
    campoRG.value = dados.rg;
    campoNascimento.value = dados.nascimento;
}

function limparCampos() {
    campoCodigo.value = "";
    campoNome.value = "";
    campoRG.value = "";
    campoNascimento.value = "";
}

function buscarRegistro() {
    const codigo = campoCodigo.value.replace(/\D/g, "").trim();

    if(codigo.lenght !== 8) {
        alert("Código inválido!");
        limparCampos();
        return;
    }

    const registro = registroMockados[codigo];

    if(!registro) {
        alert("Código não encontrado na base de dados.");
        limparCampos();
        return;
    }

    preencherCampos();
}

botaoBuscar.addEventListener("click", buscarRegistro);