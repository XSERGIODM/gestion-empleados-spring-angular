import {Component, OnInit} from '@angular/core';
import {Empleado} from "../empleado";
import {EmpleadoServiceService} from "../empleado-service.service";
import {Router} from "@angular/router";
import swal from "sweetalert2";

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {
  empleado: Empleado = new Empleado();

  constructor(
    private empleadoServicio: EmpleadoServiceService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  guardarEmpleado() {
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas guardar el empleado",
      type: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Si, guardarlo',
      cancelButtonText: 'No, cancelalo',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(
          (dato) => {
            console.log(dato);
            swal(
              'Empleado guardado',
              `El empleado ha sido guardado con exito <br> ${this.empleado.nombre}`,
              'success'
            );
          },
          (error) => console.log(error));
      } else {
        swal(
          'Se cancelo',
          'Se cancelo la accion con exito',
          'error'
        )
      }
      this.irListaEmpleado();
    })
  }

  irListaEmpleado() {
    this.router.navigate(['/empleados']);
  }

  onSubmit() {
    this.guardarEmpleado();
  }
}
