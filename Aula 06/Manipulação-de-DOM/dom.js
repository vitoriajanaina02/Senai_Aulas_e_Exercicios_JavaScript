// MANIPULAÇÃO DE DOM
// DOM -> Document Object Model é a forma como o navegador organiza o html para que o js consiga acessar os elementos

//Principais métodos de seleção de elemetos no DOM
/*
    getElementById -> serve para selecionar um elemento pelo seu ID.

    querySelector -> serve para selecionar o 1° elemento que correspode a um seletor CSS (tag(ex. p, h1, h2), ID, nome de classe)

    querSekectirAll -> serve para selecionar TODOS os elementos que correspondem a um seletor.

    getElementsByClassName -> serve para selecionar TODOS os elementos que correspondem a uma classe.
*/

// getElementById
const titulo = document.getElementById("titulo");
const valor = document.getElementById("titulo").innerText;

console.log(titulo);
console.log(valor);