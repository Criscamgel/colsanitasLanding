import { Injectable } from '@angular/core';
import { Cuota } from '../models/cuota';
import { promise } from 'protractor';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class CuotasService {
  private cuotas: Cuota[] = [{idCuota: 6, meses: '06', isDisable: false},
                             {idCuota: 12, meses: '12', isDisable: false},
                             {idCuota: 18, meses: '18', isDisable: false},
                             {idCuota: 24, meses: '24', isDisable: true},
                             {idCuota: 36, meses: '36', isDisable: true},
                            ];
  constructor() { }

  public getCuotas = (): Promise<Cuota[]> => {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve, reject) => {
      resolve(this.cuotas);
      reject('No se pudo cargar las cuotas');
    });
  }
}
