package com.mont.controlevagas.core.security;


import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import org.springframework.security.access.prepost.PreAuthorize;

@Documented
public @interface SecurityConstants {

    @interface Candidaturas {
        @PreAuthorize("hasAuthority('dsasdc')")
        @Target(METHOD)
        @Retention(RUNTIME)
        @interface PodeConsultar { }

        @PreAuthorize("@appSecurity.isAutenticado()")
        @Target(METHOD)
        @Retention(RUNTIME)
        @interface PodeEditar { }
    }
    
}
