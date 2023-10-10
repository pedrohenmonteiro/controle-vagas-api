package com.mont.controlevagas.api.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlataformaDto {
    
    private Long id;
    private String nome;
    private List<CandidaturaDto> candidaturas;
}
