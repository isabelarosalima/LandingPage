create database cyberpunk;
use cyberpunk;
-- drop database cyberpunk;

CREATE TABLE usuario (
	id INT AUTO_INCREMENT,
    nome varchar(45),
    userName varchar(45),
    email varchar(45),
    senha varchar(45),
     PRIMARY KEY (id)
);

CREATE TABLE quiz (
	idQuiz INT AUTO_INCREMENT,
    pontos INT,
    erros INT,
    acertos INT,
    tempo INT,
    primary key (idQuiz, fkUsuario),
    fkUsuario INT,
    constraint fkquiz foreign key quiz(fkUsuario) references usuario(id)
);

CREATE TABLE feedback (
	idFeedback INT AUTO_INCREMENT,
    username VARCHAR(45),
    email VARCHAR(45),
    texto text,
    fkUsuarioFeed INT,
    PRIMARY KEY (idFeedback, fkUsuarioFeed),
    constraint fkFeedback foreign key feedback(fkUsuarioFeed) references usuario(id)
);

select * from usuario;
select * from quiz;
select * from feedback;

-- Selecionar os pontos, erros, acertos e tempo do último quiz de um usuário específico:
select pontos, erros, acertos, tempo from quiz 
WHERE fkUsuario = 1 
ORDER BY idQuiz 
DESC limit 1;

SELECT * FROM feedback 
WHERE fkUsuarioFeed = 1;

SELECT * FROM quiz 
WHERE fkUsuario = 1;

-- Selecionar o tempo total gasto por cada usuário em seus quizzes:
SELECT fkUsuario, SUM(tempo) as tempo_total 
FROM quiz 
GROUP BY fkUsuario;

--Selecionar o total de erros cometidos por cada usuário em seus quizzes:
SELECT fkUsuario, SUM(erros) as total_erros 
FROM quiz 
GROUP BY fkUsuario;

-- Selecionar o nome e o email de todos os usuários que têm feedbacks registrados:
SELECT u.nome, u.email 
FROM usuario as u 
JOIN feedback as f 
ON u.id = f.fkUsuarioFeed;

-- Contar quantos quizzes cada usuário fez:
SELECT fkUsuario, COUNT(*) as total_quizzes 
FROM quiz 
GROUP BY fkUsuario;