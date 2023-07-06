package com.gestion.empleados.repository;

import com.gestion.empleados.model.Model_Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface Repository_Empleado extends JpaRepository<Model_Empleado, Long> {
}