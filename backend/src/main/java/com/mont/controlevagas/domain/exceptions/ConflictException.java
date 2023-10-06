package com.mont.controlevagas.domain.exceptions;

public class ConflictException extends RuntimeException{
    public ConflictException(String msg) {
        super(msg);
    }
}
