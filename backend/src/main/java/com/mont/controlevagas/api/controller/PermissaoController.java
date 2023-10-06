package com.mont.controlevagas.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mont.controlevagas.api.dto.PermissaoDto;
import com.mont.controlevagas.api.dto.input.PermissaoInputDto;
import com.mont.controlevagas.domain.service.PermissaoService;

@RestController
@RequestMapping("/permissoes")
public class PermissaoController {
    @Autowired
    private PermissaoService permissaoService;

    @GetMapping
    public ResponseEntity<List<PermissaoDto>> findAll() {

        return ResponseEntity.status(HttpStatus.OK).body(permissaoService.findAll());
    }

    @GetMapping("/{permissaoId}")
    public ResponseEntity<PermissaoDto> findById(@PathVariable Long permissaoId) {
        return ResponseEntity.status(HttpStatus.OK).body(permissaoService.findById(permissaoId));
    }

    @PostMapping
    public ResponseEntity<PermissaoDto> create(@RequestBody PermissaoInputDto permissaoDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(permissaoService.create(permissaoDto));
    }

    @PutMapping("/{permissaoId}")
    public ResponseEntity<PermissaoDto> update(@PathVariable Long permissaoId, @RequestBody PermissaoInputDto permissaoDto) {
        return ResponseEntity.status(HttpStatus.OK).body(permissaoService.update(permissaoId, permissaoDto));
    }
}
