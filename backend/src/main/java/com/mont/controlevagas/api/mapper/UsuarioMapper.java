package com.mont.controlevagas.api.mapper;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mont.controlevagas.api.dto.UsuarioDto;
import com.mont.controlevagas.api.dto.input.UsuarioInputDto;
import com.mont.controlevagas.domain.model.Usuario;


@Component
public class UsuarioMapper {
    
    @Autowired
    private ModelMapper modelMapper;

    public Usuario toEntity(UsuarioInputDto usuarioDto) {
        return modelMapper.map(usuarioDto, Usuario.class);
    }

    public UsuarioDto toDto(Usuario usuario) {
        return modelMapper.map(usuario, UsuarioDto.class);
    }

    public List<UsuarioDto> toCollectionDto(List<Usuario> usuarios) {
        return usuarios.stream().map(this::toDto).toList();
    }

    public void copyToDomainObject(UsuarioInputDto usuarioDto, Usuario usuario) {
        modelMapper.map(usuarioDto, usuario);
    }
}
