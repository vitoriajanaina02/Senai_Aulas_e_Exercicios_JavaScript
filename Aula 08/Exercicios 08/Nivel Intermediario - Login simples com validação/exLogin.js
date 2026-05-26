// Login simples com validação
let usuarioCorreto = "admin";
let senhaCorreta = "1234";
let usuarioDigitado = "";
let senhaDigitada = ""; 

while(usuarioDigitado !== usuarioCorreto || senhaDigitada !== senhaCorreta) {
    usuarioDigitado = prompt("Digite seu usuário: ");
    senhaDigitada = prompt("Digite sua senha: ");
    
    if(usuarioDigitado !== usuarioCorreto || senhaDigitada !== senhaCorreta) {
        alert("Usuário ou senha inválidos! Tente novamente")
    }
    else {
        alert("Login realizado com sucesso."); 
    }
}