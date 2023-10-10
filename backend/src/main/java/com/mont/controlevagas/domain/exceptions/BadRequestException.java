package com.mont.controlevagas.domain.exceptions;

public class BadRequestException extends RuntimeException {
    
    public BadRequestException(String msg) {
        super(msg);
    }
}
