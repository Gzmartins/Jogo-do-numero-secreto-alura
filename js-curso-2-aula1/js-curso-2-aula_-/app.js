let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibicao(tag, texto) {
let titulos = document.querySelector (tag);
titulos.innerHTML = texto;   
}
function exibirMensagemInicial() {
    exibicao('h1', 'Jogo do numero secreto');
    exibicao('p','Escolha um numero de 1 a 10');
}
exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector ('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    if (chute == numeroSecreto) {
        exibicao('h1','Acertou!');
        exibicao('p',`Voce descobriu o numero secreto em ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute ('disabled');
    }
    else if (chute > numeroSecreto) {
        exibicao('p','O numero secreto e menor');
    }
    else {
        exibicao ('p','O numero secreto e maior');
     tentativas++;
     limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function numeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidaDeElementosNaLista = listaDeNumeroSorteados.length;

   if (quantidaDeElementosNaLista == numeroLimite) {
      listaDeNumeroSorteados = [];
}

   if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
    return numeroAleatorio();
   }
   else {
    listaDeNumeroSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
  
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
