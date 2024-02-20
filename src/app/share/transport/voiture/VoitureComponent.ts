import { Component } from '@angular/core';
import { PostServiceComponent } from '../../../service/post-service/post-service.component';
import { Car } from '../../../models/Car.model';
import { TransportComponent } from '../transport.component';


@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrl: './voiture.component.scss'
})
export class VoitureComponent {
  
  Islist?:Car[];
  newSelectedMark?:string;

  constructor(private _postService: PostServiceComponent) {
    this.changeMark("")
  }

  changeMark(newSelectedMark: string) {(
      this._postService.getAllModel(newSelectedMark).subscribe({
        next: (datas) =>  this.Islist = datas
      })
    )}
}
