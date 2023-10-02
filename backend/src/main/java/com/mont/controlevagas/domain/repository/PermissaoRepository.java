package com.mont.controlevagas.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mont.controlevagas.domain.model.Permissao;

public interface PermissaoRepository extends JpaRepository<Permissao, Long> {
    
}
