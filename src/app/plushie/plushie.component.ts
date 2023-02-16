import { Component } from '@angular/core';

@Component({
  selector: 'app-plushie',
  templateUrl: './plushie.component.html',
  styleUrls: ['./plushie.component.scss']
})
export class PlushieComponent {
  name: string = '';
  price: number = 0;

}
