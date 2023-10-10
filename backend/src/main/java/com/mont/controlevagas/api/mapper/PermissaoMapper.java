package com.mont.controlevagas.api.mapper;

import java.util.Collection;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mont.controlevagas.api.dto.PermissaoDto;
import com.mont.controlevagas.api.dto.input.PermissaoInputDto;
import com.mont.controlevagas.domain.model.Permissao;


@Component
public class PermissaoMapper {
    
    @Autowired
    private ModelMapper modelMapper;

    public Permissao toEntity(PermissaoInputDto permissaoDto) {
        return modelMapper.map(permissaoDto, Permissao.class);
    }

    public PermissaoDto toDto(Permissao permissao) {
        return modelMapper.map(permissao, PermissaoDto.class);
    }

    public List<PermissaoDto> toCollectionDto(Collection<Permissao> permissoes) {
        return permissoes.stream().map(this::toDto).toList();
    }

    public void copyToDomainObject(PermissaoInputDto permissaoDto, Permissao permissao) {
        modelMapper.map(permissaoDto, permissao);
    }
}
