package com.mont.controlevagas.core.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import com.mont.controlevagas.domain.model.Usuario;

import lombok.Getter;

@Getter
public class AuthUser extends User {

    private String nome;
    
    public AuthUser(Usuario usuario, Collection<? extends GrantedAuthority> authorities) {
        super(usuario.getEmail(), usuario.getSenha(), authorities);

        this.nome = usuario.getNome();
    }
}