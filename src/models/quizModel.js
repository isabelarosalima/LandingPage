const { inserirResultadoQuiz } = require("../controllers/quizController");
var database = require("../database/config");

function buscarResultadoJogador(id) {
    var instrucaoSql = `select pontos, erros, acertos, tempo 
                    from quiz 
                    WHERE  fkUsuario = ${id}
                    ORDER BY idQuiz DESC limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function finalizar(pontos, erros, acertos, idUsuario) {
    var instrucaoSql = `insert into quiz values
    (null, ${acertos}, ${erros}, ${pontos}, null, ${idUsuario})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

/* exportar essa função para que outros arquivos reconhecam */
module.exports = {
    buscarResultadoJogador,
    finalizar
}
