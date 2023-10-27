package com.mont.controlevagas.core.security;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mont.controlevagas.domain.model.Usuario;
import com.mont.controlevagas.domain.repository.UsuarioRepository;

@Service
public class JpaUserDetailsService implements UserDetailsService {
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Transactional(readOnly = true)
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("E-mail não encontrado"));

        return new AuthUser(usuario, getAuthorities(usuario));
    }


    private Collection<GrantedAuthority> getAuthorities(Usuario user) {
        return user.getPermissoes().stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getNome().toUpperCase()))
                .collect(Collectors.toSet());
                        
    }
}

