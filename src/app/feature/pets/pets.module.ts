import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { PetsCatalogComponent } from './pets-catalog/pets-catalog.component';
import { PetsRoutingModule } from './pets-routing.module';


@NgModule({
  declarations: [ 
    HomeComponent,
    CreateComponent,
    PetsCatalogComponent,
  ],
  imports: [
    CommonModule, 
    SharedModule,
    FormsModule,
    MatRadioModule,
    PetsRoutingModule
  ],
  exports: [

  ]
})
export class PetsModule { }
