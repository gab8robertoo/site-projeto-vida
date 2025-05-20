const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll ("aba-conteudo")

for (let i = 0; i < botoes.length; i++){
    botoes (i).onclik = function () {
       
        for(letj = 0; <botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
      
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
   };
}

const contadores = document.querySelector
const tempoObjetivo1 = new Date ("2025-08-23t00:00:00");
