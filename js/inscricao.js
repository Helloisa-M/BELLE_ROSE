document.addEventListener("DOMContentLoaded", function () {  
    let botao = document.querySelector("#bot"); #criamos uma variável chamada botão que armazena o id do botão que está lá na página HTML
    
        botao.addEventListener("click", function () { #define avisa o evento que vai acontecer, ou seja, o click, que quando o botão é clicado vai aparecer algo, 
            alert("Aproveite o conteúdo exclusivo!");
            
        });
});
