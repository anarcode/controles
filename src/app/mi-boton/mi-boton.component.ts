import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mi-boton',
  templateUrl: './mi-boton.component.html',
  styleUrls: ['./mi-boton.component.css']
})
export class MiBotonComponent implements OnInit {

  @Input() Texto: string;
  @Output() click: EventEmitter<MiBotonComponent> = new EventEmitter<MiBotonComponent>();

  constructor() { }

  ngOnInit() {
  }

  ClickEnBoton(){
    this.click.emit(this);
  }
}