package com.gestion.empleados.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "empleados")
public class Model_Empleado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;


    @NotEmpty(message = "No se puede insertar valores vacios")
    @NotNull(message = "No se puede insertar valores nulos")
    private String nombre;
    @NotEmpty(message = "No se puede insertar valores vacios")
    @NotNull(message = "No se puede insertar valores nulos")
    private String apellido;
    @Column(unique = true)
    @NotEmpty(message = "No se puede insertar valores vacios")
    @NotNull(message = "No se puede insertar valores nulos")
    @Email(message = "El email ya esta en uso")
    private String email;

    public Model_Empleado(String nombre, String apellido, String email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}