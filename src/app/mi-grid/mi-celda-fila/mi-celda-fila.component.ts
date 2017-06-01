import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MiColumna } from '../mi-columna/mi-columna.component';

@Component({
  selector: 'mi-celda-fila',
  templateUrl: './mi-celda-fila.component.html',
  styleUrls: ['./mi-celda-fila.component.css']
})
export class MiCeldaFila implements OnInit {

  @Input('Columna') public Columna: MiColumna;
  @Input('Valor') public Valor: any;

  @Output() clickCelda: EventEmitter<MiCeldaFila> = new  EventEmitter<MiCeldaFila>();

  constructor() { }

  ngOnInit() {
  }

  ClickEnCelda() {
    this.clickCelda.emit(this);
  }
}