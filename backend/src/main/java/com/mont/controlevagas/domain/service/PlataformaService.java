package com.mont.controlevagas.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mont.controlevagas.domain.repository.PlataformaRepository;

@Service
public class PlataformaService  {
    
    @Autowired
    private PlataformaRepository plataformaRepository;
}
