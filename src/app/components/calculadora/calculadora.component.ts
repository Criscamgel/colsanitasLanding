import { Component, OnInit, ChangeDetectorRef, Output,EventEmitter, Input } from '@angular/core';
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
  public descuento = 0;
  public epsSanitas = true;
  public epsPrepagada = false;
  public aliado: Aliado;
  public clickDto = false;
  public cuotasRadio: Cuota[] = [];
  public maxMonth = false;
  public montoSolicitado = this.minVlr;
  public cuotas: number;

  public minDes = 0;
  public maxDes = 5;
  public descuentoSlide = 0;

  public calculoCuota: ResponseCalculoCuotas;
  @Output() enableStarRequest = new EventEmitter<boolean>();
  @Input() showErrorRequest: boolean;

  constructor(private calculoService: CalculoCuotaService,
              private usuarioService: UsuarioService,
              private cuotaService: CuotasService,
              public cdRef: ChangeDetectorRef) {
      this.calculoCuota  = new ResponseCalculoCuotas();
      this.calculoCuota.montoSolicitado = this.minVlr;
  }

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
        console.error('Error al consultar el aliado del usuario', err);
      }
    );
  }

  public  getCuotas() {
    //  this.cuotasRadio = this.cuotaService.cuotas;
    this.cuotaService.getCuotas()
        .then(cuotasRadio => {
          this.cuotasRadio = cuotasRadio;
        }).catch(console.error);
  }

  public changeMontoSlider() {
    this.validateDto(this.montoSolicitado);
    this.changeButton();
  }

  public changeButton() {
    this.showErrorRequest = false;
    this.enableStarRequest.emit(false);
    this.calculoService.calcularCuotas(this.cuotas, this.montoSolicitado, this.descuento,
                                        this.epsPrepagada, this.aliado.idAliado)
    .subscribe(calculo => {
        this.calculoCuota = calculo;
        this.calculoCuota.montoSolicitado = this.montoSolicitado;
        this.calculoCuota.numeroCuotas = this.cuotas;
        this.enableStarRequest.emit(true);
        console.log(this.calculoCuota);
      },
      () => {
        this.enableStarRequest.emit(false);
        console.error('Error consumiendo el servicio de calcular cuotas!!');
      }
    );
  }

  public currencyInputChanged(value: any): number {
    const valor = Number(value.replace(/[$,]/g, ''));
    this.validateDto(valor);
    return valor;
  }

  public oldNumbers(event: any) {
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !Constants.PATTER_NUMBER.test(inputChar)) {
      event.preventDefault();
    }
  }

  dtoChange() {
    this.clickDto = !this.clickDto;
  }

  descuentoChange(val: any) {
    this.descuento = Number(val.srcElement.value);
    this.maxMonth = this.clickDto && this.descuentoSlide !== 0 ? true : false;

    this.changeButton();
  }

  validateDto(value: number) {
    if ( value < 3000000) {
      this.descuentoSlide = 0;
      this.descuento = 0;
      this.maxMonth = false;
    }
  }

  public get getCalculoCuota() {
    return this.calculoCuota;
  }

  public changeSanitas() {
    this.epsPrepagada = !this.epsPrepagada;
    this.cdRef.detectChanges();
    this.changeButton();
  }

  public changePrepagada() {
    this.epsSanitas = !this.epsSanitas;
    this.cdRef.detectChanges();
    this.changeButton();
  }

}
