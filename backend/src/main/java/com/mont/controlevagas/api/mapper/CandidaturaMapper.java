package com.mont.controlevagas.api.mapper;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mont.controlevagas.api.dto.CandidaturaDto;
import com.mont.controlevagas.api.dto.input.CandidaturaInputDto;
import com.mont.controlevagas.domain.model.Candidatura;
import com.mont.controlevagas.domain.model.Plataforma;
import com.mont.controlevagas.domain.model.Tecnologia;

@Component
public class CandidaturaMapper {
    
    @Autowired
    private ModelMapper modelMapper;

    public Candidatura toEntity(CandidaturaInputDto candidaturaDto) {
        return modelMapper.map(candidaturaDto, Candidatura.class);
    }

    public CandidaturaDto toDto(Candidatura candidatura) {
        return modelMapper.map(candidatura, CandidaturaDto.class);
    }

    public List<CandidaturaDto> toCollectionDto(List<Candidatura> candidaturas) {
        return candidaturas.stream().map(this::toDto).toList();
    }

    public void copyToDomainObject(CandidaturaInputDto candidaturaDto, Candidatura candidatura) {

        // Para evitar exceçao org.hibernate.HibernateException: 
        // identifier of an instance of com.mont.controlevagas.domain.model.Plataforma was altered from 2 to 1
        candidatura.setPlataforma(new Plataforma());
        candidatura.setTecnologia(new Tecnologia());

        modelMapper.map(candidaturaDto, candidatura);
    }
}
