package com.mont.controlevagas.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mont.controlevagas.api.dto.PermissaoDto;
import com.mont.controlevagas.api.dto.input.PermissaoInputDto;
import com.mont.controlevagas.api.mapper.PermissaoMapper;
import com.mont.controlevagas.domain.model.Permissao;
import com.mont.controlevagas.domain.repository.PermissaoRepository;

@Service
public class PermissaoService {
    
    @Autowired
    private PermissaoRepository permissaoRepository;

    @Autowired
    private PermissaoMapper permissaoMapper;

    public List<PermissaoDto> findAll() {
        return permissaoMapper.toCollectionDto(permissaoRepository.findAll());
    }

    public PermissaoDto findById(Long id) {
        return permissaoMapper.toDto(findOrFail(id));
    }


    public PermissaoDto create(PermissaoInputDto permissaoDto) {
        var permissao = permissaoMapper.toEntity(permissaoDto);
        permissaoRepository.save(permissao);

        return permissaoMapper.toDto(permissao);
    }

    public PermissaoDto update(Long id, PermissaoInputDto permissaoDto) {
        var permissao = findOrFail(id);
        permissaoMapper.copyToDomainObject(permissaoDto, permissao);

        permissaoRepository.save(permissao);

        return permissaoMapper.toDto(permissao);
    
    }

    protected Permissao findOrFail(Long id) {
        return permissaoRepository.findById(id).orElseThrow();
    } 
}
