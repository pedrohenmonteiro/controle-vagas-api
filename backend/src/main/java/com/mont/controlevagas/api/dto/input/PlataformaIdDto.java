package com.mont.controlevagas.api.dto.input;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlataformaIdDto {
    
    @NotNull
    private Long id;
}
