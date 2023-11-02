alter table candidatura add usuario_id bigint not null;

alter table candidatura add constraint FK_candidatura_usuario_id foreign key (usuario_id) references usuario (id);