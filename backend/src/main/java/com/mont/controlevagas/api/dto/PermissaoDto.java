package com.mont.controlevagas.api.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PermissaoDto {
    private Long id;
    private String permissao;
    private String descricao;
}
