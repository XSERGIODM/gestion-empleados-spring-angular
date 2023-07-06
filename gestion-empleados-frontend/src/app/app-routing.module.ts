import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import {RegistrarEmpleadoComponent} from "./registrar-empleado/registrar-empleado.component";
import {EmpleadoDetallesComponent} from "./empleado-detalles/empleado-detalles.component";




//Aquí pogon las rutas a las cuales quiero entrar co un alias
const routes: Routes = [
  //ejemplo http://localhost:4200/empleados va al componete lista de empleados
  { path: 'empleados', component: ListaEmpleadosComponent },
  // en esta si no tiene el "empleados" http://localhost:4200/ igualmente me dirige a empleados
  { path: '', redirectTo: 'empleados', pathMatch: 'full' },
  //aquí más de lo mismo me le doy un nombre a la ruta y será http://localhost:4200/registrar-empleado
  { path: 'registrar-empleado', component: RegistrarEmpleadoComponent },
  { path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent },
  {path: 'empleado-detalles/:id', component: EmpleadoDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
