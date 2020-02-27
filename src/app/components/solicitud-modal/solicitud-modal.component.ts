import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Constants } from '../../../utils/constants';
import { ResponseCalculoCuotas } from 'src/models/ResponseCalculoCuotas';

@Component({
  selector: 'app-solicitud-modal',
  templateUrl: './solicitud-modal.component.html',
  styleUrls: ['./solicitud-modal.component.css']
})
export class SolicitudModalComponent implements OnInit {
  public form: FormGroup;
  public tipos;
  public calculoCuota: ResponseCalculoCuotas = new ResponseCalculoCuotas();

  @Input() inputCalculoCuota: ResponseCalculoCuotas;

  constructor() {
    this.initializerForm();
  }

  private initializerForm() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      tipoIdetificacion: new FormControl('', Validators.required),
      numeroIdentificacion: new FormControl('', [Validators.required,
                                                 Validators.pattern(Constants.PATTER_NUMBER)]),
      email: new FormControl('', [Validators.required,
                                  Validators.email]),
      celular: new FormControl('', [Validators.required,
                                    Validators.minLength(10),
                                    Validators.maxLength(10)]),
      fechaNacimiento: new FormGroup({
        dia: new FormControl('', Validators.required),
        mes: new FormControl('', Validators.required),
        year: new FormControl('', Validators.required)
      }),
      actividadEco: new FormControl('', Validators.required),
      ingresos: new FormControl('', [Validators.required,
                                     Validators.pattern(Constants.PATTER_NUMBER)])
    });
  }

  ngOnInit() {
    this.tipos = Constants.tiposIdentificacion;
    this.calculoCuota = this.inputCalculoCuota;
  }

  public setCalculoCuota( calculoCuota: ResponseCalculoCuotas) {
    this.calculoCuota = calculoCuota;
  }

  public markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }



}
