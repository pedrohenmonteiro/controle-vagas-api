package com.mont.controlevagas.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mont.controlevagas.api.dto.PermissaoDto;
import com.mont.controlevagas.domain.service.UsuarioPermissaoService;

@RestController
@RequestMapping("/usuarios/{usuarioId}/permissoes")
public class UsuarioPermissaoController {

    @Autowired
    private UsuarioPermissaoService usuarioPermissaoService;

    @GetMapping
    public ResponseEntity<List<PermissaoDto>> findAll(@PathVariable Long usuarioId) {
        return ResponseEntity.ok().body(usuarioPermissaoService.findAll(usuarioId));
    }

    @PutMapping("/{permissaoId}")
    public ResponseEntity<Void> associarPermissao(@PathVariable Long usuarioId, @PathVariable Long permissaoId) {
        usuarioPermissaoService.associarPermissao(usuarioId, permissaoId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{permissaoId}")
    public ResponseEntity<Void> desassociarPermissao(@PathVariable Long usuarioId, @PathVariable Long permissaoId) {
        usuarioPermissaoService.desassociarPermissao(usuarioId, permissaoId);
        return ResponseEntity.noContent().build();
    }
    
}
