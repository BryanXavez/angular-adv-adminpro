import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  @Input('valor') progreso:number = 40;

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();


  cambiarvalor( valor: number){

    if (this.progreso >= 100 && valor  >= 0){
       this.progreso = 100;
       this.valorSalida.emit(100);
       return;
    }

    if (this.progreso <= 0 && valor  < 0){
      this.valorSalida.emit(0);
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }
}
