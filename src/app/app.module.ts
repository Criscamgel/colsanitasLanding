import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';

/* Routes */
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializer } from 'src/utils/app-init';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { HomeComponent } from './components/home/home.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    AyudaComponent,
    HomeComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    KeycloakAngularModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
