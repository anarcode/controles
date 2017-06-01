import { Component, OnInit, AfterViewInit, AfterContentInit, Input, ContentChildren, QueryList } from '@angular/core';
import { CapaAcordeonComponent } from './capa-acordeon/capa-acordeon.component';

@Component({
  selector: 'mi-acordeon',
  templateUrl: './mi-acordeon.component.html',
  styleUrls: ['./mi-acordeon.component.css']
})
export class MiAcordeonComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ContentChildren(CapaAcordeonComponent) _capas: QueryList<CapaAcordeonComponent>;
  private _seleccionada: CapaAcordeonComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
  }

  ngAfterViewInit() {
    // this._capas.first.Seleccionar()
    // this._seleccionada = this._capas.first;
    this._capas.forEach((item, index) => {
      item.Acordeon = this;
      if(index == 0)
      {
        item.Clase = 'primera';
      }
      else if(index == this._capas.length - 1)
      {
        item.Clase = 'ultima';
      }
      else
      {
        item.Clase = 'intermedia';
      }
    });
  }

  SeleccionarCapa(capa: CapaAcordeonComponent){
    console.log(`Seleccionada ${capa.Titulo}`);
    if(this._seleccionada != undefined)
    {
      this._seleccionada.Deseleccionar();
    }
    if(this._seleccionada == capa)
    {
      this._seleccionada.Deseleccionar();
      this._seleccionada = undefined;
    }
    else
    {
      this._seleccionada = capa;
      this._seleccionada.Seleccionar();
    }
  }
}