import { Component, ViewChild, HostListener, ElementRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { MatDialog } from '@angular/material';
import { SolicitudModalComponent } from '../solicitud-modal/solicitud-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild(CalculadoraComponent, {static: false}) calculadora: CalculadoraComponent;
  @ViewChild(SolicitudModalComponent, {static: false}) solicitud: SolicitudModalComponent;
  @ViewChild('ppal', {static: false}) ppal: ElementRef;
  public mobile: boolean;
  public startRequest = false;
  public btnRequest = false;
  public showErrorRequest = false;

  constructor(private cdRef: ChangeDetectorRef,
              public dialog: MatDialog) {
  }


  ngAfterViewInit(): void {
    this.mobile = this.ppal.nativeElement.offsetWidth < 768 ? true : false;
    this.cdRef.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.mobile = event.target.innerWidth < 768 ? true : false;
  }

  onPrint() {
    window.print();
  }

  openSolicitud() {
    if (this.btnRequest) {
      console.log(this.calculadora.getCalculoCuota);
      this.solicitud.setCalculoCuota(this.calculadora.getCalculoCuota);
      window.scroll(0, 0);
      this.startRequest = true;
    } else {
      this.showErrorRequest = true;
    }
  }
  cancelRequest() {
    console.log(this.solicitud.form);
  }

  public enableStartRequest($event: boolean) {
    this.btnRequest = $event;
  }


}
