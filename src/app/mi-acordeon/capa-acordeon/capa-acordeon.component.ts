import { Component, OnInit, AfterViewInit, AfterContentInit, Input, Output, EventEmitter, ViewChild, trigger, state, style, transition, animate } from '@angular/core';
import { MiAcordeonComponent } from '../mi-acordeon.component';

@Component({
  selector: 'capa-acordeon',
  templateUrl: './capa-acordeon.component.html',
  styleUrls: ['./capa-acordeon.component.css'],
  animations:[
    trigger('triggerAltoCapa', [
      state('0', style({
        height: '0px'
      })),
      state('1', style({
        height: '*'
      })),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class CapaAcordeonComponent implements OnInit, AfterViewInit {

  @Input() public Titulo: string;
  public Acordeon: MiAcordeonComponent
  private _seleccionada: boolean = false;
  public Clase: string;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  private ClickEnTitulo(){
    this.Acordeon.SeleccionarCapa(this);
  }

  Seleccionar(){
    this._seleccionada = true;
  }

  Deseleccionar(){
    this._seleccionada = false;
  }
}