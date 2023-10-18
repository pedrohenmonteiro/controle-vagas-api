package com.mont.controlevagas.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mont.controlevagas.domain.model.Candidatura;
import com.mont.controlevagas.domain.model.CandidaturaStatus;

public interface CandidaturaRepository extends JpaRepository<Candidatura, Long> {
 
    List<Candidatura> findByStatus(CandidaturaStatus status);

}
