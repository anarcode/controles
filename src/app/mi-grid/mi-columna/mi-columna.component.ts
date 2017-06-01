import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mi-columna',
  templateUrl: './mi-columna.component.html',
  styleUrls: ['./mi-columna.component.css']
})
export class MiColumna implements OnInit {

  @Input('cabecera') public Cabecera: string;
  @Input('propiedad') public Propiedad: string;
  @Input('visible') public Visible: boolean = true;
  @Input('ancho') public Ancho: number;

  constructor() { }

  ngOnInit() {
  }
}