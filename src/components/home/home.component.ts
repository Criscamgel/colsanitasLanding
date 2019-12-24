import { Component } from '@angular/core';
import { ServicecalcService } from '../calculadora/servicecalc.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

 constructor(_servicecalcService:ServicecalcService){

 }
 
 

}
