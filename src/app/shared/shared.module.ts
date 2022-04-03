import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SVGEggComponent } from './egg/egg.component';



@NgModule({
  declarations: [
    SVGEggComponent,
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    SVGEggComponent
  ]
})
export class SharedModule { }
