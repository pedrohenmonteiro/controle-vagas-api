package com.mont.controlevagas.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mont.controlevagas.domain.model.Candidatura;

public interface CandidaturaRepository extends JpaRepository<Candidatura, Long> {
    
}
