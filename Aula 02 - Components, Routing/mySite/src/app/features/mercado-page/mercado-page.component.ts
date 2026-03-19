import { Component } from '@angular/core';
import MockMercados, { IMercado } from 'src/app/mocks/Mercado.mock';

@Component({
  selector: 'app-mercado-page',
  templateUrl: './mercado-page.component.html',
  styleUrls: ['./mercado-page.component.css']
})
export class MercadoPageComponent {
  protected mercados: IMercado[] = []

  constructor() {
    this.mercados = MockMercados;
  }
}
