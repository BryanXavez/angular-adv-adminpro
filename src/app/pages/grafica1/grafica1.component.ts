import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
public labels1: string[] = ['Donload Sales', 'In-Store Sales', 'Mail-Order Sales'];
public data1 =  [
    { data: [ 350, 450, 100 ] },
    { data: [ 50, 150, 120 ] },
    { data: [ 250, 130, 70 ] }
  ]

}
