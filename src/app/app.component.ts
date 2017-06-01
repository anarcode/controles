import { Component, OnInit, ViewChild } from '@angular/core';
import { MiGrid } from './mi-grid/mi-grid.component';
import { MiColumna } from './mi-grid/mi-columna/mi-columna.component';
import { IServicioDatosDeGrid } from './servicios/servicio-datos-de-grid.service';
import { MiCalendarioComponent } from './mi-calendario/mi-calendario.component';
import { MiAcordeonComponent } from './mi-acordeon/mi-acordeon.component';
import { MiAlertComponent } from './mi-alert/mi-alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  @ViewChild('alert') _alert: MiAlertComponent;
  title = 'app works!';

  constructor(private _servicio: IServicioDatosDeGrid) {
  }

  ngOnInit() {
  }

  FechaSeleccionada(fecha: Date){
    console.log(fecha);
  }

  MostrarAlert(){
    this._alert.Visible = true;
  }
}