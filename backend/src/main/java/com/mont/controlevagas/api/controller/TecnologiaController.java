package com.mont.controlevagas.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mont.controlevagas.api.dto.TecnologiaDto;
import com.mont.controlevagas.api.dto.input.TecnologiaInputDto;
import com.mont.controlevagas.domain.service.TecnologiaService;

@RestController
@RequestMapping("/tecnologias")
public class TecnologiaController {
    @Autowired
    private TecnologiaService tecnologiaService;

    @GetMapping
    public ResponseEntity<List<TecnologiaDto>> findAll() {

        return ResponseEntity.status(HttpStatus.OK).body(tecnologiaService.findAll());
    }

    @GetMapping("/{tecnologiaId}")
    public ResponseEntity<TecnologiaDto> findById(@PathVariable Long tecnologiaId) {
        return ResponseEntity.status(HttpStatus.OK).body(tecnologiaService.findById(tecnologiaId));
    }

    @PostMapping
    public ResponseEntity<TecnologiaDto> create(@RequestBody TecnologiaInputDto tecnologiaDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(tecnologiaService.create(tecnologiaDto));
    }

    @PutMapping("/{tecnologiaId}")
    public ResponseEntity<TecnologiaDto> update(@PathVariable Long tecnologiaId, @RequestBody TecnologiaInputDto tecnologiaDto) {
        return ResponseEntity.status(HttpStatus.OK).body(tecnologiaService.update(tecnologiaId, tecnologiaDto));
    }

    @DeleteMapping("/{tecnologiaId}")
    public ResponseEntity<Void> delete(@PathVariable Long tecnologiaId) {
        tecnologiaService.delete(tecnologiaId);
        return ResponseEntity.noContent().build();
    }
}
