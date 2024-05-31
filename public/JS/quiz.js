let totalQuestoes = document.querySelector('#totalQuestoes')
let pontos = 0 // pontos para o placar
let placar = 0 // placar
let acertos = 0

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoesQuiz')
// ol li com as alternativas
let alternativas = document.querySelector('#opcoeslista')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Como o gênero cyberpunk influenciou a moda contemporânea?",
    alternativaA : "Introduzindo roupas vitorianas e romantismo.",
    alternativaB : "Popularizando o uso de estampas florais e tecidos leves.",
    alternativaC : "Incorporando elementos futuristas, couro, PVC e neon.",
    alternativaD : "Trazendo de volta o estilo dos anos 60, com cores pastéis e silhuetas amplas.",
    correta      : "Incorporando elementos futuristas, couro, PVC e neon.",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Quais são alguns elementos visuais típicos da moda cyberpunk",
    alternativaA : "Saias rodadas e camisas de renda",
    alternativaB : "Jaquetas de couro, óculos espelhados e acessórios metálicos",
    alternativaC : "Ternos e gravatas tradicionais.",
    alternativaD : " Uniformes escolares e laços coloridos.",
    correta      : "Jaquetas de couro, óculos espelhados e acessórios metálicos",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Que estilistas ou marcas de moda incorporam influências cyberpunk em suas coleções?",
    alternativaA : "Ralph Lauren",
    alternativaB : "Heliot Emil",
    alternativaC : "Coco Chanel",
    alternativaD : "Vera Wang",
    correta      : "Heliot Emil",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "O que define o gênero literário cyberpunk?",
    alternativaA : "Histórias de fantasia com dragões e magia.",
    alternativaB : "Cenários futuristas e utópicos onde todos vivem em harmonia.",
    alternativaC : "Cenários distópicos, tecnologia avançada, alienação e o impacto do capitalismo",
    alternativaD : "Narrativas históricas baseadas em eventos reais.",
    correta      : "Cenários distópicos, tecnologia avançada, alienação e o impacto do capitalismo",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Quais são alguns livros icônicos do gênero ?",
    alternativaA : "Snow Crash - Neal Stephenson.",
    alternativaB : "O Grande Gatsby - F. Scott Fitzgerald.",
    alternativaC : "Moby Dick - Herman Melville",
    alternativaD : "As Crônicas de Nárnia - C. S. Lewis.",
    correta      : "Snow Crash - Neal Stephenson.",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Como o cyberpunk aborda questões sociais e políticas?",
    alternativaA : "Abordando a desigualdade e a ganho da liberdade e privacidade",
    alternativaB : "Celebrando a riqueza e a opulência da sociedade",
    alternativaC : "Abordando a desigualdade e o ganho do poder aquisitivo",
    alternativaD : "Abordando a desigualdade e a perda de privacidade.",
    correta      : "Abordando a desigualdade e a perda de privacidade.",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Quais são alguns filmes icônicos do gênero",
    alternativaA : "E o Vento Levou",
    alternativaB : "Titanic",
    alternativaC : "Blade Runner",
    alternativaD : "A Noviça Rebelde",
    correta      : "Blade Runner",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Como o cyberpunk influenciou a música?",
    alternativaA : "Inspirando gêneros como jazz e blues.",
    alternativaB : "Inspirando gêneros como synthwave, cyberwave, e industrial.",
    alternativaC : "Introduzindo novos estilos de canto gregoriano.",
    alternativaD : "Popularizando a música folk e country.",
    correta      : "Inspirando gêneros como synthwave, cyberwave, e industrial.",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Como os filmes cyberpunk influenciaram a cultura popular?",
    alternativaA : "introduzindo visões futuristas e a relação entre humanos e a tecnologia emergente.",
    alternativaB : "Enfatizando o uso de efeitos práticos em vez de CGI.",
    alternativaC : "Inspirando a moda com roupas tradicionais e acessórios de época.",
    alternativaD : "Introduzindo novas técnicas de filmagem em preto e branco.",
    correta      : "introduzindo visões futuristas e a relação entre humanos e a tecnologia emergente"
}

const q10= {
    numQuestao   : 10,
    pergunta     : "Quais são alguns artistas ou bandas associados ao som cyberpunk?",
    alternativaA : "Nine Inch Nails",
    alternativaB : "Bob Dylan",
    alternativaC : "Maneskin",
    alternativaD : "Metallica",
    correta      : "Nine Inch Nails",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

//manipular o texto dentro de elementos HTML 
numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
total.textContent = totalDeQuestoes


// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}


function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}


function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    // console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
         //console.log("acertou!")
        pontos += 10 // pontos = pontos + 10
        acertos ++
    } else {
        //console.log("Errou!")
    }
 
    // atualizar placar
    placar = pontos

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function finalizarQuiz(){
    const acertosValue = acertos;
    const errosValue= 10 - acertos;
    const pontosValue= pontos;

    console.log(acertosValue)
    fetch("/quiz/inserirResultadoQuiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          idJogador: sessionStorage.ID_USUARIO,
          acertosServer: acertosValue,
          errosServer: errosValue,
          pontosServer: pontosValue,

        }),
      })
      //caso funcionar minha req 
        .then(function (resposta) {
          console.log("resposta: ", resposta);
  
          if (resposta.ok) {
            console.log('dados inseridos')
          } else {
            throw "Houve um erro ao tentar realizar a captura de dados";
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
          // finalizarAguardar();
        });
  
        setTimeout(function () {
            window.location = "placarQuiz.html";
        }, 100);
}

/*
function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    // questoesQuiz.textContent = "Pontos " + placar
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}
 */