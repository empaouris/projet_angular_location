import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transport',
 templateUrl: './transport.component.html',
  styleUrl: './transport.component.scss',
 
})
export class TransportComponent {

  constructor(private router: Router) {}

  goTocar() {
    this.router.navigate(['/voiture']);
  }

}
