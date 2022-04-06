import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SVGEggComponent } from './egg/egg.component';
import { SVGDogComponent } from './dog/dog.component';



@NgModule({
  declarations: [
    SVGEggComponent,
    SVGDogComponent,
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    SVGEggComponent,
    SVGDogComponent
  ]
})
export class SharedModule { }
