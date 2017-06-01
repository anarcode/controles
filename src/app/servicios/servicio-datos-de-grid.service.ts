import { Injectable, InjectionToken } from '@angular/core';
import { TipoDeOrdenación } from '../enumeradores';

@Injectable()
export class IServicioDatosDeGrid {
  ObtenerDatos() : Array<any> { return null; }
  OrdenarPorColumna(columna: string, orden: TipoDeOrdenación) : Array<any> { return null; }
}

@Injectable()
export class ServicioDatosDeGrid extends IServicioDatosDeGrid {

  private _misDatos: Array<any> = [
      { Id: '1', Nombre: 'David', Apellidos: 'Z' },
      { Id: '2', Nombre: 'Pepito', Apellidos: 'Y' },
      { Id: '3', Nombre: 'Pamplinas', Apellidos: 'X' },
    ];

  ObtenerDatos() : Array<any> {
    return this._misDatos;
  }

  OrdenarPorColumna(columna: string, orden: TipoDeOrdenación) : Array<any> {

    let funcionesDeOrdenación = {
      Ascendente:  function(a, b){
        if(a[columna] == b[columna]) {
          return 0;
        }
        else {
          return a[columna] > b[columna] ? 1 : -1;
        }
      },
      Descendente: function(a, b){
         if(a[columna] == b[columna]) {
          return 0;
        }
        else {
          return a[columna] > b[columna] ? -1 : 1;
        }
      }
    };
    let tipoDeOrdenación = TipoDeOrdenación[orden];
    let funciónDeOrdenación = funcionesDeOrdenación[tipoDeOrdenación];
    return this._misDatos.sort(funciónDeOrdenación);
  }
}