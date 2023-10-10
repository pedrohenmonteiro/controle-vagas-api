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

import com.mont.controlevagas.api.dto.PlataformaDto;
import com.mont.controlevagas.api.dto.input.PlataformaInputDto;
import com.mont.controlevagas.domain.service.PlataformaService;

@RestController
@RequestMapping("/plataformas")
public class PlataformaController {
    @Autowired
    private PlataformaService plataformaService;

    @GetMapping
    public ResponseEntity<List<PlataformaDto>> findAll() {

        return ResponseEntity.status(HttpStatus.OK).body(plataformaService.findAll());
    }

    @GetMapping("/{plataformaId}")
    public ResponseEntity<PlataformaDto> findById(@PathVariable Long plataformaId) {
        return ResponseEntity.status(HttpStatus.OK).body(plataformaService.findById(plataformaId));
    }

    @PostMapping
    public ResponseEntity<PlataformaDto> create(@RequestBody PlataformaInputDto plataformaDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(plataformaService.create(plataformaDto));
    }

    @PutMapping("/{plataformaId}")
    public ResponseEntity<PlataformaDto> update(@PathVariable Long plataformaId, @RequestBody PlataformaInputDto plataformaDto) {
        return ResponseEntity.status(HttpStatus.OK).body(plataformaService.update(plataformaId, plataformaDto));
    }

    @DeleteMapping("/{plataformaId}")
    public ResponseEntity<Void> delete(@PathVariable Long plataformaId) {
        plataformaService.delete(plataformaId);
        return ResponseEntity.noContent().build();
    }
}
