package com.mont.controlevagas.api.dto;

import java.math.BigDecimal;

import com.mont.controlevagas.domain.model.CandidaturaStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CandidaturaDto {
    
    private Long id;
    private String empresa;
    private String descricao;
    private CandidaturaStatus status;
    private BigDecimal salario;
    private PlataformaDto plataforma;
}
