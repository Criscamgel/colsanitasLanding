import { Component, ViewChild, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SolicitudModalComponent } from '../solicitud-modal/solicitud-modal.component';
import { Constants } from 'src/utils/constants';
import { ResponseCalculoCuotas } from '../../../models/ResponseCalculoCuotas';
import { Person } from '../../../models/person';

@Component({
  selector: 'app-process-request',
  templateUrl: './process-request.component.html',
  styleUrls: ['./process-request.component.css']
})
export class ProcessRequestComponent implements OnInit {
  public showvalidate = false;
  public showFinalMessage = false;
  public showSummary = false;
  public calculoCuota: ResponseCalculoCuotas;
  public flagRequest = false;
  public data: Person;

  @ViewChild(SolicitudModalComponent, {static: false}) public solicitud: SolicitudModalComponent;
  @Input()  public inputCalculoCuota: ResponseCalculoCuotas;
  @Input() public startRequest: boolean;
  @Output() public outputCancelRequest = new EventEmitter<void>();

  constructor() {
    this.data = new Person();
  }

   ngOnInit(): void {
     this.calculoCuota = this.inputCalculoCuota;
     this.flagRequest = this.startRequest;
  }

  public startProcessRequest() {
    if (this.solicitud.form.status === Constants.STATUS_VALID) {
      this.data = this.solicitud.form.value;
      this.validateRequest();
    } else {
      this.solicitud.markFormGroupTouched(this.solicitud.form);
    }
  }

  public validateRequest() {
    window.scroll(0, 0);
    this.flagRequest = false;
    this.showvalidate = true;
    setTimeout(() => {
      this.finalMessage();
    }, 2000);
  }

  public cancelRequest() {
    this.flagRequest = false;
    this.outputCancelRequest.emit();
  }

  public finalMessage() {
    this.showvalidate = false;
    this.showFinalMessage = true;
  }

  public viewSummary() {
    this.showFinalMessage = false;
    this.showSummary = true;
  }

}
