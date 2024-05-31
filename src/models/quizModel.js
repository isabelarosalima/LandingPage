var database = require("../database/config");

function buscarResultadoJogador(id) {
    var instrucaoSql = `select pontos, erros, acertos, tempo, perguntasNãoRespondidas 
                    from quiz 
                    WHERE  fkUsuario = ${id}
                    ORDER BY idQuiz DESC limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

/* exportar essa função para que outros arquivos reconhecam */
module.exports = {
    buscarResultadoJogador
}
