import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { PetsCatalogComponent } from './pets-catalog/pets-catalog.component';
import { PetsRoutingModule } from './pets-routing.module';
import { PetCardComponent } from './pet-card/pet-card.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { SelectValidatorDirective } from './create/select-validator.directive';
import { CoreModule } from 'src/app/core/core.module';
import { MypetsComponent } from './mypets/mypets.component';


@NgModule({
  declarations: [ 
    HomeComponent,
    CreateComponent,
    PetsCatalogComponent,
    PetCardComponent,
    PetDetailsComponent,
    SelectValidatorDirective,
    MypetsComponent,
  ],
  imports: [
    CommonModule, 
    SharedModule,
    FormsModule,
    MatRadioModule,
    PetsRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  exports: [

  ]
})
export class PetsModule { }
