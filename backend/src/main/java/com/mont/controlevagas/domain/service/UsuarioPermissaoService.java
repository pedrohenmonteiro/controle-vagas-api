package com.mont.controlevagas.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mont.controlevagas.api.dto.PermissaoDto;
import com.mont.controlevagas.api.mapper.PermissaoMapper;

@Service
public class UsuarioPermissaoService {


    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private PermissaoMapper permissaoMapper;


    public List<PermissaoDto> findAll(Long usuarioId) {
        var usuario = usuarioService.findOrFail(usuarioId);
        return permissaoMapper.toCollectionDto(usuario.getPermissoes());
    }
}
