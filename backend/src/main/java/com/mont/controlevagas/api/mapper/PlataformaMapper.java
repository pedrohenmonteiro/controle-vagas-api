package com.mont.controlevagas.api.mapper;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mont.controlevagas.api.dto.PlataformaDto;
import com.mont.controlevagas.api.dto.input.PlataformaInputDto;
import com.mont.controlevagas.domain.model.Plataforma;

@Component
public class PlataformaMapper {
    
    @Autowired
    private ModelMapper modelMapper;

    public Plataforma toEntity(PlataformaInputDto plataformaDto) {
        return modelMapper.map(plataformaDto, Plataforma.class);
    }

    public PlataformaDto toDto(Plataforma plataforma) {
        return modelMapper.map(plataforma, PlataformaDto.class);
    }

    public List<PlataformaDto> toCollectionDto(List<Plataforma> plataformas) {
        return plataformas.stream().map(this::toDto).toList();
    }

    public void copyToDomainObject(PlataformaInputDto plataformaDto, Plataforma plataforma) {
        modelMapper.map(plataformaDto, plataforma);
    }
}
