import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportComponent } from './share/transport/transport.component';
import { ImmeubleComponent } from './share/immeuble/immeuble.component';
import { VeloComponent } from './share/transport/velo/velo.component';
import { MotoComponent } from './share/transport/moto/moto.component';
import { VoitureComponent } from './share/transport/voiture/VoitureComponent';


const routes: Routes = [
  {path: 'immeuble' , component: ImmeubleComponent},
  {path: 'transport' , component:TransportComponent, children : [
    { path : "velo", component : VeloComponent},
    { path : "moto", component : MotoComponent},
    { path : "voiture", component : VoitureComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
