import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Aliado } from 'src/models/Aliado';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private authService: AuthService) { }

    public consultarAliado(): Observable<Aliado> {
      const params = new HttpParams().set('nombreUsuario', this.authService.getUserName());
      return this.http.get<Aliado>(`${environment.backBdUrl}/consultarAliado`, {params});
    }
}
