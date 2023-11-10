package com.mont.controlevagas.core.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Component;

@Component
public class AppSecurity {
    

    public Authentication getAuthentication() {
        return SecurityContextHolder.getContext().getAuthentication();
    }

    public String getUserId() {
        var jwt = (Jwt) getAuthentication().getPrincipal();
        return jwt.getClaim("usuario_id");
    }

    public boolean possuiPermissao(String permissao) {
        return getAuthentication().getAuthorities().stream()
                .anyMatch(authority -> authority.getAuthority().equals(permissao));
    }

    public boolean hasAuthority(String authorityName) {
        return getAuthentication().getAuthorities().stream().anyMatch(authority -> authority.getAuthority().equals(authorityName));
    }

    public boolean isAutenticado() {
        return getAuthentication().isAuthenticated();
    }

    public boolean usuarioAutenticadoIgual(String username) {
        return getUserId() != null && username != null && getUserId().equals(username);
    }

}
