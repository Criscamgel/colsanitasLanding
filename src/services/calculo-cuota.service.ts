import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseCalculoCuotas } from 'src/models/ResponseCalculoCuotas';

@Injectable({
  providedIn: 'root'
})
export class CalculoCuotaService {

  constructor(private http: HttpClient) { }

    public calcularCuotas(cantidadCuotas: number, valorSolicitado: number, descuento: number,
                          epsPrepagada: boolean, aliadoId: number): Observable<ResponseCalculoCuotas> {
      const request: object = {
         cantidadCuotas,
         valorSolicitado,
         descuento,
         epsPrepagada,
         aliadoId
      };
      const url = `${environment.backBdUrl}/calculoCuotas`;
      return this.http.post<ResponseCalculoCuotas>(url, request);
    }
}
