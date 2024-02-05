const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoRetornar = document.getElementById('anterior');


const audioCapitulo = document.getElementById('audio-capitulo');
const numeroDeCapitulos = 10;

let executando = 0;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');

}
function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    

}

function tocarOuPausar(){
    if (executando === 0){
        tocarFaixa();
        executando = 1;
    } else {
        pausarFaixa();
        executando = 0;
    }
}

// function tocarNomeFaixa(){
//     numeroDeCapitulos.
// }
function proximaFaixa(){
    if( capituloAtual === 1){
        capituloAtual = numeroDeCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    executando = 1;
}

function voltarFaixa(){
    if( capituloAtual === numeroDeCapitulos){
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    executando = 1;
}


botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoRetornar.addEventListener('click', voltarFaixa);