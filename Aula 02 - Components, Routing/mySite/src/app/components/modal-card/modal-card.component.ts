import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComida } from 'src/app/mocks/Comida.mock';
import { IMercado } from 'src/app/mocks/Mercado.mock';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.css']
})
export class ModalCardComponent {
  @Input()
  show: boolean = false;

  @Input()
  item!: IComida | IMercado;

  @Output()
  dataChange: EventEmitter<boolean> = new EventEmitter();

  changed = (e: any) => {
    this.dataChange.emit(e);
  }
}
