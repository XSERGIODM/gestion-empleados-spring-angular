package com.gestion.empleados.service;

import com.gestion.empleados.model.Model_Empleado;

import java.util.List;
import java.util.Optional;

public interface Service_Empledo {

    List<Model_Empleado> findAll();

    Model_Empleado save(Model_Empleado empleadoBody);

    Model_Empleado findByIdAndDelete(Long ideEmpleado);

    Optional<Model_Empleado> findById(Long ideEmpleado);
}
