package com.mont.controlevagas.api.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mont.controlevagas.api.dto.UsuarioDto;
import com.mont.controlevagas.api.dto.input.UsuarioInputDto;
import com.mont.controlevagas.domain.service.UsuarioService;

@RestController
@RequestMapping(path = "/usuarios", produces = MediaType.APPLICATION_JSON_VALUE)
public class UsuarioController {
    
    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<List<UsuarioDto>> findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.findAll());
    }

    @GetMapping("/{usuarioId}")
    public ResponseEntity<UsuarioDto> findById(@PathVariable Long usuarioId) {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.findById(usuarioId));
    }

    @PostMapping
    public ResponseEntity<UsuarioDto> create(@RequestBody UsuarioInputDto usuarioDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.create(usuarioDto));
    }
}
