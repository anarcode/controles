import { Component, OnInit, AfterViewInit, Input, ContentChildren, QueryList } from '@angular/core';
import { MiColumna } from './mi-columna/mi-columna.component';
import { MiCabecera, EventoClickEnCeldaCabecera } from './mi-cabecera/mi-cabecera.component';
import { MiFila, EventoClickEnCelda } from './mi-fila/mi-fila.component';
import { IServicioDatosDeGrid } from '../servicios/servicio-datos-de-grid.service';
import { TipoDeOrdenación } from '../enumeradores';

@Component({
  selector: 'mi-grid',
  templateUrl: './mi-grid.component.html',
  styleUrls: ['./mi-grid.component.css']
})
export class MiGrid implements OnInit, AfterViewInit {

  private _datos: Array<any>;
  @Input('ServicioDeDatos') private _servicio: IServicioDatosDeGrid;
  @ContentChildren(MiColumna) _columnas: QueryList<MiColumna>;

  constructor() {

  }

  ngOnInit() {
    this._datos = this._servicio.ObtenerDatos();
  }

  ngAfterViewInit() {
    
  }

  ClickEnCeldaCabecera(evento: EventoClickEnCeldaCabecera) {
    this._datos = this._servicio.OrdenarPorColumna(evento.Celda.Columna.Cabecera, evento.Celda.Orden);
    evento.Celda.Orden = (evento.Celda.Orden == TipoDeOrdenación.Ascendente) ? TipoDeOrdenación.Descendente : TipoDeOrdenación.Ascendente;
  }

  ClickEnCelda(evento: EventoClickEnCelda) {
    alert(evento.Celda.Valor);
  }
}