package com.mont.controlevagas.core.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class ResourceServerConfig {
    
    @Bean
    SecurityFilterChain resourceServerFilterChain(HttpSecurity http) throws Exception {
        http
        .authorizeHttpRequests(authorize -> authorize.anyRequest().permitAll())
        .csrf(crsf -> crsf.disable())
        .cors(Customizer.withDefaults());


        return http.build();
    } 
}
