package com.gestion.empleados.exception;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class Exeption_ResourceNotFound extends RuntimeException {
    public Exeption_ResourceNotFound(String mensaje) {
        super(mensaje);
    }
}
