package com.mont.controlevagas.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mont.controlevagas.api.dto.UsuarioDto;
import com.mont.controlevagas.api.mapper.UsuarioMapper;
import com.mont.controlevagas.domain.model.Usuario;
import com.mont.controlevagas.domain.repository.UsuarioRepository;

@Service
public class UsuarioService {
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioMapper usuarioMapper;


    public UsuarioDto create(UsuarioDto usuarioDto) {
        var usuario = usuarioMapper.toEntity(usuarioDto);
        usuarioRepository.save(usuario);

        return usuarioMapper.toDto(usuario);
    }

}
