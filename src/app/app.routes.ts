import { Routes } from '@angular/router';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { HomeComponent } from './components/home/home.component';

export const ROUTES: Routes = [

    {path: 'ayuda', component: AyudaComponent},
    {path: 'home', component: HomeComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}

]