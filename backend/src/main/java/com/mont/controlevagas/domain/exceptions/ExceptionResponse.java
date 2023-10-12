package com.mont.controlevagas.domain.exceptions;

import java.time.OffsetDateTime;
import java.util.List;

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

    private List<Field> fields;

    @Getter
    @Builder
    public static class Field {

        private String name;
        private String userMessage;

    }
}
