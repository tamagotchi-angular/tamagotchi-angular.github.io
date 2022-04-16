import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MatRadioModule } from '@angular/material/radio';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { PetsModule } from './feature/pets/pets.module';
import { AuthService } from './auth.service';
import { StoreModule } from '@ngrx/store';
import { PetState, reducers } from './+store';
import { EffectsModule } from '@ngrx/effects';
import { ParamsEffects } from './+store/effects/params.effects';

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
    PetsModule,
    StoreModule.forRoot<PetState>({
      petParams: reducers.petParams,
      currentPet: reducers.currentPet
    }),
    EffectsModule.forRoot([ParamsEffects]),
    EffectsModule.forRoot([]),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (authService: AuthService) => {
        return () => authService.authenticate();
      },
      deps: [AuthService],
      multi: true
    },
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
