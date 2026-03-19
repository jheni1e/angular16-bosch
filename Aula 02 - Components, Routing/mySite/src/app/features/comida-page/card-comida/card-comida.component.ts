import { Component } from '@angular/core';
import { IComida } from 'src/app/mocks/Comida.mock';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-comida',
  templateUrl: './card-comida.component.html',
  styleUrls: ['./card-comida.component.css']
})
export class CardComidaComponent {
  @Input()
  comidas: IComida[] = []
}
