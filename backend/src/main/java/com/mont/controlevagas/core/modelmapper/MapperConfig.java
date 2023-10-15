package com.mont.controlevagas.core.modelmapper;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.mont.controlevagas.api.dto.input.CandidaturaInputDto;
import com.mont.controlevagas.domain.model.Candidatura;

@Configuration
public class MapperConfig {
    
    @Bean
    public ModelMapper modelMapper() {

        var modelMapper = new ModelMapper();
 

        return modelMapper;
    }
}  

 