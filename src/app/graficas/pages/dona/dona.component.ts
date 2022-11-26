import { Component,  } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  public doughnutChartLabels: Label[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others' ];
  public doughnutChartData: MultiDataSet = [
    // [ 350, 450, 100 ],
    // [ 50, 150, 120 ],
    [ 250, 130, 70, 110 ],
  ];

 public doughnutChartType: ChartType = 'doughnut'; 

 public colores: Color [] = [
   {
     backgroundColor: [
       '#2AE8E5',
       '#B468EB',
       '#E39E29',
       '#E86E2A',
       '#CDE807',
     ]
   }
 ]
}

  


