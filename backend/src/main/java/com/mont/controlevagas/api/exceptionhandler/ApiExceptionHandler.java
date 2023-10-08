package com.mont.controlevagas.api.exceptionhandler;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.TypeMismatchException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.fasterxml.jackson.databind.JsonMappingException.Reference;
import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import com.fasterxml.jackson.databind.exc.PropertyBindingException;
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


    // Lidar com exceções de erros de sintaxe
    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex,
            HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        String message = "O corpo da requisição está inválido. Verifique erro de sintaxe.";      
        
        Throwable rootCause = ex.getCause();        

        if(rootCause instanceof InvalidFormatException) {
           return handleInvalidFormatException((InvalidFormatException) rootCause, status, request);
       }
        if(rootCause instanceof PropertyBindingException) {
           return handlePropertyBindingException((PropertyBindingException) rootCause, status, request); 
       }
    
        return handleExceptionInternal(ex, message, headers, status, request);
    }


    // Lidar com exceçoes de tipos dados diferentes
    private ResponseEntity<Object> handleInvalidFormatException(InvalidFormatException ex, 
    HttpStatusCode status, WebRequest request) {
      
        var path = joinPath(ex.getPath());
        Object[] args = {ex.getValue(), path, ex.getTargetType().getSimpleName()};
        String message = String.format("O valor %s de %s tem um tipo inválido. O tipo do valor deve ser %s", args);

        return handleExceptionInternal(ex, message, new HttpHeaders(), status, request);

    }

    private ResponseEntity<Object> handlePropertyBindingException(PropertyBindingException ex, HttpStatusCode status, WebRequest request) {
        var path = joinPath(ex.getPath());
         String message = String.format("A propriedade %s não existe. Corrija ou remova e tente novamente.", path);
        return handleExceptionInternal(ex, message, new HttpHeaders(), status, request);
    }

    @Override
    protected ResponseEntity<Object> handleTypeMismatch(TypeMismatchException ex, HttpHeaders headers,
            HttpStatusCode status, WebRequest request) {
                
        Object[] args = {ex.getPropertyName(),ex.getValue(),ex.getValue().getClass().getSimpleName(), ex.getRequiredType().getSimpleName()};
		String message = String
                    .format("O parâmetro da URL '%s' recebeu o valor '%s' do tipo %s que é um tipo inválido. O tipo do valor deve ser %s.", args);

        
        return handleExceptionInternal(ex, message, new HttpHeaders(), status, request);
    }

    // Função para juntar o nome dos campos informados no corpo da resposta caso seja mais de um
    //Exemplo: cidade.id
    private String joinPath(List<Reference> references) {
        List<String> paths = new ArrayList<>();
        
        for(int i = 0; i < references.size(); i++) {
           paths.add(references.get(i).getFieldName());
        }
        return String.join(".", paths);

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
