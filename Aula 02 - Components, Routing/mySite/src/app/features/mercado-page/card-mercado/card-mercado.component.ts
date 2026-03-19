import { Component } from '@angular/core';
import MockMercados, { IMercado } from 'src/app/mocks/Mercado.mock';

@Component({
  selector: 'app-card-mercado',
  templateUrl: './card-mercado.component.html',
  styleUrls: ['./card-mercado.component.css']
})
export class CardMercadoComponent {
  protected mercados: IMercado[] = []

  constructor() {
    this.mercados = MockMercados;
  }
}
