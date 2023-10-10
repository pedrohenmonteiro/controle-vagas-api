package com.mont.controlevagas.api.dto.input;

import java.util.List;

import com.mont.controlevagas.api.dto.CandidaturaDto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlataformaInputDto {
    
    private String nome;
    private List<CandidaturaDto> candidaturas;
}
