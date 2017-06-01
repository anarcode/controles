import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'mi-alert',
  templateUrl: './mi-alert.component.html',
  styleUrls: ['./mi-alert.component.css']
})
export class MiAlertComponent implements OnInit {

  @Input() Visible: boolean = false;
  @Input() Texto: string;
  @ViewChild('contenedor') _contenedor: ElementRef;
  private Izquierda: number;
  private Alto: number;

  constructor() { }

  ngOnInit() {
    this.Izquierda = window.innerWidth / 2 - this._contenedor.nativeElement.offsetWidth / 2;
    this.Alto = window.innerHeight / 2 - this._contenedor.nativeElement.offsetWidth / 2;
  }
}