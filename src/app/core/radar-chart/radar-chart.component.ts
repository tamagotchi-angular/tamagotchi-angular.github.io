import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartConfiguration, ChartData, ChartType, Color, } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { BehaviorSubject, mergeMap, Observable, of } from 'rxjs';
import { PetState } from 'src/app/+store';
import { load, update } from 'src/app/+store/actions/currentPet.actions';
import { IPet } from '../interfaces';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,

  };
  constructor(private store: Store<PetState>, private petService: PetService,) { }
  isLoading: boolean = false;
  currentPet!: IPet;
  charData!: number[];
  public radarChartLabels: string[] = ['Training', 'Sleeping', 'Bathing', 'Eating'];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      {
        data: this.charData,
        label: 'My First Dataset',
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      },
    ]
  };

  // feed$: Observable<number> = this.store.select(globalState => globalState.updatePetParams.eatMeter);
  // sleep$: Observable<number> = this.store.select(globalState => globalState.updatePetParams.sleepMeter);
  // bath$: Observable<number> = this.store.select(globalState => globalState.updatePetParams.bathMeter);
  // train$: Observable<number> = this.store.select(globalState => globalState.updatePetParams.trainMeter);

  public radarChartType: ChartType = 'radar';

  @ViewChild("baseChart") chart!: BaseChartDirective;

  ngOnInit(): void {
    this.petService.pet$.subscribe(pet => {
      if (pet !== null) {
        this.chart.ngOnDestroy();
        this.isLoading = true;
          this.currentPet = pet;
          const elem = [(this.currentPet.bathMeter), this.currentPet.eatMeter, this.currentPet.sleepMeter, this.currentPet.trainMeter]
          this.charData = this.charData.concat(elem)
      
      }
      // this.charData = [pet.bathMeter, pet.eatMeter, pet.sleepMeter, pet.trainMeter]
    });
  }

  reloadChart() {
    if (this.chart !== undefined) {
       this.chart.chart?.destroy();
    
       this.chart.datasets = this.radarChartData.datasets;
       this.chart.labels = this.radarChartData.labels;
  
    }
}
/*
  if(apkHistory != null) { 
    this.isLoading = true; setTimeout (() => { 
      this.loadInstallEvolution(apkHistory); 
  }, 10); } 
  */
  //this.charData = [pet.bathMeter, pet.eatMeter, pet.sleepMeter, pet.trainMeter];
  update(): void {
    this.store.dispatch(update({ pet: this.currentPet }))
  }


  // feed(): void {
  //  // this.store.dispatch(care())
  // }
  // sleep(): void { }
  // train(): void { }

}
