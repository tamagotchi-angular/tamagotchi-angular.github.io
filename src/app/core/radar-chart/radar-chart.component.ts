import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public radarChartLabels: string[] = [ 'Training', 'Sleeping', 'Bathing', 'Eating'];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [ 65, 59, 90, 81], label: 'My Pet' },
    ]
  };

  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }

}
