import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  cuotas = 0;
  valorSolicitado = 800000;
  minVlr = 800000;
  maxVlr = 20000000;
  minDes = 0;
  maxDes = 5;
  descuentoSlide = 0;
  vlrCuota = 0;

  /* descuentoSeis = 0.061; */
  /* descuentoDoce = 0.11; */
  /* descuentoDieciocho = 0.156; */
  /* descuentoVeinticuatro = 0.20; */
  /* descuentoTreintaseis = 0.21; */

  descuentoSeis = 0;
  descuentoDoce = 0;
  descuentoDieciocho = 0;
  descuentoVeinticuatro = 0;
  descuentoTreintaseis = 0;
  tasa = 0.24;
  nmv = 0;
  epsSanitas = true;
  epsPrepagada = false;

  clickDto = false;
  vlrDto = 0;
  
  vlrCuotaSs;
  seguroCta;
  seguroTotal;

  cambioTasaPre(){
    /* if(this.epsPrepagada && !this.epsSanitas){
      this.tasa = 0.22;
    }
    if(!this.epsPrepagada && this.epsSanitas){
      this.tasa = 0.24;
    } */
  }

  descuento(val){
    var dto = Math.round(this.valorSolicitado * (Number(val.srcElement.value) / 100));
    this.vlrDto = this.valorSolicitado - dto;
    this.changeButton(Number(this.cuotas));
      
  }


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
    window.location.href = 'https://apps.datacredito.com.co/raw/user-account/login/web/index';
      
  }

  changeButton(val){

    let cuota;
    let seguro;
    let nmv;

    if(val.value === undefined){
      cuota = val;
    }else{
      cuota = Number(val.value);
    }    
    


    if(this.epsSanitas && cuota !== 36){
    this.tasa = 0.0000000001
    nmv = Math.pow((1 + this.tasa),(1/12))-1;
    this.nmv = nmv;    
    }

    if(this.epsSanitas && cuota == 36){
      this.tasa = 0.0604;
      nmv = Math.pow((1 + this.tasa),(1/12))-1;
      this.nmv = nmv;   
    }    

    if(this.epsPrepagada){
    this.tasa = 0.24
    nmv = Math.pow((1 + this.tasa),(1/12))-1;
    this.nmv = nmv;
    }    

    if(this.vlrDto === 0){
    seguro =  (1200 / 1000000) * this.valorSolicitado;
    }else{
    seguro =  (1200 / 1000000) * this.vlrDto;  
    }
    
    switch (cuota) {
      case 6:

          var vlrCuota;
          var vlrDescuento;
          var vlrActual;

          if(this.vlrDto === 0){
          vlrDescuento = Math.round(this.valorSolicitado * this.descuentoSeis);
          }else{
          vlrDescuento = Math.round(this.vlrDto * this.descuentoSeis);  
          }
          var seguroTotal = Math.round(seguro * cuota);
          /* Seguro Total */        
          this.seguroTotal = seguroTotal;
                          
          if(this.vlrDto === 0){
            vlrActual = Math.round(this.valorSolicitado - vlrDescuento);
          }else{
            vlrActual = Math.round(this.vlrDto - vlrDescuento);
          }

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
          var seguroCta = vlrPartunoSeg / vlrPartdosSeg;
          seguroCta = Math.round(seguroCta);
          /* Seguro de la cuota */
          this.seguroCta = seguroCta;
          this.vlrCuota = Math.round(vlrCuota + seguroCta);
          
                              
        break;
      case 12:
        
        var vlrCuota;
          var vlrDescuento;
          var vlrActual;

          if(this.vlrDto === 0){
          vlrDescuento = Math.round(this.valorSolicitado * this.descuentoDoce);
          }else{
          vlrDescuento = Math.round(this.vlrDto * this.descuentoDoce);  
          }
          var seguroTotal = Math.round(seguro * cuota);
          /* Seguro Total */        
          this.seguroTotal = seguroTotal;
                          
          if(this.vlrDto === 0){
            vlrActual = Math.round(this.valorSolicitado - vlrDescuento);
          }else{
            vlrActual = Math.round(this.vlrDto - vlrDescuento);
          }
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
          var seguroCta = vlrPartunoSeg / vlrPartdosSeg;
          seguroCta = Math.round(seguroCta);
          /* Seguro de la cuota */
          this.seguroCta = seguroCta;
          this.vlrCuota = Math.round(vlrCuota + seguroCta);
             
        break;

      case 18:
        
        var vlrCuota;
          var vlrDescuento;
          var vlrActual;

          if(this.vlrDto === 0){
          vlrDescuento = Math.round(this.valorSolicitado * this.descuentoDieciocho);
          }else{
          vlrDescuento = Math.round(this.vlrDto * this.descuentoDieciocho);  
          }
          var seguroTotal = Math.round(seguro * cuota);
          /* Seguro Total */        
          this.seguroTotal = seguroTotal;
                          
          if(this.vlrDto === 0){
            vlrActual = Math.round(this.valorSolicitado - vlrDescuento);
          }else{
            vlrActual = Math.round(this.vlrDto - vlrDescuento);
          }
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
          var seguroCta = vlrPartunoSeg / vlrPartdosSeg;
          seguroCta = Math.round(seguroCta);
          /* Seguro de la cuota */
          this.seguroCta = seguroCta;
          this.vlrCuota = Math.round(vlrCuota + seguroCta);
             
        break;

      case 24:
        
        var vlrCuota;
          var vlrDescuento;
          var vlrActual;

          if(this.vlrDto === 0){
          vlrDescuento = Math.round(this.valorSolicitado * this.descuentoVeinticuatro);
          }else{
          vlrDescuento = Math.round(this.vlrDto * this.descuentoVeinticuatro);  
          }
          var seguroTotal = Math.round(seguro * cuota);
          /* Seguro Total */        
          this.seguroTotal = seguroTotal;
                          
          if(this.vlrDto === 0){
            vlrActual = Math.round(this.valorSolicitado - vlrDescuento);
          }else{
            vlrActual = Math.round(this.vlrDto - vlrDescuento);
          }
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
          var seguroCta = vlrPartunoSeg / vlrPartdosSeg;
          seguroCta = Math.round(seguroCta);
          /* Seguro de la cuota */
          this.seguroCta = seguroCta;
          this.vlrCuota = Math.round(vlrCuota + seguroCta);
             
        break;

      case 36:

          var vlrCuota;
          var vlrDescuento;
          var vlrActual;

          if(this.vlrDto === 0){
          vlrDescuento = Math.round(this.valorSolicitado * this.descuentoTreintaseis);
          }else{
          vlrDescuento = Math.round(this.vlrDto * this.descuentoTreintaseis);  
          }
          var seguroTotal = Math.round(seguro * cuota);
          /* Seguro Total */        
          this.seguroTotal = seguroTotal;
                          
          if(this.vlrDto === 0){
            vlrActual = Math.round(this.valorSolicitado - vlrDescuento);
          }else{
            vlrActual = Math.round(this.vlrDto - vlrDescuento);
          }
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
          var seguroCta = vlrPartunoSeg / vlrPartdosSeg;
          seguroCta = Math.round(seguroCta);
          /* Seguro de la cuota */
          this.seguroCta = seguroCta;
          this.vlrCuota = Math.round(vlrCuota + seguroCta);

        break;
    
      default:
        break;
    }
  }

  dtoChange(){
      this.clickDto = !this.clickDto
  }
  

  onPrint(){
    window.print();
  }

  valorChange(){
    if(Number(this.valorSolicitado) < 3000000){
      this.descuentoSlide = 0;
    }
  }

}
