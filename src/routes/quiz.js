var express = require("express");
var router = express.Router();

/*indicação do controller*/
var quizController = require("../controllers/quizController");

/* get = indicador do que a função irá fazer (select) */
router.get("/buscarResultadoJogador/:idJogador", function (req, res) {
    quizController.buscarResultadoJogador(req, res);
});

module.exports = router;

