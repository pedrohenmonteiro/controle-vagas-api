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
(1, 'usuario1@example.com', 'Usuário 1', '$2a$12$4YW7o.aWZpelu/mM6UblC.WrL5d28Yot.wPWgaWxMka.12lYMmTWi'),
(2, 'usuario2@example.com', 'Usuário 2', '$2a$12$4YW7o.aWZpelu/mM6UblC.WrL5d28Yot.wPWgaWxMka.12lYMmTWi'),
(3, 'usuario3@example.com', 'Usuário 3', '$2a$12$4YW7o.aWZpelu/mM6UblC.WrL5d28Yot.wPWgaWxMka.12lYMmTWi');


INSERT INTO candidatura (id, salario, status, plataforma_id, tecnologia_id, usuario_id, descricao, empresa, criado_em) VALUES
(1, 5000.00, 'REPROVADO', 1, 1, 1,'Vaga de desenvolvimento back-end', 'X-Brain', UTC_TIMESTAMP),
(2, 6000.00, 'EM_ANALISE', 2, 2, 1,'Vaga de desenvolvimento full-stack', 'Microsoft', UTC_TIMESTAMP),
(3, 4500.00, 'EM_ANALISE', 3, 3, 3, 'Vaga de desenvolvimento de jogos', 'Mad Mimic', UTC_TIMESTAMP),
(4, 5200.00, 'APROVADO', 2, 1, 3, 'Vaga de desenvolvedor front-end', 'Facebook', UTC_TIMESTAMP),
(5, 4800.00, 'REPROVADO', 3, 3, 2, 'Vaga de engenheiro de software', 'Amazon', UTC_TIMESTAMP),
(6, 6000.00, 'EM_ANALISE', 1, 1, 2, 'Vaga de cientista de dados', 'IBM', UTC_TIMESTAMP),
(7, 4700.00, 'APROVADO', 3, 2, 2,'Vaga de engenheiro de qualidade', 'Netflix', UTC_TIMESTAMP),
(8, 4300.00, 'EM_ANALISE', 2, 3,2, 'Vaga de analista de segurança', 'Apple', UTC_TIMESTAMP);


INSERT INTO usuario_permissao (permissao_id, usuario_id) VALUES
(1, 1),
(1, 2);
