package com.mont.controlevagas.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mont.controlevagas.domain.model.Candidatura;
import com.mont.controlevagas.domain.model.CandidaturaStatus;

public interface CandidaturaRepository extends JpaRepository<Candidatura, Long> {
 
    @Query("from Candidatura c join fetch c.tecnologia join fetch c.plataforma")
    List<Candidatura> findAll();

    @Query("from Candidatura c join fetch c.tecnologia join fetch c.plataforma where c.status = :status" )
    List<Candidatura> findByStatus(CandidaturaStatus status);

}
