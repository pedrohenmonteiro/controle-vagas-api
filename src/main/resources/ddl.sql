create table candidatura (salario decimal(38,2), criado_em datetime(6), id bigint not null auto_increment, plataforma_id bigint not null, tecnologia_id bigint not null, descricao varchar(255), empresa varchar(255), status enum ('APROVADO','EM_ANALISE','REPROVADO'), primary key (id)) engine=InnoDB;
create table permissao (id bigint not null auto_increment, descricao varchar(255), nome varchar(255), primary key (id)) engine=InnoDB;
create table plataforma (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table tecnologia (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table usuario (id bigint not null auto_increment, email varchar(255), nome varchar(255), senha varchar(255), primary key (id)) engine=InnoDB;
create table usuario_permissao (permissao_id bigint not null, usuario_id bigint not null, primary key (permissao_id, usuario_id)) engine=InnoDB;
alter table candidatura add constraint FKj3ymhgcdpklk8xv6pay07mdhu foreign key (plataforma_id) references plataforma (id);
alter table candidatura add constraint FKcr5cgjyamukea8sy6fy5lbmho foreign key (tecnologia_id) references tecnologia (id);
alter table usuario_permissao add constraint FKtcuagcmypmug2ddh2d5uol8s5 foreign key (permissao_id) references permissao (id);
alter table usuario_permissao add constraint FK5wc2vh351r26qbqt1tc52sh4m foreign key (usuario_id) references usuario (id);
create table candidatura (salario decimal(38,2), criado_em datetime(6), id bigint not null auto_increment, plataforma_id bigint not null, tecnologia_id bigint not null, descricao varchar(255), empresa varchar(255), status enum ('APROVADO','EM_ANALISE','REPROVADO'), primary key (id)) engine=InnoDB;
create table permissao (id bigint not null auto_increment, descricao varchar(255), nome varchar(255), primary key (id)) engine=InnoDB;
create table plataforma (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table tecnologia (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table usuario (id bigint not null auto_increment, email varchar(255), nome varchar(255), senha varchar(255), primary key (id)) engine=InnoDB;
create table usuario_permissao (permissao_id bigint not null, usuario_id bigint not null, primary key (permissao_id, usuario_id)) engine=InnoDB;
alter table candidatura add constraint FKj3ymhgcdpklk8xv6pay07mdhu foreign key (plataforma_id) references plataforma (id);
alter table candidatura add constraint FKcr5cgjyamukea8sy6fy5lbmho foreign key (tecnologia_id) references tecnologia (id);
alter table usuario_permissao add constraint FKtcuagcmypmug2ddh2d5uol8s5 foreign key (permissao_id) references permissao (id);
alter table usuario_permissao add constraint FK5wc2vh351r26qbqt1tc52sh4m foreign key (usuario_id) references usuario (id);
create table candidatura (salario decimal(38,2), criado_em datetime(6), id bigint not null auto_increment, plataforma_id bigint not null, tecnologia_id bigint not null, descricao varchar(255), empresa varchar(255), status enum ('APROVADO','EM_ANALISE','REPROVADO'), primary key (id)) engine=InnoDB;
create table permissao (id bigint not null auto_increment, descricao varchar(255), nome varchar(255), primary key (id)) engine=InnoDB;
create table plataforma (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table tecnologia (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table usuario (id bigint not null auto_increment, email varchar(255), nome varchar(255), senha varchar(255), primary key (id)) engine=InnoDB;
create table usuario_permissao (permissao_id bigint not null, usuario_id bigint not null, primary key (permissao_id, usuario_id)) engine=InnoDB;
alter table candidatura add constraint FKj3ymhgcdpklk8xv6pay07mdhu foreign key (plataforma_id) references plataforma (id);
alter table candidatura add constraint FKcr5cgjyamukea8sy6fy5lbmho foreign key (tecnologia_id) references tecnologia (id);
alter table usuario_permissao add constraint FKtcuagcmypmug2ddh2d5uol8s5 foreign key (permissao_id) references permissao (id);
alter table usuario_permissao add constraint FK5wc2vh351r26qbqt1tc52sh4m foreign key (usuario_id) references usuario (id);
create table candidatura (salario decimal(38,2), criado_em datetime(6), id bigint not null auto_increment, plataforma_id bigint not null, tecnologia_id bigint not null, descricao varchar(255), empresa varchar(255), status enum ('APROVADO','EM_ANALISE','REPROVADO'), primary key (id)) engine=InnoDB;
create table permissao (id bigint not null auto_increment, descricao varchar(255), nome varchar(255), primary key (id)) engine=InnoDB;
create table plataforma (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table tecnologia (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table usuario (id bigint not null auto_increment, email varchar(255), nome varchar(255), senha varchar(255), primary key (id)) engine=InnoDB;
create table usuario_permissao (permissao_id bigint not null, usuario_id bigint not null, primary key (permissao_id, usuario_id)) engine=InnoDB;
alter table candidatura add constraint FKj3ymhgcdpklk8xv6pay07mdhu foreign key (plataforma_id) references plataforma (id);
alter table candidatura add constraint FKcr5cgjyamukea8sy6fy5lbmho foreign key (tecnologia_id) references tecnologia (id);
alter table usuario_permissao add constraint FKtcuagcmypmug2ddh2d5uol8s5 foreign key (permissao_id) references permissao (id);
alter table usuario_permissao add constraint FK5wc2vh351r26qbqt1tc52sh4m foreign key (usuario_id) references usuario (id);
create table candidatura (salario decimal(38,2), criado_em datetime(6), id bigint not null auto_increment, plataforma_id bigint not null, tecnologia_id bigint not null, descricao varchar(255), empresa varchar(255), status enum ('APROVADO','EM_ANALISE','REPROVADO'), primary key (id)) engine=InnoDB;
create table permissao (id bigint not null auto_increment, descricao varchar(255), nome varchar(255), primary key (id)) engine=InnoDB;
create table plataforma (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table tecnologia (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table usuario (id bigint not null auto_increment, email varchar(255), nome varchar(255), senha varchar(255), primary key (id)) engine=InnoDB;
create table usuario_permissao (permissao_id bigint not null, usuario_id bigint not null, primary key (permissao_id, usuario_id)) engine=InnoDB;
alter table candidatura add constraint FKj3ymhgcdpklk8xv6pay07mdhu foreign key (plataforma_id) references plataforma (id);
alter table candidatura add constraint FKcr5cgjyamukea8sy6fy5lbmho foreign key (tecnologia_id) references tecnologia (id);
alter table usuario_permissao add constraint FKtcuagcmypmug2ddh2d5uol8s5 foreign key (permissao_id) references permissao (id);
alter table usuario_permissao add constraint FK5wc2vh351r26qbqt1tc52sh4m foreign key (usuario_id) references usuario (id);
create table candidatura (salario decimal(38,2), criado_em datetime(6), id bigint not null auto_increment, plataforma_id bigint not null, tecnologia_id bigint not null, descricao varchar(255), empresa varchar(255), status enum ('APROVADO','EM_ANALISE','REPROVADO'), primary key (id)) engine=InnoDB;
create table permissao (id bigint not null auto_increment, descricao varchar(255), nome varchar(255), primary key (id)) engine=InnoDB;
create table plataforma (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table tecnologia (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table usuario (id bigint not null auto_increment, email varchar(255), nome varchar(255), senha varchar(255), primary key (id)) engine=InnoDB;
create table usuario_permissao (permissao_id bigint not null, usuario_id bigint not null, primary key (permissao_id, usuario_id)) engine=InnoDB;
alter table candidatura add constraint FKj3ymhgcdpklk8xv6pay07mdhu foreign key (plataforma_id) references plataforma (id);
alter table candidatura add constraint FKcr5cgjyamukea8sy6fy5lbmho foreign key (tecnologia_id) references tecnologia (id);
alter table usuario_permissao add constraint FKtcuagcmypmug2ddh2d5uol8s5 foreign key (permissao_id) references permissao (id);
alter table usuario_permissao add constraint FK5wc2vh351r26qbqt1tc52sh4m foreign key (usuario_id) references usuario (id);
create table candidatura (salario decimal(38,2), criado_em datetime(6), id bigint not null auto_increment, plataforma_id bigint not null, tecnologia_id bigint not null, descricao varchar(255), empresa varchar(255), status enum ('APROVADO','EM_ANALISE','REPROVADO'), primary key (id)) engine=InnoDB;
create table permissao (id bigint not null auto_increment, descricao varchar(255), nome varchar(255), primary key (id)) engine=InnoDB;
create table plataforma (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table tecnologia (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table usuario (id bigint not null auto_increment, email varchar(255), nome varchar(255), senha varchar(255), primary key (id)) engine=InnoDB;
create table usuario_permissao (permissao_id bigint not null, usuario_id bigint not null, primary key (permissao_id, usuario_id)) engine=InnoDB;
alter table candidatura add constraint FKj3ymhgcdpklk8xv6pay07mdhu foreign key (plataforma_id) references plataforma (id);
alter table candidatura add constraint FKcr5cgjyamukea8sy6fy5lbmho foreign key (tecnologia_id) references tecnologia (id);
alter table usuario_permissao add constraint FKtcuagcmypmug2ddh2d5uol8s5 foreign key (permissao_id) references permissao (id);
alter table usuario_permissao add constraint FK5wc2vh351r26qbqt1tc52sh4m foreign key (usuario_id) references usuario (id);
create table candidatura (salario decimal(38,2), criado_em datetime(6), id bigint not null auto_increment, plataforma_id bigint not null, tecnologia_id bigint not null, descricao varchar(255), empresa varchar(255), status enum ('APROVADO','EM_ANALISE','REPROVADO'), primary key (id)) engine=InnoDB;
create table permissao (id bigint not null auto_increment, descricao varchar(255), nome varchar(255), primary key (id)) engine=InnoDB;
create table plataforma (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table tecnologia (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table usuario (id bigint not null auto_increment, email varchar(255), nome varchar(255), senha varchar(255), primary key (id)) engine=InnoDB;
create table usuario_permissao (permissao_id bigint not null, usuario_id bigint not null, primary key (permissao_id, usuario_id)) engine=InnoDB;
alter table candidatura add constraint FKj3ymhgcdpklk8xv6pay07mdhu foreign key (plataforma_id) references plataforma (id);
alter table candidatura add constraint FKcr5cgjyamukea8sy6fy5lbmho foreign key (tecnologia_id) references tecnologia (id);
alter table usuario_permissao add constraint FKtcuagcmypmug2ddh2d5uol8s5 foreign key (permissao_id) references permissao (id);
alter table usuario_permissao add constraint FK5wc2vh351r26qbqt1tc52sh4m foreign key (usuario_id) references usuario (id);
create table candidatura (salario decimal(38,2), criado_em datetime(6), id bigint not null auto_increment, plataforma_id bigint not null, tecnologia_id bigint not null, descricao varchar(255), empresa varchar(255), status enum ('APROVADO','EM_ANALISE','REPROVADO'), primary key (id)) engine=InnoDB;
create table permissao (id bigint not null auto_increment, descricao varchar(255), nome varchar(255), primary key (id)) engine=InnoDB;
create table plataforma (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table tecnologia (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table usuario (id bigint not null auto_increment, email varchar(255), nome varchar(255), senha varchar(255), primary key (id)) engine=InnoDB;
create table usuario_permissao (permissao_id bigint not null, usuario_id bigint not null, primary key (permissao_id, usuario_id)) engine=InnoDB;
alter table candidatura add constraint FKj3ymhgcdpklk8xv6pay07mdhu foreign key (plataforma_id) references plataforma (id);
alter table candidatura add constraint FKcr5cgjyamukea8sy6fy5lbmho foreign key (tecnologia_id) references tecnologia (id);
alter table usuario_permissao add constraint FKtcuagcmypmug2ddh2d5uol8s5 foreign key (permissao_id) references permissao (id);
alter table usuario_permissao add constraint FK5wc2vh351r26qbqt1tc52sh4m foreign key (usuario_id) references usuario (id);
create table candidatura (salario decimal(38,2), criado_em datetime(6), id bigint not null auto_increment, plataforma_id bigint not null, tecnologia_id bigint not null, descricao varchar(255), empresa varchar(255), status enum ('APROVADO','EM_ANALISE','REPROVADO'), primary key (id)) engine=InnoDB;
create table permissao (id bigint not null auto_increment, descricao varchar(255), nome varchar(255), primary key (id)) engine=InnoDB;
create table plataforma (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table tecnologia (id bigint not null auto_increment, nome varchar(255), primary key (id)) engine=InnoDB;
create table usuario (id bigint not null auto_increment, email varchar(255), nome varchar(255), senha varchar(255), primary key (id)) engine=InnoDB;
create table usuario_permissao (permissao_id bigint not null, usuario_id bigint not null, primary key (permissao_id, usuario_id)) engine=InnoDB;
alter table candidatura add constraint FKj3ymhgcdpklk8xv6pay07mdhu foreign key (plataforma_id) references plataforma (id);
alter table candidatura add constraint FKcr5cgjyamukea8sy6fy5lbmho foreign key (tecnologia_id) references tecnologia (id);
alter table usuario_permissao add constraint FKtcuagcmypmug2ddh2d5uol8s5 foreign key (permissao_id) references permissao (id);
alter table usuario_permissao add constraint FK5wc2vh351r26qbqt1tc52sh4m foreign key (usuario_id) references usuario (id);
