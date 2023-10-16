set foreign_key_checks = 0;

DELETE FROM usuario_permissao;

DELETE FROM candidatura;

DELETE FROM permissao;

DELETE FROM plataforma;

DELETE FROM tecnologia;

DELETE FROM usuario;

set foreign_key_checks = 1;


INSERT INTO plataforma (id, nome) VALUES
(1, 'LinkedIn'),
(2, 'Gupy'),
(3, 'Catho');

INSERT INTO tecnologia (id, nome) VALUES
(1, 'C#'),
(2, 'Java'),
(3, 'C++');

INSERT INTO permissao (id, descricao, nome) VALUES
(1, 'Permite acesso de leitura e gravaçao para todos os recursos', 'ADMIN');

INSERT INTO usuario (id, email, nome, senha) VALUES
(1, 'usuario1@example.com', 'Usuário 1', 'senha123'),
(2, 'usuario2@example.com', 'Usuário 2', 'senha456'),
(3, 'usuario3@example.com', 'Usuário 3', 'senha789');


INSERT INTO candidatura (id, salario, status, plataforma_id, tecnologia_id, descricao, empresa) VALUES
(1, 5000.00, 'REPROVADO', 1, 1, 'Vaga de desenvolvimento back-end', 'X-Brain'),
(2, 6000.00, 'EM_ANALISE', 2, 2, 'Vaga de desenvolvimento full-stack', 'Microsoft'),
(3, 4500.00, 'EM_ANALISE', 3, 3, 'Vaga de desenvolvimento de jogos', 'Mad Mimic');

INSERT INTO usuario_permissao (permissao_id, usuario_id) VALUES
(1, 1),
(1, 2);
