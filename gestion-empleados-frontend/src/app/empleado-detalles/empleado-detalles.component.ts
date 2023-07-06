import {Component, OnInit} from '@angular/core';
import {EmpleadoServiceService} from "../empleado-service.service";
import {Empleado} from "../empleado";
import {ActivatedRoute, Router} from "@angular/router";
import swal from "sweetalert2";

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {
  id: number;

  empleado: Empleado;

  constructor(private empleadoService: EmpleadoServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoService.obtenerEmpleado(this.id).subscribe(
      dato => {
        this.empleado = dato;
        swal(`Detalle del empleado <br/> ${this.empleado.nombre}`)
      }
    );
  }

  volver(){
    this.router.navigate(['/empleados'])
  }

}
