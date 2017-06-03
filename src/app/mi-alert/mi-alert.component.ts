import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'mi-alert',
  templateUrl: './mi-alert.component.html',
  styleUrls: ['./mi-alert.component.css']
})
export class MiAlertComponent implements OnInit {

  @Input() Visible: boolean = false;
  @ViewChild('contenedor') _contenedor: ElementRef;
  private Izquierda: number;
  private Alto: number;
  private EsTipoSiONo: boolean;
  private NoTieneTipo: boolean;

  constructor(private _element: ElementRef) { 
    this.EsTipoSiONo = _element.nativeElement.attributes['si-no'] != undefined;
    this.NoTieneTipo = !this.EsTipoSiONo;
  }

  ngOnInit() {
    this.Izquierda = window.innerWidth / 2 - this._contenedor.nativeElement.offsetWidth / 2;
    this.Alto = window.innerHeight / 2 - this._contenedor.nativeElement.offsetWidth / 2;
  }
}