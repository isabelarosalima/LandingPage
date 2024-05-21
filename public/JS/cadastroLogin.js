// Seleção dos elementos do DOM para facilitar o acesso e a manipulação desses elementos
const login = document.getElementById('login')
const nomeCompleto = document.getElementById('input_nomeCompleto')
const userName = document.getElementById('input_userName')
const emailCelular = document.getElementById('input_emailCelular')
const senha = document.getElementById('input_senha')

const nomeDiv = document.getElementById('mensagemErroNome')


let validNome = false
let validUser = false;
let validEmailCelular = false;
let validSenha = false;

nomeCompleto.addEventListener('keyup', () => {
    if(nomeCompleto.value.length <= 2){
        nomeDiv.innerHTML = 'Insira no mínimo 3 caracteres'
        validNome = false
    }else{
        nomeDiv.setAttribute('style', 'display: none')
        validNome = true
    }
})

/*
function cadastrar() {
 // Armazenando os valores dos campos em variáveis
    const nomeCompletoValue = nomeCompleto.value.trim();
    const userNameValue= userName.value.trim();
    const emailCelularValue = emailCelular.value.trim();
    const senhaValue = senha.value.trim();

    // eu adicionei o trim() para remover os espaços em branco no inicio ou no fim de um texto

    if(nomeCompletoValue == '' ||
    userNameValue == '' || 
    emailCelularValue == '' || 
    senhaValue == '' )
    { 
        alert(`Preencha todos os campos`) 
        return false

    }




}

// aguardar();

// //Recupere o valor da nova input pelo nome do id
// // Agora vá para o método fetch logo abaixo
// var nomeVar = nome_input.value;
// var emailVar = email_input.value;
// var senhaVar = senha_input.value;
// var confirmacaoSenhaVar = confirmacao_senha_input.value;
// var empresaVar = listaEmpresas.value
// if (
//   nomeVar == "" ||
//   emailVar == "" ||
//   senhaVar == "" ||
//   confirmacaoSenhaVar == "" ||
//   empresaVar == ""
// ) {
//   cardErro.style.display = "block";
//   mensagem_erro.innerHTML =
//     "(Mensagem de erro para todos os campos em branco)";

//   finalizarAguardar();
//   return false;
// } else {
//   setInterval(sumirMensagem, 5000);
// }

// // Enviando o valor da nova input
// fetch("/usuarios/cadastrar", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     // crie um atributo que recebe o valor recuperado aqui
//     // Agora vá para o arquivo routes/usuario.js
//     nomeServer: nomeVar,
//     emailServer: emailVar,
//     senhaServer: senhaVar,
//     empresaServer: empresaVar
//   }),
// })
//   .then(function (resposta) {
//     console.log("resposta: ", resposta);

//     if (resposta.ok) {
//       cardErro.style.display = "block";

//       mensagem_erro.innerHTML =
//         "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

//       setTimeout(() => {
//         window.location = "login.html";
//       }, "2000");

//       limparFormulario();
//       finalizarAguardar();
//     } else {
//       throw "Houve um erro ao tentar realizar o cadastro!";
//     }
//   })
//   .catch(function (resposta) {
//     console.log(`#ERRO: ${resposta}`);
//     finalizarAguardar();
//   });

// return false;
// }

// function listar() {
// fetch("/empresas/listar", {
//   method: "GET",
// })
//   .then(function (resposta) {
//     resposta.json().then((empresas) => {
//       empresas.forEach((empresa) => {
//         listaEmpresas.innerHTML += `<option value='${empresa.id}'>${empresa.cnpj}</option>`;
//       });
//     });
//   })
//   .catch(function (resposta) {
//     console.log(`#ERRO: ${resposta}`);
//   });
// }

// function sumirMensagem() {
// cardErro.style.display = "none";
*/
// }