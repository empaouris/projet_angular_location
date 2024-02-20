import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImmeubleComponent } from './share/immeuble/immeuble.component';
import { TransportComponent } from './share/transport/transport.component';
import { MenuComponent } from './share/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VeloComponent } from './share/transport/velo/velo.component';
import { MotoComponent } from './share/transport/moto/moto.component';
import { VoitureComponent } from './share/transport/voiture/VoitureComponent';
import { CarModelComponent } from './share/transport/voiture/model/car-model/car-model.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ImmeubleComponent,
    TransportComponent,
    MenuComponent,
    VeloComponent,
    MotoComponent,
    VoitureComponent,
    CarModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
  