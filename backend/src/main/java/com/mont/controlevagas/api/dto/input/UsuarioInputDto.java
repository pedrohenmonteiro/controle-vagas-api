package com.mont.controlevagas.api.dto.input;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UsuarioInputDto {
    
    private String nome;
    private String email;
    private String senha;
}
