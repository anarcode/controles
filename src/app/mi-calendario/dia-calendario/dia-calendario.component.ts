import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dia-calendario',
  templateUrl: './dia-calendario.component.html',
  styleUrls: ['./dia-calendario.component.css']
})
export class DiaCalendarioComponent implements OnInit {

  @Input() Valor: string;
  @Input() Activo: boolean;
  @Output() clickDia: EventEmitter<DiaCalendarioComponent> = new EventEmitter<DiaCalendarioComponent>();

  constructor() { }

  ngOnInit() {
  }

  SeleccionarDia(){
    if(this.Activo){
      this.clickDia.emit(this);
    }
  }
}