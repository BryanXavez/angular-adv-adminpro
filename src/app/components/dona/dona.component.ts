import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color, Colors, Title } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

@Input() title: string = 'Sin titulo';


    // Doughnut
   @Input('labels') doughnutChartLabels:  string[]=[ 'label 1', 'label 2', 'label 3' ];
    @Input('data') doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ 350, 450, 100 ] },
        { data: [ 50, 150, 120 ] },
        { data: [ 250, 130, 70 ] }
      ]
    };
    public doughnutChartType: ChartType = 'doughnut';

}
