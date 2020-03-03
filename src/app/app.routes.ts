import { Routes } from '@angular/router';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { HomeComponent } from './components/home/home.component';
import { PrintComponent } from './components/print/print.component';

export const ROUTES: Routes = [

    {path: 'ayuda', component: AyudaComponent},
    {path: 'home', component: HomeComponent},
    {path: 'print', component: PrintComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}

];
