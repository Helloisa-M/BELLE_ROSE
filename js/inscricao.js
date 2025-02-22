document.addEventListener("DOMContentLoaded", function () {
    let botao = document.querySelector("#bot");

    if (botao) {
        botao.addEventListener("click", function () {
            alert("Aproveite o conteúdo exclusivo!");
            
            // Armazena no localStorage que o usuário se inscreveu
            localStorage.setItem("inscrito", "true");

            // Redireciona para a página inicial
            window.location.href = "index.html"; // Altere o caminho se necessário
        });
    }
});
