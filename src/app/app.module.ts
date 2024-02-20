import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule,Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImmeubleComponent } from './share/immeuble/immeuble.component';
import { MenuComponent } from './share/menu/menu.component';
import { MotoComponent } from './share/transport/moto/moto.component';
import { TransportComponent } from './share/transport/transport.component';
import { VeloComponent } from './share/transport/velo/velo.component';
import { VoitureComponent } from './share/transport/voiture/VoitureComponent';
import { CarModelComponent } from './share/transport/voiture/model/car-model/car-model.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';



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
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }



