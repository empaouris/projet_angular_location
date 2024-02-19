import { Component, Input } from '@angular/core';
import { Car } from '../../../../../models/Car.model';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrl: './car-model.component.scss'
})


export class CarModelComponent {
  @Input() tablist?: Car[];
  }
