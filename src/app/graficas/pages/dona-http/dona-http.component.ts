import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [ 
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others' 
  ];
  public doughnutChartData: MultiDataSet = [
    // [ 250, 130, 70, 110 ],
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

  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSociales()
          .subscribe( data => {
            //sacamos las llaves del objecto y valores de la data
            const labels = Object.keys( data );
            const datos = Object.values( data );

            this.doughnutChartLabels = labels;
            this.doughnutChartData.push( datos );
            
          })

  }

}
