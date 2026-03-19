import { Component } from '@angular/core';
import MockPessoas, { IPessoa } from '../../mocks/Pessoas.mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})
export class ComidaPageComponent {
  protected pessoas: IPessoa[] = []

  constructor() {
    this.pessoas = MockPessoas;
  }
}
