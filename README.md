# app-jogo-da-velha

Aplicação do conhecimento de IA no projecto jogo da velha, avaliação da cadeira de Inteligência Artificial

<img alt="jogo-inicio.png" src="https://github.com/RuiYuriAfricano/app-jogo-da-velha/tree/main/view/jogo-inicio.png?raw=true" data-hpc="true" class="Box-sc-g0xbh4-0 kzRgrI">

# Lógica aplicada

'X' sempre inicia o game. Após a primeira jogada, o turno é invertido e então é a vez da 'BOLINHA' jogar. Somente depois de realizar uma jogada válida o sistema analisa se houve uma vitória, caso não tenha, inverte o turno e segue o jogo até alguém ganhar ou dar EMPATE!

<img alt="jogo-inicio.png" src="https://github.com/RuiYuriAfricano/app-jogo-da-velha/tree/main/view/jogo-vitoria.png?raw=true" data-hpc="true" class="Box-sc-g0xbh4-0 kzRgrI">

<img alt="jogo-inicio.png" src="https://github.com/RuiYuriAfricano/app-jogo-da-velha/tree/main/view/jogo-empate.png?raw=true" data-hpc="true" class="Box-sc-g0xbh4-0 kzRgrI">

# GANHOU ou EMPATE

Sempre que acontecer um ou outro, surgirá um botão logo abaixo para reiniciar o jogo. Após pressionar, ele irá desaparecer.

# IA do projecto

O que acontece aqui é o seguinte: Após uma jogada do jogador X, é disparada a execução da IA que irá analisar quais as jogadas possíveis de vitória do jogador 'X', baseado na jogada inicial. Destas, a IA irá jogar em alguma das casas em que X pode ganhar. Após a próxima jogada do jogador 'X', a IA irá analisar:

Jogador 'X' está prestes a ganhar? Se sim, IA irá bloquear a vitória jogando na casa restante. Caso esta condição acima seja negativa, IA irá jogar na casa disponível para formar sua vitória.
OBS: Caso IA veja que há tanto a possibilidade do Jogador 'X' vencer quanto de IA vencer, ela vai marcar onde é sua vitória.

# Funcionalidades

- Jogar humano com humano
- Jogar humano com computador
- Reiniciar o jogo, depois de terminar
- Visualização do Scored

# Stack

- Html
- Css
- Javascript
- IA nativo do Javascrit

# Others 

- Git
- VScode 
- Chrome
  
# Como rodar o Projeto

Você pode criar uma pasta em sua máquina e, dentro dela, clicar com botão direito e apertar 'GIT BASH HERE'. Com seu GIT aberto digite o seguinte código:

git clone https://github.com/RuiYuriAfricano/app-jogo-da-velha.git

Pronto. Você terá a pasta deste projeto dentro da sua pasta criada. Agora é só abrir o arquivo index.html com o navegador e tentar ganhar.

# Relatório
<object data="https://github.com/RuiYuriAfricano/app-taxi-project/tree/main/docs/relatorio-labFinal.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="https://github.com/RuiYuriAfricano/app-taxi-project/tree/main/docs/relatorio-labFinal.pdf">
        <p><a href="https://github.com/RuiYuriAfricano/app-taxi-project/tree/main/docs/relatorio-labFinal.pdf">Abrir Relatório</a>.</p>
    </embed>
</object>

Obrigado!
