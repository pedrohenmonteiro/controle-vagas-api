package com.mont.controlevagas.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.mont.controlevagas.api.dto.CandidaturaDto;
import com.mont.controlevagas.api.dto.input.CandidaturaInputDto;
import com.mont.controlevagas.api.mapper.CandidaturaMapper;
import com.mont.controlevagas.domain.exceptions.ConflictException;
import com.mont.controlevagas.domain.exceptions.NotFoundException;
import com.mont.controlevagas.domain.model.Candidatura;
import com.mont.controlevagas.domain.repository.CandidaturaRepository;

@Service
public class CandidaturaService {
    
    @Autowired
    private CandidaturaRepository candidaturaRepository;

    @Autowired
    private CandidaturaMapper candidaturaMapper;

    public List<CandidaturaDto> findAll() {
        return candidaturaMapper.toCollectionDto(candidaturaRepository.findAll());
    }

    public CandidaturaDto findById(Long id) {
        return candidaturaMapper.toDto(findOrFail(id));
    }


    public CandidaturaDto create(CandidaturaInputDto candidaturaDto) {
        var candidatura = candidaturaMapper.toEntity(candidaturaDto);
        candidaturaRepository.save(candidatura);

        return candidaturaMapper.toDto(candidatura);
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
            throw new ConflictException(String.format("Recurso de id %d não pode ser excluído pois está em uso", id));
        }
    }

    protected Candidatura findOrFail(Long id) {
        return candidaturaRepository.findById(id).orElseThrow(() -> new NotFoundException(id));
    } 
}
