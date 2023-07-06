import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoServiceService {
  private baseUrl: string = 'http://localhost:8080/api/v1/empleados';
  constructor(private httpClient: HttpClient) {}
  obtenerListaEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseUrl}`);
  }
  registrarEmpleado(empleado: Empleado): Observable<object> {
    return this.httpClient.post(`${this.baseUrl}`, empleado);
  }

  actualizarEmpleado(ide: number, empleado: Empleado): Observable<object> {
    return this.httpClient.put(`${this.baseUrl}/${ide}`, empleado);
  }

  eliminarEmpleado(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  obtenerEmpleado(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.baseUrl}/${id}`)
  }
}
