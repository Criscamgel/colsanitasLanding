import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'colsanitasLanding';

  cuotas;
  valorSolicitado = 0;
  minVlr = 800000;
  maxVlr = 20000000;
  vlrCuota = 0;
  descuento = 0.21;
  tasa = 0.24;
  
  vlrCuotaSs;
  seguroCta;
  seguroTotal;


  currencyInputChanged(value) {
    var num = value.replace(/[$,]/g, "");  
    return Number(num);
  }  

  changeButton(val){
    let cuota = Number(val.value);
    let nmv = Math.pow((1 + this.tasa),(1/12))-1;
    let seguro =  (1200 / 1000000) * this.valorSolicitado;    
    
    switch (cuota) {
      case 6:
        var vlrCuota;
        var vlrDescuento = Math.round(this.valorSolicitado * this.descuento);
        var seguroCta = Math.round(seguro * cuota);        

        var vlrActual = Math.round(this.valorSolicitado - vlrDescuento);                
        var vlrPartuno = vlrActual * nmv;
        var vlrPartdos = Math.pow((1 + nmv), - cuota)
        vlrPartdos = 1 - vlrPartdos;
        vlrCuota = vlrPartuno / vlrPartdos;
        vlrCuota = Math.round(vlrCuota);
        
        console.log("vlrCuota", vlrCuota);        
               
        var vlrPartunoSeg = seguroCta * nmv;      
        var vlrPartdosSeg = Math.pow((1 + nmv), - cuota)
        vlrPartdosSeg = 1 - vlrPartdosSeg;
        seguroCta = (Math.round(vlrPartunoSeg) / vlrPartdosSeg);
        seguroCta = Math.round(seguroCta);

        console.log("seguroCta", seguroCta); 

        this.vlrCuota = Math.round(vlrCuota + seguroCta);
                
        break;
      case 12:
        this.vlrCuota = Math.round(this.valorSolicitado/cuota) 
        break;

      case 18:
        this.vlrCuota = Math.round(this.valorSolicitado/cuota) 
        break;

      case 24:
        this.vlrCuota = Math.round(this.valorSolicitado/cuota) 
        break;

      case 36:
        var vlrCuota;
        var vlrDescuento = Math.round(this.valorSolicitado * this.descuento);
        var seguroTotal = Math.round(seguro * cuota);
        this.seguroTotal = seguroTotal;
        console.log(this.seguroTotal);
                

        var vlrActual = Math.round(this.valorSolicitado - vlrDescuento);                
        var vlrPartuno = vlrActual * nmv;
        var vlrPartdos = Math.pow((1 + nmv), - cuota)
        vlrPartdos = 1 - vlrPartdos;
        vlrCuota = vlrPartuno / vlrPartdos;
        vlrCuota = Math.round(vlrCuota);

        this.vlrCuotaSs = vlrCuota;
        
        console.log("vlrCuota", vlrCuota);        
               
        var vlrPartunoSeg = seguroTotal * nmv;      
        var vlrPartdosSeg = Math.pow((1 + nmv), - cuota)
        vlrPartdosSeg = 1 - vlrPartdosSeg;
        seguroCta = (Math.round(vlrPartunoSeg) / vlrPartdosSeg);
        seguroCta = Math.round(seguroCta);
        this.seguroCta = seguroCta;

        console.log("seguroCta", seguroCta); 

        this.vlrCuota = Math.round(vlrCuota + seguroCta);        

        break;
    
      default:
        break;
    }
  }

}
