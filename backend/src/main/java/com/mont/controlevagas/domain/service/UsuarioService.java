package com.mont.controlevagas.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mont.controlevagas.api.dto.UsuarioDto;
import com.mont.controlevagas.api.dto.input.UsuarioInputDto;
import com.mont.controlevagas.api.mapper.UsuarioMapper;
import com.mont.controlevagas.domain.model.Usuario;
import com.mont.controlevagas.domain.repository.UsuarioRepository;

@Service
public class UsuarioService {
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioMapper usuarioMapper;

    public List<UsuarioDto> findAll() {
        return usuarioMapper.toCollectionDto(usuarioRepository.findAll());
    }

    public UsuarioDto findById(Long id) {
        return usuarioMapper.toDto(findOrFail(id));
    }


    public UsuarioDto create(UsuarioInputDto usuarioDto) {
        var usuario = usuarioMapper.toEntity(usuarioDto);
        usuarioRepository.save(usuario);

        return usuarioMapper.toDto(usuario);
    }

    private Usuario findOrFail(Long id) {
        return usuarioRepository.findById(id).orElseThrow();
    } 

}
