import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'colsanitasLanding';

  public btnCuotas = [

    {seis:true},
    {doce:false},
    {dieciocho:false},
    {veinticuatro:false},
    {treseis:false},
    {cuatrocho:false}

  ]

  changeButton(btn:any){

    /* btn = true; */
    console.log("btn", btn);
    
    this.btnCuotas.forEach(element => {
      console.log(element);      
      
      
    });
    console.log("---- Other ----");
    
  }

}
