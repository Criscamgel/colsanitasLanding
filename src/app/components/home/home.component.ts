import { Component, OnInit, ViewChild, HostListener, ElementRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(CalculadoraComponent, {static: false}) calculadora: CalculadoraComponent;
  @ViewChild('ppal', {static: false}) ppal: ElementRef;
  public mobile: boolean;

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.mobile = this.ppal.nativeElement.offsetWidth < 768 ? true : false;
    console.log(this.ppal.nativeElement.offsetWidth, this.mobile);
    this.cdRef.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.mobile = event.target.innerWidth < 768 ? true : false;
  }


}
