import {Component} from '@angular/core';
import {Empleado} from "../empleado";
import {EmpleadoServiceService} from "../empleado-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent {

  id: number;
  empleado: Empleado = new Empleado();

  constructor(
    private empleadoServicio: EmpleadoServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoServicio.obtenerEmpleado(this.id).subscribe(
      dato => {
        this.empleado = dato;
      }
    )
  }

  actualizarEmpleado() {
    this.empleadoServicio.actualizarEmpleado(this.id, this.empleado).subscribe(
      (dato) => {
        console.log(dato);
        this.irListaEmpleado();
      },
      (error) => console.log(error)
    );
  }

  irListaEmpleado() {
    this.router.navigate(['/empleados']);
  }

  onSubmit() {
    this.actualizarEmpleado()
  }
}
