package com.mont.controlevagas.domain.exceptions;

import java.time.OffsetDateTime;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ExceptionResponse {
    
    private OffsetDateTime timestamp;

    private Integer status;

    private String title;

    private String message;

    private String details;
}
