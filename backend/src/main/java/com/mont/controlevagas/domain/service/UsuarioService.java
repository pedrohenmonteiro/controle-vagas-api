package com.mont.controlevagas.domain.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mont.controlevagas.api.dto.UsuarioDto;
import com.mont.controlevagas.api.dto.input.UsuarioInputDto;
import com.mont.controlevagas.api.mapper.UsuarioMapper;
import com.mont.controlevagas.domain.exceptions.BadRequestException;
import com.mont.controlevagas.domain.exceptions.NotFoundException;
import com.mont.controlevagas.domain.model.Usuario;
import com.mont.controlevagas.domain.repository.UsuarioRepository;

@Service
public class UsuarioService {
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioMapper usuarioMapper;

    @Autowired
	private PasswordEncoder passwordEncoder;

    public List<UsuarioDto> findAll() {
        return usuarioMapper.toCollectionDto(usuarioRepository.findAll());
    }

    public UsuarioDto findById(Long id) {
        return usuarioMapper.toDto(findOrFail(id));
    }


    public UsuarioDto create(UsuarioInputDto usuarioDto) {
        var usuario = usuarioMapper.toEntity(usuarioDto);

        
       

        Optional<Usuario> userExistente = usuarioRepository.findByEmail(usuarioDto.getEmail());
        if(userExistente.isPresent()) {
            throw new BadRequestException("Email já existe.");
        }

        if(usuario.isNovo()) usuario.setSenha(passwordEncoder.encode(usuarioDto.getSenha()));
            
        
        return usuarioMapper.toDto(usuarioRepository.save(usuario));
    }

    public UsuarioDto update(Long id, UsuarioInputDto usuarioDto) {
        var usuario = findOrFail(id);
        usuarioMapper.copyToDomainObject(usuarioDto, usuario);

        return usuarioMapper.toDto(usuarioRepository.save(usuario));
    
    }

    protected Usuario findOrFail(Long id) {
        return usuarioRepository.findById(id).orElseThrow(() -> new NotFoundException(id));
    } 

}
