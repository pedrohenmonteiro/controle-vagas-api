package com.mont.controlevagas.api.exceptionhandler;

import java.time.OffsetDateTime;

import org.apache.catalina.connector.Response;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.mont.controlevagas.domain.exceptions.ConflictException;
import com.mont.controlevagas.domain.exceptions.ExceptionResponse;
import com.mont.controlevagas.domain.exceptions.NotFoundException;

@RestControllerAdvice
public class ApiExceptionHandler extends ResponseEntityExceptionHandler {
    
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<?> handleNotFoundException(Exception ex, WebRequest req) {
       return handleExceptionInternal(ex, null, new HttpHeaders(), HttpStatus.NOT_FOUND, req);
    }

    @ExceptionHandler(ConflictException.class)
    public ResponseEntity<?> handleConflictException(Exception ex, WebRequest req) {
       return handleExceptionInternal(ex, null, new HttpHeaders(), HttpStatus.CONFLICT, req);
    }

    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex,
            HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        String message = "O corpo da requisição está inválido. Verifique erro de sintaxe.";       

        return handleExceptionInternal(ex, message, headers, status, request);
    }


    @Override
    protected ResponseEntity<Object> handleExceptionInternal(Exception ex, Object body, HttpHeaders headers,
            HttpStatusCode statusCode, WebRequest request) {
        
        String title = HttpStatus.valueOf(statusCode.value()).getReasonPhrase();     

        var newBody = ExceptionResponse.builder()
                .timestamp(OffsetDateTime.now())
                .status(statusCode.value())
                .title(title)
                .message(ex.getMessage())
                .details(request.getDescription(false));

             if(body == null) {
               body = newBody.build();
            } else if (body instanceof String) {
                var message = (String) body;
                newBody.message(message);
              body = newBody.build(); 
            }
            
            System.out.println("======================================================================");
            System.out.println(ex.getClass().getName());
            System.out.println(ex.getCause());
            System.out.println("======================================================================");


        return super.handleExceptionInternal(ex, body, headers, statusCode, request);
    }

    
}
