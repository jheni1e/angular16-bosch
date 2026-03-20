import { Component } from '@angular/core';
import { IMercado } from 'src/app/mocks/Mercado.mock';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-mercado',
  templateUrl: './card-mercado.component.html',
  styleUrls: ['./card-mercado.component.css']
})
export class CardMercadoComponent {
  @Input()
  mercados: IMercado[] = []

  @Input()
  abriu: boolean = false;

  itemSelecionado!: IMercado;

  abrirModal(m: IMercado) {
    this.itemSelecionado = m;
    this.abriu = true;
  }
}
