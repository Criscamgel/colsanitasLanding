import { Component, ViewChild, HostListener, ElementRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(CalculadoraComponent, {static: false}) calculadora: CalculadoraComponent;
  @ViewChild('ppal', {static: false}) ppal: ElementRef;
  public mobile: boolean;
  public startRequest = false;
  public showErrorRequest = false;
  public btnRequest = false;

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
      window.scroll(0, 0);
      this.startRequest = true;
      console.log(this.calculadora.calculoCuota);
    } else {
      this.showErrorRequest = true;
    }
  }

  public enableStartRequest($event: boolean) {
    this.btnRequest = $event;
  }

  public cancelRequest() {
    this.startRequest = false;
  }

}
