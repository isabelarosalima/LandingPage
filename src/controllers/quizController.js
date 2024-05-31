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

module.exports = {
    buscarResultadoJogador
}