import { Component, OnInit, Input, QueryList, Output, EventEmitter } from '@angular/core';
import { MiCeldaFila } from '../mi-celda-fila/mi-celda-fila.component';
import { MiColumna } from '../mi-columna/mi-columna.component';

@Component({
  selector: 'mi-fila',
  templateUrl: './mi-fila.component.html',
  styleUrls: ['./mi-fila.component.css']
})
export class MiFila implements OnInit {

  @Input('Columnas') public Columnas: QueryList<MiColumna>;
  @Input('Datos') public Datos: any;

  @Output() clickCelda: EventEmitter<EventoClickEnCelda> = new  EventEmitter<EventoClickEnCelda>();

  constructor() { }

  ngOnInit() {
  }

  ClickEnCelda(celda: MiCeldaFila){
    let evento = new EventoClickEnCelda();
    evento.Fila = this;
    evento.Celda = celda;
    this.clickCelda.emit(evento)
  }
}

export class EventoClickEnCelda {
  public Fila: MiFila;
  public Celda: MiCeldaFila;
}