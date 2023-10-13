package com.mont.controlevagas.api.mapper;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mont.controlevagas.api.dto.TecnologiaDto;
import com.mont.controlevagas.api.dto.input.TecnologiaInputDto;
import com.mont.controlevagas.domain.model.Tecnologia;

@Component
public class TecnologiaMapper {
    
    
    @Autowired
    private ModelMapper modelMapper;

    public Tecnologia toEntity(TecnologiaInputDto tecnologiaDto) {
        return modelMapper.map(tecnologiaDto, Tecnologia.class);
    }

    public TecnologiaDto toDto(Tecnologia tecnologia) {
        return modelMapper.map(tecnologia, TecnologiaDto.class);
    }

    public List<TecnologiaDto> toCollectionDto(List<Tecnologia> tecnologias) {
        return tecnologias.stream().map(this::toDto).toList();
    }

    public void copyToDomainObject(TecnologiaInputDto tecnologiaDto, Tecnologia tecnologia) {
        modelMapper.map(tecnologiaDto, tecnologia);
    }

}
