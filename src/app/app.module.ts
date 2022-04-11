import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/pets/home/home.component';
import { SharedModule } from './shared/shared.module';
import { CreateComponent } from './feature/pets/create/create.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component'; 
import {MatRadioModule} from '@angular/material/radio';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { PetsModule } from './feature/pets/pets.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    MatRadioModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),//initialize all services with 1 instance
    HttpClientModule,
    AuthModule,
    PetsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
