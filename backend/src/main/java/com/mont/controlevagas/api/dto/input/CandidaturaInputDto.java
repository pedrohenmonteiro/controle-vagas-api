package com.mont.controlevagas.api.dto.input;

import java.math.BigDecimal;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CandidaturaInputDto {
    
    @NotBlank
    private String empresa;
    
    private String descricao;

    @NotNull
    private String status;

    @NotNull
    private BigDecimal salario;

    @Valid
    @NotNull
    private PlataformaIdDto plataforma;

    @Valid
    @NotNull
    private TecnologiaIdDto tecnologia;
}
