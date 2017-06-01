import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'mi-color-picker',
  templateUrl: './mi-color-picker.component.html',
  styleUrls: ['./mi-color-picker.component.css']
})
export class MiColorPickerComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') _canvasRef: ElementRef;
  private _canvasVisible: boolean = false;
  @Input() Ancho: number;
  @Input() Alto: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    let ctx: CanvasRenderingContext2D = this._canvasRef.nativeElement.getContext('2d');
    let xInicioBarra = 3 * this.Ancho / 100,
        yInicioBarra = 5 * this.Alto / 100,
        anchoBarra = 15;
    
    let r = 0, g = 0, b = 0;
    ctx.lineWidth = 2;
    for(r = 0; r < 255; r++)
    {
      let hex = r.toString(16);
      let color = hex.length == 1 ? '0' + hex : hex;
      ctx.beginPath();
      ctx.strokeStyle = '#' + color + '0000';
      ctx.moveTo(xInicioBarra, yInicioBarra + r);
      ctx.lineTo(xInicioBarra + anchoBarra, yInicioBarra + r);
      ctx.stroke();
    }
  }

  MostrarCanvas(){
    this._canvasVisible = true;
  }

  CambiarVisibilidad(){
    this._canvasVisible = !this._canvasVisible;
  }

  ClickEnCanvas(evento: MouseEvent){
    let ctx: CanvasRenderingContext2D = this._canvasRef.nativeElement.getContext('2d');
    let xInicioBarra = 3 * this.Ancho / 100,
        yInicioBarra = 5 * this.Alto / 100,
        anchoBarra = 15,
        xInicioCuadro = 10 * this.Ancho / 100,
        yInicioCuadro = yInicioBarra;

    let x = evento.layerX, y = evento.layerY;
    console.log(`{x: ${x}, y: ${y}}`);
    if(x >= xInicioBarra && x <= xInicioBarra + anchoBarra && y >= yInicioBarra && y <= yInicioBarra + 255)
    {
      let rhex = (y - yInicioBarra).toString(16),
          strRHex = rhex.length == 1 ? '0' + rhex : rhex;

      console.log(`Seleccionado color de barra: ${y - yInicioBarra}`);
      for(let g = 0; g <= 255; g++)
      {
        let ghex = g.toString(16),
            strGHex = ghex.length == 1 ? '0' + ghex : ghex;
        for(let b = 0; b <= 255; b++)
        {
          let bhex = b.toString(16),
            strBHex = bhex.length == 1 ? '0' + bhex : bhex;

          ctx.beginPath();
          ctx.fillStyle = '#' + strRHex + strGHex + strBHex;
          ctx.fillRect(xInicioCuadro + g, yInicioCuadro + b, 1, 1);
          ctx.stroke();
        }
      }
    }
  }
}