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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mont.controlevagas.api.dto.CandidaturaDto;
import com.mont.controlevagas.api.dto.input.CandidaturaInputDto;
import com.mont.controlevagas.domain.model.CandidaturaStatus;
import com.mont.controlevagas.domain.service.CandidaturaService;

import jakarta.validation.Valid;


@RestController
@RequestMapping(path = "/candidaturas")
public class CandidaturaController {
    
     @Autowired
    private CandidaturaService candidaturaService;

    @GetMapping
    public ResponseEntity<List<CandidaturaDto>> findAll() {

        return ResponseEntity.status(HttpStatus.OK).body(candidaturaService.findAll());
    }

    @GetMapping("/by-status")
    public ResponseEntity<List<CandidaturaDto>> findByStatus(@RequestParam CandidaturaStatus status) {

        return ResponseEntity.status(HttpStatus.OK).body(candidaturaService.findByStatus(status));
    }

    @GetMapping("/{candidaturaId}")
    public ResponseEntity<CandidaturaDto> findById(@PathVariable Long candidaturaId) {
        return ResponseEntity.status(HttpStatus.OK).body(candidaturaService.findById(candidaturaId));
    }

    @PostMapping
    public ResponseEntity<CandidaturaDto> create(@Valid @RequestBody CandidaturaInputDto candidaturaDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(candidaturaService.create(candidaturaDto));
    }

    @PutMapping("/{candidaturaId}")
    public ResponseEntity<CandidaturaDto> update(@PathVariable Long candidaturaId, @RequestBody CandidaturaInputDto candidaturaDto) {
        return ResponseEntity.status(HttpStatus.OK).body(candidaturaService.update(candidaturaId, candidaturaDto));
    }

    @DeleteMapping("/{candidaturaId}")
    public ResponseEntity<Void> delete(@PathVariable Long candidaturaId) {
        candidaturaService.delete(candidaturaId);
        return ResponseEntity.noContent().build();
    }
}
