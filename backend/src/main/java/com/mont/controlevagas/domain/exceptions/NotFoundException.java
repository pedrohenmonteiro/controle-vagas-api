package com.mont.controlevagas.domain.exceptions;

public class NotFoundException extends RuntimeException{
    
    public NotFoundException(String msg) {
        super(msg);
    }

    public NotFoundException(Long id) {
        this(String.format("O recurso de id %d não foi encontrado.", id));
    }
}
