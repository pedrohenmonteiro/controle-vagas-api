package com.mont.controlevagas.api.dto.input;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TecnologiaInputDto {
    
    @NotBlank
    private String name;
}
