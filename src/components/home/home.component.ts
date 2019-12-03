import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  cuotas;
  valorSolicitado = 800000;
  minVlr = 800000;
  maxVlr = 20000000;
  minDes = 1;
  maxDes = 3;
  descuentoSlide = 1;
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
  
  oldNumbers(event: any) {   
    const pattern =  new RegExp('^[0-9]+$');    
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();      
    }
  }

  linka(){
     console.log("link");
      
  }

  changeButton(val){
    let cuota = Number(val.value);
    let nmv = Math.pow((1 + this.tasa),(1/12))-1;
    let seguro =  (1200 / 1000000) * this.valorSolicitado;    
    
    
    switch (cuota) {
      case 6:
        
          var vlrCuota;
          var vlrDescuento = Math.round(this.valorSolicitado * this.descuento);
          var seguroTotal = Math.round(seguro * cuota);
          /* Seguro Total */        
          this.seguroTotal = seguroTotal;
                          
  
          var vlrActual = Math.round(this.valorSolicitado - vlrDescuento);                
          var vlrPartuno = vlrActual * nmv;
          var vlrPartdos = Math.pow((1 + nmv), - cuota)
          vlrPartdos = 1 - vlrPartdos;
          vlrCuota = vlrPartuno / vlrPartdos;
          vlrCuota = Math.round(vlrCuota);
          /* Valor Cuota sin seguro */
          this.vlrCuotaSs = vlrCuota;       
                 
          var vlrPartunoSeg = seguroTotal * nmv;      
          var vlrPartdosSeg = Math.pow((1 + nmv), - cuota)
          vlrPartdosSeg = 1 - vlrPartdosSeg;
          var seguroCta = (Math.round(vlrPartunoSeg) / vlrPartdosSeg);
          seguroCta = Math.round(seguroCta);
          /* Seguro de la cuota */
          this.seguroCta = seguroCta;
          this.vlrCuota = Math.round(vlrCuota + seguroCta);    
                              
        break;
      case 12:
        
        var vlrCuota;
        var vlrDescuento = Math.round(this.valorSolicitado * this.descuento);
        var seguroTotal = Math.round(seguro * cuota);
        /* Seguro Total */        
        this.seguroTotal = seguroTotal;
                        

        var vlrActual = Math.round(this.valorSolicitado - vlrDescuento);                
        var vlrPartuno = vlrActual * nmv;
        var vlrPartdos = Math.pow((1 + nmv), - cuota)
        vlrPartdos = 1 - vlrPartdos;
        vlrCuota = vlrPartuno / vlrPartdos;
        vlrCuota = Math.round(vlrCuota);
        /* Valor Cuota sin seguro */
        this.vlrCuotaSs = vlrCuota;       
               
        var vlrPartunoSeg = seguroTotal * nmv;      
        var vlrPartdosSeg = Math.pow((1 + nmv), - cuota)
        vlrPartdosSeg = 1 - vlrPartdosSeg;
        var seguroCta = (Math.round(vlrPartunoSeg) / vlrPartdosSeg);
        seguroCta = Math.round(seguroCta);
        /* Seguro de la cuota */
        this.seguroCta = seguroCta;
        this.vlrCuota = Math.round(vlrCuota + seguroCta);    
             
        break;

      case 18:
        
        var vlrCuota;
        var vlrDescuento = Math.round(this.valorSolicitado * this.descuento);
        var seguroTotal = Math.round(seguro * cuota);
        /* Seguro Total */        
        this.seguroTotal = seguroTotal;
                        

        var vlrActual = Math.round(this.valorSolicitado - vlrDescuento);                
        var vlrPartuno = vlrActual * nmv;
        var vlrPartdos = Math.pow((1 + nmv), - cuota)
        vlrPartdos = 1 - vlrPartdos;
        vlrCuota = vlrPartuno / vlrPartdos;
        vlrCuota = Math.round(vlrCuota);
        /* Valor Cuota sin seguro */
        this.vlrCuotaSs = vlrCuota;       
               
        var vlrPartunoSeg = seguroTotal * nmv;      
        var vlrPartdosSeg = Math.pow((1 + nmv), - cuota)
        vlrPartdosSeg = 1 - vlrPartdosSeg;
        var seguroCta = (Math.round(vlrPartunoSeg) / vlrPartdosSeg);
        seguroCta = Math.round(seguroCta);
        /* Seguro de la cuota */
        this.seguroCta = seguroCta;
        this.vlrCuota = Math.round(vlrCuota + seguroCta);    
             
        break;

      case 24:
        
        var vlrCuota;
        var vlrDescuento = Math.round(this.valorSolicitado * this.descuento);
        var seguroTotal = Math.round(seguro * cuota);
        /* Seguro Total */        
        this.seguroTotal = seguroTotal;
                        

        var vlrActual = Math.round(this.valorSolicitado - vlrDescuento);                
        var vlrPartuno = vlrActual * nmv;
        var vlrPartdos = Math.pow((1 + nmv), - cuota)
        vlrPartdos = 1 - vlrPartdos;
        vlrCuota = vlrPartuno / vlrPartdos;
        vlrCuota = Math.round(vlrCuota);
        /* Valor Cuota sin seguro */
        this.vlrCuotaSs = vlrCuota;       
               
        var vlrPartunoSeg = seguroTotal * nmv;      
        var vlrPartdosSeg = Math.pow((1 + nmv), - cuota)
        vlrPartdosSeg = 1 - vlrPartdosSeg;
        var seguroCta = (Math.round(vlrPartunoSeg) / vlrPartdosSeg);
        seguroCta = Math.round(seguroCta);
        /* Seguro de la cuota */
        this.seguroCta = seguroCta;
        this.vlrCuota = Math.round(vlrCuota + seguroCta);    
             
        break;

      case 36:

        var vlrCuota;
        var vlrDescuento = Math.round(this.valorSolicitado * this.descuento);
        var seguroTotal = Math.round(seguro * cuota);
        /* Seguro Total */        
        this.seguroTotal = seguroTotal;
                        

        var vlrActual = Math.round(this.valorSolicitado - vlrDescuento);                
        var vlrPartuno = vlrActual * nmv;
        var vlrPartdos = Math.pow((1 + nmv), - cuota)
        vlrPartdos = 1 - vlrPartdos;
        vlrCuota = vlrPartuno / vlrPartdos;
        vlrCuota = Math.round(vlrCuota);
        /* Valor Cuota sin seguro */
        this.vlrCuotaSs = vlrCuota;       
               
        var vlrPartunoSeg = seguroTotal * nmv;      
        var vlrPartdosSeg = Math.pow((1 + nmv), - cuota)
        vlrPartdosSeg = 1 - vlrPartdosSeg;
        var seguroCta = (Math.round(vlrPartunoSeg) / vlrPartdosSeg);
        seguroCta = Math.round(seguroCta);
        /* Seguro de la cuota */
        this.seguroCta = seguroCta;
        this.vlrCuota = Math.round(vlrCuota + seguroCta);    

        break;
    
      default:
        break;
    }
  }

}
