package com.mont.controlevagas.domain.model;

import lombok.Getter;

@Getter
public enum CandidaturaStatus {
    APROVADO("Aprovado"),
    REPROVADO("Reprovado"),
    EM_ANALISE("Em análise");
    
    private final String status;


    CandidaturaStatus(String status) {
        this.status = status;
    }

}
