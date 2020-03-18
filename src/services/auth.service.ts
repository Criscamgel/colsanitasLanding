import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private keycloakAngular: KeycloakService) {
    }

    public getToken() {
        return this.keycloakAngular.getKeycloakInstance().token;
    }

    public getUserName() {
        return this.keycloakAngular.getKeycloakInstance().profile.username;
    }

    public getIdUsuario() {
        return this.keycloakAngular.getKeycloakInstance().subject;
    }


    logout() {
        const headers = new HttpHeaders();
        const url = `${environment.keycloakUrl}/admin/realms/${environment.keycloakRealm}/users/${this.getIdUsuario()}/logout/`;
        this.http.post<any>(url, { headers, observe: 'response'})
        .subscribe(
            response => {
                alert('se cerro la session con exito!');
                // this.spinnerService.hide();
                window.location.href = environment.redirectUriLogout;
            },
            error => {
                alert('fallo el cierre de session:' + JSON.stringify(error));
                // this.spinnerService.hide();
                console.log('Error al intentar cerrar sesion' + JSON.stringify(error));
                window.location.href = environment.redirectUriLogout;
            }
        );
    }

}
