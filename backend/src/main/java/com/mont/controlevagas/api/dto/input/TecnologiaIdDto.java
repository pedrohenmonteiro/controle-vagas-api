package com.mont.controlevagas.api.dto.input;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TecnologiaIdDto {
    
    @NotNull
    private Long id;
}
