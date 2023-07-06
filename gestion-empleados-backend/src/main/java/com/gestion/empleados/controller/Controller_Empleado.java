package com.gestion.empleados.controller;

import com.gestion.empleados.exception.Exeption_ResourceNotFound;
import com.gestion.empleados.model.Model_Empleado;
import com.gestion.empleados.repository.Repository_Empleado;
import com.gestion.empleados.service.Service_Empledo;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200/")
public class Controller_Empleado {

    private final Service_Empledo serviceEmpledo;

    @GetMapping("/empleados")
    public List<Model_Empleado> listarEmpleados() {
        return serviceEmpledo.findAll();
    }

    @PostMapping("/empleados")
    public Model_Empleado crearEmpleado(@RequestBody Model_Empleado empleadoBody) {
        if (empleadoBody == null) {
            throw new RuntimeException("No hay ningun modelo para guardar");
        }
        return serviceEmpledo.save(empleadoBody);
    }

    @DeleteMapping("/empleados/{ideEmpleado}")
    public ResponseEntity<Model_Empleado> eliminarEmpleado(@PathVariable(value = "ideEmpleado") Long ideEmpleado) {

        Model_Empleado empleado= serviceEmpledo.findByIdAndDelete(ideEmpleado);
        System.out.println();
        return new ResponseEntity<>(empleado,HttpStatus.OK);
    }

    @GetMapping("/empleados/{ideEmpleado}")
    public ResponseEntity<Model_Empleado> buscarEmpleadoIde(@PathVariable(value = "ideEmpleado") Long ideEmpleado) {
        Model_Empleado empleado = serviceEmpledo.findById(ideEmpleado).orElseThrow(
                () -> new Exeption_ResourceNotFound("No se encontro ningun empleado con el id" + ideEmpleado)
        );

        return ResponseEntity.ok(empleado);
    }

    @PutMapping("/empleados/{ideEmpleado}")
    public ResponseEntity<Model_Empleado> actualizarEmpleado(@PathVariable(value = "ideEmpleado") Long ideEmpleado, @Valid @RequestBody Model_Empleado empleadoBody) {
        Model_Empleado empleado = serviceEmpledo.findById(ideEmpleado).orElseThrow(
                () -> new Exeption_ResourceNotFound("No se encontro ningun empleado con el id" + ideEmpleado)
        );

        empleado.setNombre(empleadoBody.getNombre());
        empleado.setApellido(empleadoBody.getApellido());
        empleado.setEmail(empleadoBody.getEmail());

        return ResponseEntity.ok(serviceEmpledo.save(empleado));
    }

}
