package com.mont.controlevagas.domain.service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.mont.controlevagas.api.dto.CandidaturaDto;
import com.mont.controlevagas.api.dto.input.CandidaturaInputDto;
import com.mont.controlevagas.api.mapper.CandidaturaMapper;
import com.mont.controlevagas.domain.exceptions.BadRequestException;
import com.mont.controlevagas.domain.exceptions.ConflictException;
import com.mont.controlevagas.domain.exceptions.NotFoundException;
import com.mont.controlevagas.domain.model.Candidatura;
import com.mont.controlevagas.domain.model.CandidaturaStatus;
import com.mont.controlevagas.domain.repository.CandidaturaRepository;
import com.mont.controlevagas.domain.repository.PlataformaRepository;
import com.mont.controlevagas.domain.repository.TecnologiaRepository;

@Service
public class CandidaturaService {
    
    @Autowired
    private CandidaturaRepository candidaturaRepository;

    @Autowired
    private CandidaturaMapper candidaturaMapper;

    @Autowired
    private PlataformaRepository plataformaRepository;

     @Autowired
    private TecnologiaRepository tecnologiaRepository;

    public List<CandidaturaDto> findAll() {
        return candidaturaMapper.toCollectionDto(candidaturaRepository.findAll());
    }

    public List<CandidaturaDto> findByStatus(CandidaturaStatus status) {
        return candidaturaMapper.toCollectionDto(candidaturaRepository.findByStatus(status));
    }

    public CandidaturaDto findById(Long id) {
        return candidaturaMapper.toDto(findOrFail(id));
    }


    public CandidaturaDto create(CandidaturaInputDto candidaturaDto) {
        try {
            var candidatura = candidaturaMapper.toEntity(candidaturaDto);
        setPlataforma(candidatura);
        setTecnologia(candidatura);

        var candidaturaStatus = candidaturaDto.getStatus();
        var valores = CandidaturaStatus.values();

        Arrays.asList(valores).contains(CandidaturaStatus.valueOf(candidaturaStatus));
        

        candidaturaRepository.save(candidatura);
        return candidaturaMapper.toDto(candidatura);
        } catch (IllegalArgumentException e) {
            String enums = Arrays.stream(CandidaturaStatus.values()).map(Enum::name).collect(Collectors.joining(", "));
            throw new BadRequestException("O valor do campo status está incorreto. Um dos seguintes valores deve ser fornecido: '" + enums + "'");
        }
    }

    public CandidaturaDto update(Long id, CandidaturaInputDto candidaturaDto) {
        var candidatura = findOrFail(id);
        candidaturaMapper.copyToDomainObject(candidaturaDto, candidatura);

        candidaturaRepository.save(candidatura);

        return candidaturaMapper.toDto(candidatura);
    
    }

    public void delete(Long id) {
        try {
            
            var candidatura = findOrFail(id);
            candidaturaRepository.delete(candidatura);
        } catch (DataIntegrityViolationException e) {
            throw new ConflictException(String.format("Recurso de id %d, não pode ser excluído pois está em uso", id));
        }
    }

    protected Candidatura findOrFail(Long id) {
        return candidaturaRepository.findById(id).orElseThrow(() -> new NotFoundException(id));
    } 

    private void setPlataforma(Candidatura candidatura) {
        var plataformaId = candidatura.getPlataforma().getId();
        var plataforma = plataformaRepository.findById(plataformaId).orElseThrow(() -> new BadRequestException("Recurso plataforma de id %^d, não foi encontrado"));
        candidatura.setPlataforma(plataforma);
    }

    private void setTecnologia(Candidatura candidatura) {
        var tecnologiaId = candidatura.getTecnologia().getId();
        var tecnologia = tecnologiaRepository.findById(tecnologiaId).orElseThrow(() -> new BadRequestException("Recurso tecnologia de id %^d, não foi encontrado"));
        candidatura.setTecnologia(tecnologia);
    }

    
}
