package com.gestion.empleados.service.implement;

import com.gestion.empleados.model.Model_Empleado;
import com.gestion.empleados.repository.Repository_Empleado;
import com.gestion.empleados.service.Service_Empledo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Repository
public class Implement_Empleado implements Service_Empledo {

    private final Repository_Empleado repositoryEmpleado;

    @Override
    public List<Model_Empleado> findAll() {
        return repositoryEmpleado.findAll();
    }

    @Override
    public Model_Empleado save(Model_Empleado empleadoBody) {
        return repositoryEmpleado.save(empleadoBody);
    }

    @Override
    public Model_Empleado findByIdAndDelete(Long ideEmpleado) {
        Model_Empleado empleado = repositoryEmpleado.findById(ideEmpleado).orElseThrow();
        repositoryEmpleado.deleteById(ideEmpleado);
        return empleado;
    }

    @Override
    public Optional<Model_Empleado> findById(Long ideEmpleado) {
        return repositoryEmpleado.findById(ideEmpleado);
    }
}
