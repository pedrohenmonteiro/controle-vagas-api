package com.mont.controlevagas.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.mont.controlevagas.api.dto.PlataformaDto;
import com.mont.controlevagas.api.dto.input.PlataformaInputDto;
import com.mont.controlevagas.api.mapper.PlataformaMapper;
import com.mont.controlevagas.domain.exceptions.ConflictException;
import com.mont.controlevagas.domain.model.Plataforma;
import com.mont.controlevagas.domain.repository.PlataformaRepository;

@Service
public class PlataformaService  {
    
    @Autowired
    private PlataformaRepository plataformaRepository;


    @Autowired
    private PlataformaMapper plataformaMapper;

    public List<PlataformaDto> findAll() {
        return plataformaMapper.toCollectionDto(plataformaRepository.findAll());
    }

    public PlataformaDto findById(Long id) {
        return plataformaMapper.toDto(findOrFail(id));
    }


    public PlataformaDto create(PlataformaInputDto plataformaDto) {
        var plataforma = plataformaMapper.toEntity(plataformaDto);
        plataformaRepository.save(plataforma);

        return plataformaMapper.toDto(plataforma);
    }

    public PlataformaDto update(Long id, PlataformaInputDto plataformaDto) {
        var plataforma = findOrFail(id);
        plataformaMapper.copyToDomainObject(plataformaDto, plataforma);

        plataformaRepository.save(plataforma);

        return plataformaMapper.toDto(plataforma);
    
    }

    public void delete(Long id) {
        try {
            
            var plataforma = findOrFail(id);
            plataformaRepository.delete(plataforma);
        } catch (DataIntegrityViolationException e) {
            throw new ConflictException(String.format("Recurso de id %d não pode ser excluído pois está em uso", id));
        }
    }

    protected Plataforma findOrFail(Long id) {
        return plataformaRepository.findById(id).orElseThrow();
    } 
}
