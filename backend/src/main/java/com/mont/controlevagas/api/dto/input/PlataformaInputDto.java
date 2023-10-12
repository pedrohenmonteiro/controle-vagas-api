package com.mont.controlevagas.api.dto.input;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlataformaInputDto {
    
    @NotBlank
    private String nome;
}
