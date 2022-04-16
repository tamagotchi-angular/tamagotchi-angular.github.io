import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './auth.interceptor';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { PetService } from './pet.service';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { ErrorHandlerInterceptor } from './error-handler.interceptor';
import { MessageBusService } from './message-bus.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RadarChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgChartsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RadarChartComponent
  ],
  providers: []
})

export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        PetService,
        MessageBusService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorHandlerInterceptor,
          multi: true
        }
      ]
    }
  }
}
