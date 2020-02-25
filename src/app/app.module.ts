import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { MaterialModule } from './material/material.module';
import { SolicitudModalComponent } from './components/solicitud-modal/solicitud-modal.component';
import { ModalComponent } from './components/modal/modal.component';
import { PanelExpansionComponent } from './components/panel-expansion/panel-expansion.component';

@NgModule({
  declarations: [
    AppComponent,
    AyudaComponent,
    HomeComponent,
    CalculadoraComponent,
    SolicitudModalComponent,
    ModalComponent,
    PanelExpansionComponent
  ],
  entryComponents: [SolicitudModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    KeycloakAngularModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    MaterialModule,
    BrowserAnimationsModule
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
