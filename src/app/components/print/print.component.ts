import { Component, OnInit, Input } from '@angular/core';
import { ResponseCalculoCuotas } from '../../../models/ResponseCalculoCuotas';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
  public data: ResponseCalculoCuotas = new ResponseCalculoCuotas();
  @Input() inputData: ResponseCalculoCuotas;
  constructor() { }

  ngOnInit() {
    this.data = this.inputData;
  }

  imprimir() {
    window.print();
  }

}
