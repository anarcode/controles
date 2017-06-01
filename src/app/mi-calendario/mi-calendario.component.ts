import { Component, OnInit, Input, Output, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';
import { DiaCalendarioComponent } from './dia-calendario/dia-calendario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export interface DiaCalendario{
  Numero: Number;
  Activo: boolean;
}

@Component({
  selector: 'mi-calendario',
  templateUrl: './mi-calendario.component.html',
  styleUrls: ['./mi-calendario.component.css'],
  animations:[
    trigger('triggerSelectorMeses', [
      state('0', style({
        zIndex: -1
      })),
      state('1', style({
        zIndex: 1
      })),
      transition('0 => 1', animate('10ms ease-in')),
      transition('1 => 0', animate('350ms ease-in'))
    ]),
    trigger('triggerContenedorMeses', [
      state('0', style({
        opacity:0,
        transform: 'scale(2)',
      })),
      state('1', style({
        opacity:1,
        transform: 'scale(1)',
      })),
      transition('* => *', animate('300ms ease-in'))
    ])
  ]
})
export class MiCalendarioComponent implements OnInit {

  readonly PRIMER_DIA = 0;
  readonly PENULTIMO_DIA = 6;
  readonly TOTAL_DIAS = 7;

  readonly Meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  @Input() Ancho: number;
  @Input() Alto: number;
  @Output() FechaSeleccionada: EventEmitter<Date> = new EventEmitter<Date>();

  fechaSeleccionada: string;
  Dias: DiaCalendario[] = [];
  DiasSecundario: DiaCalendario[] = [];
  CalendarioVisible: boolean;
  diaActual: number;
  mesActual: number;
  anhoActual: number;
  ControladorMesesVisible: boolean = false;
  MostrarMesAnterior: boolean = true;

  constructor() { }

  ngOnInit() {
    let ahora = new Date();
    this.diaActual = ahora.getDate();
    this.mesActual = ahora.getMonth();
    this.anhoActual = ahora.getFullYear();

    this.Dias = this._recalcularDias(this.mesActual);
    this.DiasSecundario = this._recalcularDias(this.mesActual);
    this._establecerFecha();
  }

  private _establecerFecha(){
    this.fechaSeleccionada = `${this.diaActual}/${this.mesActual+1}/${this.anhoActual}`;
  }

  private _recalcularDias(mes: number): DiaCalendario[]{
    let fecha = new Date();
    fecha.setDate(1);
    fecha.setMonth(mes);
    fecha.setFullYear(this.anhoActual);

    let totalDias = new Date(this.anhoActual, mes + 1, 0).getDate();
    let posicion = fecha.getDay();
    if(posicion == this.PRIMER_DIA)
    {
      posicion = this.PENULTIMO_DIA;
    }
    else
    {
      posicion--;
    }
    fecha.setDate(fecha.getDate() - posicion);
    totalDias += posicion;
    while(totalDias % this.TOTAL_DIAS != 0){
      totalDias++;
    }

    let resultado = [];
    for(var i = 1; i <= totalDias; i++)
    {
        resultado[i - 1] = { 
          Numero: fecha.getDate(),
          Activo: i % this.TOTAL_DIAS != 0 && (i + 1) % this.TOTAL_DIAS != 0 && fecha.getMonth() == mes
        };
        fecha.setDate(fecha.getDate() + 1);
    }
    return resultado;
  }

  ComprobarVisibilidadCalendario(){
    this.CalendarioVisible = !this.CalendarioVisible;
  }

  MostrarControladorDeMeses(){
    this.ControladorMesesVisible = true;
  }

  SeleccionarMes(indice: number){
    this.mesActual = indice;
    this.Dias = this._recalcularDias(indice);
    this.ControladorMesesVisible = false;
  }

  DiaSeleccionado(dia: DiaCalendarioComponent){
    this.diaActual = parseInt(dia.Valor);
    this._establecerFecha();
    this.ComprobarVisibilidadCalendario();
    this.FechaSeleccionada.emit(new Date(this.anhoActual, this.mesActual, this.diaActual));
  }

  AumentarMes(){
    if(this.mesActual == 11){
      this.mesActual = 0;
      this.AumentarAño();
    }
    else {
      this.mesActual++;
    }
    this.Dias = this._recalcularDias(this.mesActual);
    this.MostrarMesAnterior = true;
    this.DiasSecundario = this._recalcularDias(this.mesActual + 1);
  }

  DisminuirMes(){
    if(this.mesActual == 0){
      this.mesActual = 11;
      this.DisminuirAño();
    }
    else{
      this.mesActual--;
    }
    this.Dias = this._recalcularDias(this.mesActual);
    this.MostrarMesAnterior = false;
  }

  AumentarAño(){
    this.anhoActual++;
  }

  DisminuirAño(){
    this.anhoActual--;
  }
}