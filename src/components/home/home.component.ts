import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cuotas = 0;
  valorSolicitado = 800000;
  minVlr = 800000;
  maxVlr = 20000000;
  minDes = 0;
  maxDes = 5;
  descuentoSlide = 0;
  vlrCuota = 0;
  anioActual = new Date().getFullYear();
  datePay;

  /* descuentoSeis = 0.061;
  descuentoDoce = 0.11;
  descuentoDieciocho = 0.156;
  descuentoVeinticuatro = 0.20;
  descuentoTreintaseis = 0.21; */

  descuentoSeis = 0;
  descuentoDoce = 0;
  descuentoDieciocho = 0;
  descuentoVeinticuatro = 0;
  descuentoTreintaseis = 0;
  tasa = 0.24;
  nmv = 0;
  epsSanitas = true;
  epsPrepagada = false;
  periodoGracia = false;

  clickDto = false;
  vlrDto = 0;
  
  vlrCuotaSs;
  seguroCta;
  seguroTotal;
  fecha = new Date();

  constanteSeguro = 1200 / 1000000;
  constanteCuatroPorMil = 4 / 1000;
  periodoGraciaNumero = 2;

  cambioTasaPre() {
    if (this.epsPrepagada && !this.epsSanitas) {
      this.tasa = 0.22;
    }
    if (!this.epsPrepagada && this.epsSanitas) {
      this.tasa = 0.22;
    }
  }

  descuento(val) {
    const dto = Math.round(this.valorSolicitado * (Number(val.srcElement.value) / 100));
    this.vlrDto = this.valorSolicitado - dto;
    this.changeButton(Number(this.cuotas), this.vlrDto);
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

  linka() {
    window.location.href = 'https://apps.datacredito.com.co/raw/user-account/login/web/index';
      
  }

  changeButton(val, monto) {

    let cuota;
    let nmv;

    if (val.value === undefined) {
      cuota = val;
    } else {
      cuota = Number(val.value);
    }

    if (this.epsPrepagada && this.periodoGracia) {
    this.tasa = 0.24;
    nmv = this.calculoNMV(this.tasa);
    this.nmv = nmv;
    }

    if (this.epsSanitas && cuota !== 36) {
    this.tasa = 0.0000000001;
    nmv = this.calculoNMV(this.tasa);
    this.nmv = nmv;
    }

    if (this.epsSanitas && cuota == 36) {
      this.tasa = 0.068;
      nmv = this.calculoNMV(this.tasa);
      this.nmv = nmv;
    }

    if (this.epsSanitas && cuota == 24) {
      this.tasa = 0.012066;
      nmv = this.calculoNMV(this.tasa);
      this.nmv = nmv;
    }

    if (this.epsPrepagada && !this.periodoGracia) {
    this.tasa = 0.22;
    nmv = this.calculoNMV(this.tasa);
    this.nmv = nmv;
    }

    /* if (this.vlrDto === 0) {
    this.constanteSeguro =  (1200 / 1000000) * this.valorSolicitado;
    } else {
      this.constanteSeguro =  (1200 / 1000000) * this.vlrDto;
    }*/
    if (!this.periodoGracia) {

      const nominalMesVencido = this.calculoNMV(this.tasa);
      const valorCuotaSinSeguro = this.functionPago(nominalMesVencido, cuota, monto);
      this.vlrCuotaSs = valorCuotaSinSeguro;
      const valorTotalSeguro =  this.calcularTotalSeguro(monto, cuota);
      this.seguroTotal = valorTotalSeguro;
      const costoMensualSeguro = this.functionPago(nominalMesVencido, cuota, valorTotalSeguro);
      this.seguroCta = costoMensualSeguro;
      const valorCuotaConSeguro = valorCuotaSinSeguro + costoMensualSeguro;
      // calculo Cuatro por mil
      const cuatroPorMil = this.calculoCuatroPormil(monto, valorTotalSeguro);
      const montoTotalFinanciamiento = valorTotalSeguro + monto;
      // calculo Costo de Interes
      let costoDeInteres = valorTotalSeguro + cuatroPorMil + monto;
      costoDeInteres = this.calculoCostoDeInteres(nominalMesVencido, cuota, valorCuotaSinSeguro);
      costoDeInteres = costoDeInteres - costoDeInteres;

      this.vlrCuota = valorCuotaConSeguro;
    } else {
      const nominalMesVencido = this.calculoNMV(this.tasa);
      const valorTotalSeguro =  this.calcularTotalSeguro(monto, cuota);
      const valorFuturoSeguro = this.calculoValorFuturo(valorTotalSeguro, nominalMesVencido, this.periodoGraciaNumero);
      const montoTotalFinanciamiento = valorTotalSeguro + monto;
      // calculo Valor Futuro
      const valorFuturo = this.calculoValorFuturo(montoTotalFinanciamiento, nominalMesVencido, this.periodoGraciaNumero);
      // Calculo Mensual cuota
      const costoMensualSeguro = this.functionPago(nominalMesVencido, cuota - this.periodoGraciaNumero, valorFuturoSeguro);
      // calculo Mensual seguro
      const valorCuotaConSeguro = this.functionPago(nominalMesVencido, cuota - this.periodoGraciaNumero, valorFuturo);
      const valorCuotaSinSeguro = valorCuotaConSeguro - costoMensualSeguro;
      // calculo Cuatro por mil
      const cuatroPorMil = this.calculoCuatroPormil(monto, valorTotalSeguro);
      // calculo Costo de Interes
      let costoDeInteres = valorTotalSeguro + cuatroPorMil + monto;
      costoDeInteres = this.calculoCostoDeInteres(nominalMesVencido, cuota - this.periodoGraciaNumero, valorCuotaSinSeguro);
      costoDeInteres -= costoDeInteres;

      this.vlrCuota = valorCuotaConSeguro;
    }
  }

  /* Funciones Calculos */
  public functionPago(nmv: number, cuotas: number, valor: number) {
    const parteUno = valor * nmv;
    const parteDos = 1 - Math.pow((1 + nmv), (- (cuotas)));
    return Math.round(parteUno / parteDos);
  }

  public calcularTotalSeguro( valor: number, cuotas: number) {
    return Math.round(this.constanteSeguro * valor * cuotas);
  }

  public calculoNMV(tasa: number) {
    return Number(Math.pow((1 + tasa), (1 / 12)) - 1);
  }

  public calculoValorFuturo(monto: number, nmv: number, cuotas: number) {
    return monto * Math.pow(1 + nmv, cuotas);
  }

  public calculoCuatroPormil(monto: number, totalSeguro: number) {
    return Math.round((monto + totalSeguro) * this.constanteCuatroPorMil);
  }

  public calculoCostoDeInteres(nmv: number, cuota: number, valorCuotaSinSeguro: number) {
    const costoDeInteres = 1 - Math.pow((1 + nmv), - (cuota));
    return (costoDeInteres * valorCuotaSinSeguro) / nmv;
  }

  dtoChange() {
      this.clickDto = !this.clickDto;
  }
  
  changeBoolean(value) {
    return value !== value;
  }

  onPrint() {
    window.print();
  }

  valorChange() {
    if (Number(this.valorSolicitado) < 3000000) {
      this.descuentoSlide = 0;
    }
  }

  getCalcGracia() {
    if (this.fecha.getDate() > 2 && this.fecha.getDate() < 17) {
      this.datePay = 17;
    } else {
      this.datePay = 2;
    }
  }

}
