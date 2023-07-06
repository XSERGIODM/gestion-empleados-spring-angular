import {Component, OnInit} from '@angular/core';
import {Empleado} from '../empleado';
import {EmpleadoServiceService} from '../empleado-service.service';
import {Router} from '@angular/router';
import swal from "sweetalert2";

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
})
export class ListaEmpleadosComponent implements OnInit {
  empleados: Empleado[];

  constructor(
    private empleadoService: EmpleadoServiceService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados() {
    this.empleadoService.obtenerListaEmpleados().subscribe((dato) => {
      this.empleados = dato;
    });
  }

  eliminarEmpleado(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el empleado",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'si, eliminalo',
      cancelButtonText: 'No, cancelalo',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.empleadoService.eliminarEmpleado(id).subscribe((dato) => {
          console.log(dato);
          this.obtenerEmpleados();
          swal(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        });
      } else {
        swal(
          'Se cancelo',
          'Se cancelo la accion con exito',
          'error'
        )
      }
    })
  }

  actualizarEmpleado(id: number) {
    this.router.navigate(['/actualizar-empleado', id]);
  }

  verDetalles(id: number) {
    this.router.navigate(['empleado-detalles', id])
  }
}
