package com.mont.controlevagas.domain.model;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity(name = "candidatura")
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Candidatura {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long id;

    private String empresa;

    private String descricao;

    private CandidaturaStatus status;

    private BigDecimal salario;

    private String plataformaVagas;
}
