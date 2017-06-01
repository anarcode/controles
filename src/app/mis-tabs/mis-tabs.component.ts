import { Component, OnInit, AfterViewInit, ContentChildren, QueryList, trigger, state, style, transition, animate } from '@angular/core';
import { MiTabComponent } from './mi-tab/mi-tab.component';

@Component({
  selector: 'mis-tabs',
  templateUrl: './mis-tabs.component.html',
  styleUrls: ['./mis-tabs.component.css'],
  animations:[
    trigger('VisibilidadCabecera', [
      state('0', style({
        opacity: .4
      })),
      state('1', style({
        opacity:1
      })),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class MisTabsComponent implements OnInit, AfterViewInit {

  @ContentChildren(MiTabComponent) _tabs: QueryList<MiTabComponent>;
  private _tabSeleccionada: MiTabComponent;
  private Alto: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this._tabSeleccionada = this._tabs.first;
    this.Alto = this._tabSeleccionada.Alto;
    this._tabSeleccionada.Seleccionar();
  }

  ClickEnCabecera(tabSeleccionada: MiTabComponent){
    if(this._tabSeleccionada != tabSeleccionada){
      if(this._tabSeleccionada != undefined){
        this._tabSeleccionada.Deseleccionar();
      }
      this._tabSeleccionada = tabSeleccionada;
      this._tabSeleccionada.Seleccionar();
      this.Alto = this._tabSeleccionada.Alto;
    }
  }
}