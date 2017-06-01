import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MiGrid } from './mi-grid/mi-grid.component';
import { MiColumna } from './mi-grid/mi-columna/mi-columna.component';
import { MiCabecera } from './mi-grid/mi-cabecera/mi-cabecera.component';
import { MiCeldaCabecera } from './mi-grid/mi-celda-cabecera/mi-celda-cabecera.component';
import { MiFila } from './mi-grid/mi-fila/mi-fila.component';
import { MiCeldaFila } from './mi-grid/mi-celda-fila/mi-celda-fila.component';
import { IServicioDatosDeGrid, ServicioDatosDeGrid } from './servicios/servicio-datos-de-grid.service';
import { MiCalendarioComponent } from './mi-calendario/mi-calendario.component';
import { DiaCalendarioComponent } from './mi-calendario/dia-calendario/dia-calendario.component';
import { MiAcordeonComponent } from './mi-acordeon/mi-acordeon.component';
import { CapaAcordeonComponent } from './mi-acordeon/capa-acordeon/capa-acordeon.component';
import { MisTabsComponent } from './mis-tabs/mis-tabs.component';
import { MiTabComponent } from './mis-tabs/mi-tab/mi-tab.component';
import { MiColorPickerComponent } from './mi-color-picker/mi-color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    MiGrid,
    MiColumna,
    MiCabecera,
    MiCeldaCabecera,
    MiFila,
    MiCeldaFila,
    MiCalendarioComponent,
    DiaCalendarioComponent,
    MiAcordeonComponent,
    CapaAcordeonComponent,
    MisTabsComponent,
    MiTabComponent,
    MiColorPickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [{ provide: IServicioDatosDeGrid, useClass: ServicioDatosDeGrid }],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA] 
})
export class AppModule { }