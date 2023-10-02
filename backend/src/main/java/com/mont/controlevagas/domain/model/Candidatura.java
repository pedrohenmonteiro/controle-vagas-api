package com.mont.controlevagas.domain.model;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
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
    
    @ManyToOne
    @JoinColumn(name = "plataforma_id", nullable = false)
    private Plataforma plataforma;
}
