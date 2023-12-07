var listaDinamica = [];

var palavraSorteada;
var palavraCategoria;

var tentativas = 6;


//palavras que podem aparecer no jogo
var palavras = [
    palavra01 = {
        nome: "BALEIA",
        categoria: "MAMÍFERO"
    },
    palavra02 = {
        nome: "GOLFINHO",
        categoria: "MAMÍFERO"
    },
    palavra03 = {
        nome: "FOCA",
        categoria: "MAMÍFERO"
    },
    palavra04 = {
        nome: "PEIXEBOI",
        categoria: "MAMÍFERO"
    },
    palavra05 = {
        nome: "TARTARUGA",
        categoria: "RÉPTEIS"
    },
    palavra06 = {
        nome: "COBRAMARINHA",
        categoria: "RÉPTEIS"
    },
    palavra07 = {
        nome: "CROCODILO",
        categoria: "RÉPTEIS"
    },
    palavra08 = {
        nome: "SUCURI",
        categoria: "RÉPTEIS"
    },
    palavra09 = {
        nome: "TUBARAOBALEIA",
        categoria: "PEIXES"
    },
    palavra10 = {
        nome: "PEIXESERRA",
        categoria: "PEIXES"
    },
    palavra11 = {
        nome: "MERO",
        categoria: "PEIXES"
    },
    palavra12 = {
        nome: "RAIAVIOLA",
        categoria: "PEIXES"
    },
]

//pegar tanto o nome quanto a categoria da palavra aleatoria
criarPalavraSecreta();
function criarPalavraSecreta(){
    var aleatorio = parseInt(Math.random() * palavras.length);

    palavraSorteada = palavras[aleatorio].nome;
    palavraCategoria = palavras[aleatorio].categoria;
    textoSorteado = palavras[aleatorio].Fim;
}


//exibir a dica do conteúdo e os traços da palavra
palavraNaTela();
function palavraNaTela(){
    var categoria = document.getElementById("dica")
    categoria.innerHTML = palavraCategoria;

    var palavraTela = document.getElementById("palavra_secreta")
    palavraTela.innerHTML = " ";

    for(i = 0; i < palavraSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}


//verifica se a letra que o usuario escolheu faz parte do segredo e desabilita teclas ja clicadas
function verificaLetraEscolhida(letra){
    document.getElementById("tecla_" + letra).disabled = true
    if(tentativas > 0){
        mudarStyleLetra("tecla_" + letra)
        comparaListas(letra);
        palavraNaTela();
    }
}


//mudar o style de botões ja clicados
function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#537cd0"
    document.getElementById(tecla).style.color = "#fffafa"
}


//compara a letra que selecionei com a da palavra secreta, limita os erros e mostra se  vencu
function comparaListas(letra){
    var posicao = palavraSorteada.indexOf(letra)
    if(posicao < 0){
        tentativas--
        caregaImagemForca();

    if(tentativas == 0){
        voceErrou();
    }

    }else{
        for(i = 0; i < palavraSorteada.length; i++){
            if(palavraSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    var vitoria = true
    for(i = 0; i < palavraSorteada.length; i++){
        if(palavraSorteada[i] != listaDinamica[i]){
            vitoria = false
        }
    }

    if(vitoria == true){
        voceGanhou();
        tentativas = 0 
    }
}


//muda a imagem quando erro de acordo com as chances restantes
function caregaImagemForca(){
    switch(tentativas){
        case 5: 
                document.getElementById('imagem').style.background = "url('./imagens/forca2.png')"
                break;

        case 4: 
                document.getElementById('imagem').style.background = "url('./imagens/forca3.png')"
                break;

        case 3: 
                document.getElementById('imagem').style.background = "url('./imagens/forca4.png')"
                break;

        case 2: 
                document.getElementById('imagem').style.background = "url('./imagens/forca5.png')"
                break;

        case 1: 
                document.getElementById('imagem').style.background = "url('./imagens/forca6.png')"
                break;

        case 0: 
                document.getElementById('imagem').style.background = "url('./imagens/forca7.png')"
                break;
        
        default: 
                document.getElementById('imagem').style.background = "url('./imagens/forca1.png')"
                break;

    }
}


//Função vitoria atribuido a Função comparaLista() - if(vitoria == true)
function voceGanhou(){
    window.alert('Parabéns, você ganhouuu!! a palavra secreta era ' + palavraSorteada)
}

//Função derrota atribuido a Função comparaLista() - if(tetnativa == 0)
function voceErrou(){
    window.alert('Você perdeu, a palavra secreta era ' +  palavraSorteada)
}


//Reiniciar o jogo com o botão
var reiniciar = document.getElementById('tecla_reload')
reiniciar.addEventListener('click', function(){
    location.reload();
});