import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MiColumna } from '../mi-columna/mi-columna.component';
import { TipoDeOrdenación } from '../../enumeradores';

@Component({
  selector: 'mi-celda-cabecera',
  templateUrl: './mi-celda-cabecera.component.html',
  styleUrls: ['./mi-celda-cabecera.component.css']
})
export class MiCeldaCabecera implements OnInit {

  @Input('Columna') public Columna: MiColumna;
  public Orden: TipoDeOrdenación = TipoDeOrdenación.Ascendente;

  @Output() clickEnCelda: EventEmitter<MiCeldaCabecera> = new EventEmitter<MiCeldaCabecera>();

  constructor() { }

  ngOnInit() {
  }

  ClickEnCelda(){
    this.clickEnCelda.emit(this);
  }
}