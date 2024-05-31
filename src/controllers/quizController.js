var quizModel = require("../models/quizModel");

function buscarResultadoJogador(req, res) {

    var idJogador = req.params.idJogador;

    console.log(`controller buscando os resultados do jogador`);

    quizModel.buscarResultadoJogador(idJogador).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado); /*resposta que o bd traz*/
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos resultados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function inserirResultadoQuiz(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var pontos = req.body.pontosServer;
    var idUsuario = req.body.idJogador;

    quizModel.finalizar(acertos, erros, pontos, idUsuario)
    //requisição funcionou
    .then(
        function (resultado) {
            res.json(resultado);
        }
    //requisição não funcionou
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar a inserção!",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    buscarResultadoJogador,
    inserirResultadoQuiz
}