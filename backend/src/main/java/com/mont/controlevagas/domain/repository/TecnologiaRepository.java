package com.mont.controlevagas.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mont.controlevagas.domain.model.Tecnologia;

public interface TecnologiaRepository extends JpaRepository<Tecnologia, Long>{
    
}
