package com.mont.controlevagas.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mont.controlevagas.domain.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    
}
