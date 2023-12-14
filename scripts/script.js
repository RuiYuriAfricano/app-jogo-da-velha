var JOGADOR_ATUAL;
var placar = [0, 0, 0]; // placar: [0] VITÓRIAS; [1] DERROTAS; [2] EMPATES
var IA = false;
var jogadasPossiveis;
var celulasMarcadas;
var btnIA = document.getElementById("buttonIA");
var btnReiniciar = document.getElementById('button');
const casas = document.querySelectorAll('.casa');
var estadoDoJogo = document.getElementById("resultado");
const POSSIBILIDADE_VENCER = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];

function iniciar() {
    botaoReiniciar();
    JOGADOR_ATUAL = 'X';
    celulasMarcadas = [];
    jogadasPossiveis = POSSIBILIDADE_VENCER;
    casas.forEach((item, index) => {
        item.addEventListener('click', marcar);
    });
    btnIA.addEventListener("click", ativarIA);
}

function atualizarPlacar() {
    let placarElements = document.querySelector('.scoreboard').querySelectorAll('div');
    placarElements.forEach((element, index) => {
        element.innerHTML = placar[index];
    });
}

function ativarIA() {
    IA = !IA;
    IA ? btnIA.innerHTML = "MÁQUINA: ATIVADA" : btnIA.innerHTML = "MÁQUINA: DESATIVADA";
}

function botaoReiniciar(hide = false) {
    if (hide) return btnReiniciar.style.display = "inline-block";
    btnReiniciar.style.display = "none";
    btnReiniciar.addEventListener('click', reiniciarJogo, { once: true });
}

function trocarJogador() {
    JOGADOR_ATUAL === 'X' ? JOGADOR_ATUAL = 'O' : JOGADOR_ATUAL = 'X';
}

function jogadaValida(local) {
    return local.innerHTML == '';
}

function celulaMarcada(id) {
    if (casas[id - 1].innerHTML != "") return casas[id - 1].innerHTML;
}

function marcarCelula(id) {
    casas[id - 1].click();
}

function terminarJogo() {
    casas.forEach((item, index) => {
        item.removeEventListener("click", marcar);
    });
}

const marcar = (e) => {
    if (jogadaValida(e.target)) {
        e.target.innerHTML = JOGADOR_ATUAL;
        celulasMarcadas.push(e.target.innerHTML);

        if (isVencedor()) {
            estadoDoJogo.innerHTML = `'${JOGADOR_ATUAL}' GANHOU!`;
            switch (JOGADOR_ATUAL) {
                case 'X':
                    placar[0]++;
                    break;
                case 'O':
                    placar[1]++;
                    break;
            }
            atualizarPlacar();
            terminarJogo();
            botaoReiniciar(true);
        } else {
            if (isEmpate()) {
                placar[2]++;
                atualizarPlacar();
                estadoDoJogo.innerHTML = "EMPATE!";
                botaoReiniciar(true);
            } else {
                trocarJogador();
                if (JOGADOR_ATUAL == "O" && IA) verificarIA();
            }
        }
    } else {
        alert("Jogada indevida!");
    }
};

function isEmpate() {
    return celulasMarcadas.length == 9;
}

function isVencedor() {
    return POSSIBILIDADE_VENCER.some((combination) => {
        return combination.every((id) => {
            return celulaMarcada(id) == JOGADOR_ATUAL;
        });
    });
}

const reiniciarJogo = (e) => {
    iniciar();
    casas.forEach((casa) => {
        casa.innerHTML = "";
    });
    estadoDoJogo.innerHTML = "JOGO DA VELHA";
};

function marcarIA(combination) {
    let id = 0;
    combination.some((element) => {
        if (celulaMarcada(element) == undefined) id = element;
    });
    marcarCelula(id);
}

function verificarIA() {
    let aX = [];
    let aO = [];
    let iniciar = [];
    let vencer = [];
    let riscoDePerder = [];
    let tentarVencer = [];
    POSSIBILIDADE_VENCER.forEach((combination) => {
        let X = 0;
        let O = 0;
        combination.forEach((elements) => {
            if (celulaMarcada(elements) == 'X') X++;
            if (celulaMarcada(elements) == 'O') O++;
        });
        aX.push(X);
        aO.push(O);
    });
    aO.forEach((element, index) => {
        switch (element) {
            case 0:
                if (aX[index] == 2) {
                    riscoDePerder.push(POSSIBILIDADE_VENCER[index]);
                } else if (aX[index] == 1) {
                    iniciar.push(POSSIBILIDADE_VENCER[index]);
                }
                break;
            case 1:
                if (aX[index] == 0) tentarVencer.push(POSSIBILIDADE_VENCER[index]);
                else if (aX[index] == 1) iniciar.push(POSSIBILIDADE_VENCER[index]);
                break;
            case 2:
                if (aX[index] == 0) {
                    vencer.push(POSSIBILIDADE_VENCER[index]);
                }
                break;
        }
    });

    if (vencer.length > 0) {
        return verificarIAIniciar(vencer);
    } else if (riscoDePerder.length > 0) {
        return verificarIAIniciar(riscoDePerder);
    } else if (tentarVencer.length > 0) {
        return verificarIAIniciar(tentarVencer);
    } else if (iniciar.length > 0) verificarIAIniciar(iniciar);
}

function verificarIAIniciar(iniciar) {
    let numbers = [];
    iniciar.forEach((element) => {
        element.forEach((num, i) => {
            if (celulaMarcada(num) == undefined) {
                numbers.push(num);
            }
        });
    });
    IArandomPlay(numbers);
}

function IArandomPlay(combination) {
    let idPlay = [];
    idPlay.push(combination[Math.floor(Math.random() * combination.length)]);
    marcarIA(idPlay);
}

ativarIA();
atualizarPlacar();
iniciar();
