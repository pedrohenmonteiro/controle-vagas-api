package com.mont.controlevagas.api.dto.input;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CandidaturaInputDto {
    
    private String empresa;
    private String descricao;
    private String status;
    private BigDecimal salario;
    private PlataformaIdDto plataforma;
}
