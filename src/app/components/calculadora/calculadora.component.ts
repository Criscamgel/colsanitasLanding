import { Component, OnInit } from '@angular/core';
import { CalculoCuotaService } from 'src/services/calculo-cuota.service';
import { ResponseCalculoCuotas } from 'src/models/ResponseCalculoCuotas';
import { Constants } from 'src/utils/constants';
import { UsuarioService } from 'src/services/usuario.service';
import { CuotasService } from '../../../services/cuotas.service';
import { Aliado } from 'src/models/Aliado';
import { Cuota } from 'src/models/cuota';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  public minVlr = 800000;
  public maxVlr = 20000000;
  public step = 100000;
  public valorSolicitado = this.minVlr;
  public cuotas = 0;
  public descuento = 0;
  public epsSanitas = true;
  public epsPrepagada = false;
  public aliado: Aliado;
  public clickDto = false;
  public cuotasRadio: Cuota[] = [];
  public maxMonth = false;

  public minDes = 0;
  public maxDes = 5;
  public descuentoSlide = 0;

  public calculoCuota: ResponseCalculoCuotas = new ResponseCalculoCuotas();

  constructor(private calculoService: CalculoCuotaService,
              private usuarioService: UsuarioService,
              private cuotaService: CuotasService) { }

  ngOnInit() {
    localStorage.clear();
    this.cargarAlidadoId();
    this.getCuotas();
  }

  cargarAlidadoId() {
    this.consultarAliado();
    if (typeof(Storage) !== undefined) {
      if (localStorage.getItem(Constants.ALIADO) == null || localStorage.getItem(Constants.ALIADO) === undefined) {
        // LocalStorage disponible
        localStorage.setItem(Constants.ALIADO, JSON.stringify(this.aliado));
      } else {
        this.aliado = JSON.parse(localStorage.getItem(Constants.ALIADO));
      }
    }
  }

  consultarAliado = () => {
    this.usuarioService.consultarAliado().subscribe(
      aliado => {
        this.aliado = aliado;
      }, (err) => {
        console.log('Error al consultar el aliado del usuario', err);
      }
    );
  }

  public  getCuotas() {
    //  this.cuotasRadio = this.cuotaService.cuotas;
    this.cuotaService.getCuotas()
        .then(cuotasRadio => {
          this.cuotasRadio = cuotasRadio;
          console.log(this.cuotasRadio);
        }).catch(console.log);
  }

  public changeMontoSlider() {
    this.changeButton(this.cuotas);
  }

  public changeButton(val) {
    this.calculoService.calcularCuotas(this.cuotas, this.valorSolicitado, this.descuento,
                                        this.epsPrepagada, this.aliado.idAliado)
    .subscribe(calculo => {
        this.calculoCuota = calculo;
        console.log('Servicio consumido exitosamente, estos son los calculos:  ' + JSON.stringify(calculo));
      },
      () => {
        console.log('Error consumiendo el servicio de calcular cuotas!!');
      }
    );
  }

  public currencyInputChanged(value: any): number {
    return Number(value.replace(/[$,]/g, ''));
  }

  public oldNumbers(event: any) {
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !Constants.PATTER_NUMBER.test(inputChar)) {
      event.preventDefault();
    }
  }

  dtoChange() {
    console.log('click para mostrar descuento');

    this.clickDto = !this.clickDto;
    console.log(this.clickDto);
  }

  descuentoChange(val) {
    this.descuento = Number(val.srcElement.value);
    this.maxMonth = this.epsSanitas && this.clickDto && this.descuentoSlide !== 0 ? true : false;
    console.log('disable', this.maxMonth);

    this.changeButton(Number(this.cuotas));
  }

  linka() {
    window.location.href = 'https://apps.datacredito.com.co/raw/user-account/login/web/index';
  }

  onPrint() {
    window.print();
  }

}
