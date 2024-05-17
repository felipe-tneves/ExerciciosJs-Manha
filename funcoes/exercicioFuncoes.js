// Construir um menu que é possível escolher um exercicio entre os exercicios anteriores, para ser executado. Faça com que o menu repita a sua execução, disponibilize as opções para o usuário, até que seja digitado "sair"

function exercicioLogin() {
    let username = prompt("Digite o seu usuário: ");

    let senha = prompt("Digite sua senha: ");

    if (username == "admin" && senha == "senha123") {
        console.log("Login bem sucedido!");
    }
    else {
        console.log("Você não tem permissão de acesso!");
    }

}

let opcao = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Exercicio Login")

switch (opcao) {
    case "1":
        exercicioLogin()
        break;

    default:
        break;
}