const X = "X";
const O = "O";
var playTime = X;


function selecionarArea(posicaoLinha, posicaoColuna) {
    if (playTime == X){
        desenharSimbolo(X, posicaoLinha, posicaoColuna);
        condicaoVitoria();
        marcarJogadorAtivo(O);
        playTime = O;
    }
    else{
        desenharSimbolo(O, posicaoLinha, posicaoColuna);
        condicaoVitoria();
        marcarJogadorAtivo(X);
        playTime = X; 
    }
}


function condicaoVitoria(){
    const selecionarAreaQuadrado = document.querySelectorAll(".quadrado-jogo");
        let area1 = selecionarAreaQuadrado [0]; 
        let area2 = selecionarAreaQuadrado [1]; 
        let area3 = selecionarAreaQuadrado [2];
        let area4 = selecionarAreaQuadrado [3]; 
        let area5 = selecionarAreaQuadrado [4]; 
        let area6 = selecionarAreaQuadrado [5]; 
        let area7 = selecionarAreaQuadrado [6]; 
        let area8 = selecionarAreaQuadrado [7]; 
        let area9 = selecionarAreaQuadrado [8]; 
    if(  
        combinacoes(area1,area2,area3) ||
        combinacoes(area4,area5,area6) ||
        combinacoes(area7,area8,area9) ||

        combinacoes(area1,area5,area9) ||
        combinacoes(area3,area5,area7) ||
        combinacoes(area1,area4,area7) ||

        combinacoes(area2,area5,area8) ||
        combinacoes(area3,area6,area9)

      )
    {
            exibirResultado(`O Jogador ${playTime} venceu!`);
    }else{
            checharArea() ? exibirResultado("Empate!"): '';
    }
}

const quadradoDoJogo = document.querySelectorAll(".quadrado-jogo");

function checharArea(){
for(let i in quadradoDoJogo){
    if(quadradoDoJogo[i].textContent ===''){
        return false;
    }       
}
        return true;
}

function combinacoes(area2, area3, area4){
    if(area2.textContent === area3.textContent && area2.textContent === area4.textContent && area2.textContent !== ""){
        return true;         
    }
        return false;
    }


function reiniciarJogo() {
    location.reload();
}