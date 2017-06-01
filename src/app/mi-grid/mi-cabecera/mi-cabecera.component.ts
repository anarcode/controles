import { Component, OnInit, Input, Output, EventEmitter, QueryList } from '@angular/core';
import { MiCeldaCabecera } from '../mi-celda-cabecera/mi-celda-cabecera.component';

@Component({
  selector: 'mi-cabecera',
  templateUrl: './mi-cabecera.component.html',
  styleUrls: ['./mi-cabecera.component.css']
})
export class MiCabecera implements OnInit {

  @Input('Columnas') private _columnas: QueryList<any>;

  @Output() clickEnCelda: EventEmitter<EventoClickEnCeldaCabecera> = new EventEmitter<EventoClickEnCeldaCabecera>();
  
  constructor() { }

  ngOnInit() {
  }

  ClickEnCelda(celda: MiCeldaCabecera) {
    let evento = new EventoClickEnCeldaCabecera();
    evento.Cabecera = this;
    evento.Celda = celda;
    this.clickEnCelda.emit(evento);
  }
}

export class EventoClickEnCeldaCabecera {
  public Cabecera: MiCabecera;
  public Celda: MiCeldaCabecera;
}