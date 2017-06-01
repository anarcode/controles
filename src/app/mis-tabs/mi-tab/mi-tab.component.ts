import { Component, OnInit, Input, trigger, state, style, transition, animate, group, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'mi-tab',
  templateUrl: './mi-tab.component.html',
  styleUrls: ['./mi-tab.component.css'],
  animations:[
    trigger('VisibilidadTab', [
      state('0', style({
        opacity: 0
      })),
      state('1', style({
        opacity: 1
      })),
      transition('* => *', animate('200ms ease-in'))
      // transition('0 => 1', 
      //   group([
      //     animate('0ms 200ms ease', style({ height: '*' })),
      //     animate('200ms 200ms ease-in', style({ opacity: 1 }))
      //   ])
      // ),
      // transition('1 => 0', 
      //   group([
      //     animate('0ms 200ms ease', style({ display: 'none' })),
      //     animate('200ms ease-in', style({ opacity: 0 }))
      //   ])
      // )

        //animate('0ms 200 ease-in'))
      //transition('1 => 0', animate('0ms ease-in'))
      //transition('0 => 1', [animate(200, style({ display: 'block' })), animate('200ms 200 ease-in')]),
      //transition('1 => 0', [animate(200, style({ opacity: 0 })), animate('0ms 200 ease-in')])
    ])
  ]
})
export class MiTabComponent implements OnInit {

  @Input('titulo') Titulo: string;
  public _seleccionada: boolean;
  @ViewChild('contenido') contenido: ElementRef;
  private _alto: number;

  public get Alto(): number{
    return this._alto;
  }

  constructor() { }

  ngOnInit() {
    let paddingPadre = parseInt(this.contenido.nativeElement.parentElement.parentElement.style.padding) || 0;
    this._alto = this.contenido.nativeElement.offsetHeight + paddingPadre * 2;
  }

  Seleccionar(){
    this._seleccionada = true;
  }

  Deseleccionar(){
    this._seleccionada = false;
  }
}

//La transicion del alto se la tengo que hacer al contenedor