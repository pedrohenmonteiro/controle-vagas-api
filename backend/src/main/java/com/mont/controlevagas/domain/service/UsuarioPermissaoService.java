package com.mont.controlevagas.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mont.controlevagas.api.dto.PermissaoDto;
import com.mont.controlevagas.api.mapper.PermissaoMapper;
import com.mont.controlevagas.domain.model.Usuario;

import jakarta.transaction.Transactional;

@Service
public class UsuarioPermissaoService {


    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private PermissaoService permissaoService;

    @Autowired
    private PermissaoMapper permissaoMapper;


    public List<PermissaoDto> findAll(Long usuarioId) {
        var usuario = usuarioService.findOrFail(usuarioId);
        return permissaoMapper.toCollectionDto(usuario.getPermissoes());
    }

    @Transactional
    public void associarPermissao(Long usuarioId, Long permissaoId) {
        Usuario usuario = usuarioService.findOrFail(usuarioId);
        var permissao = permissaoService.findOrFail(permissaoId);

        usuario.adicionaPermissoes(permissao);
    }

    @Transactional
    public void desassociarPermissao(Long usuarioId, Long permissaoId) {
        Usuario usuario = usuarioService.findOrFail(usuarioId);
        var permissao = permissaoService.findOrFail(permissaoId);

        usuario.removePermissoes(permissao);
    }
}
