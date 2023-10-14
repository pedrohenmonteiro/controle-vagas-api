package com.mont.controlevagas.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.mont.controlevagas.api.dto.TecnologiaDto;
import com.mont.controlevagas.api.dto.input.TecnologiaInputDto;
import com.mont.controlevagas.api.mapper.TecnologiaMapper;
import com.mont.controlevagas.domain.exceptions.ConflictException;
import com.mont.controlevagas.domain.exceptions.NotFoundException;
import com.mont.controlevagas.domain.model.Tecnologia;
import com.mont.controlevagas.domain.repository.TecnologiaRepository;

@Service
public class TecnologiaService {
 
    @Autowired
    private TecnologiaRepository tecnologiaRepository;

    @Autowired
    private TecnologiaMapper tecnologiaMapper;

    public List<TecnologiaDto> findAll() {
        return tecnologiaMapper.toCollectionDto(tecnologiaRepository.findAll());
    }

    public TecnologiaDto findById(Long id) {
        return tecnologiaMapper.toDto(findOrFail(id));
    }


    public TecnologiaDto create(TecnologiaInputDto tecnologiaDto) {
        var tecnologia = tecnologiaMapper.toEntity(tecnologiaDto);
        tecnologiaRepository.save(tecnologia);

        return tecnologiaMapper.toDto(tecnologia);
    }

    public TecnologiaDto update(Long id, TecnologiaInputDto tecnologiaDto) {
        var tecnologia = findOrFail(id);
        tecnologiaMapper.copyToDomainObject(tecnologiaDto, tecnologia);

        tecnologiaRepository.save(tecnologia);

        return tecnologiaMapper.toDto(tecnologia);
    
    }

    public void delete(Long id) {
        try {
            
            var tecnologia = findOrFail(id);
            tecnologiaRepository.delete(tecnologia);
        } catch (DataIntegrityViolationException e) {
            throw new ConflictException(String.format("Recurso de id %d não pode ser excluído pois está em uso", id));
        }
    }

    protected Tecnologia findOrFail(Long id) {
        return tecnologiaRepository.findById(id).orElseThrow(() -> new NotFoundException(id));
    } 
}
