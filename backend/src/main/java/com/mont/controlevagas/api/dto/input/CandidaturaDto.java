package com.mont.controlevagas.api.dto.input;

import java.math.BigDecimal;

import com.mont.controlevagas.api.dto.PlataformaDto;
import com.mont.controlevagas.domain.model.CandidaturaStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CandidaturaDto {
    
    private String empresa;
    private String descricao;
    private CandidaturaStatus status;
    private BigDecimal salario;
    private PlataformaDto plataforma;
}
