import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPerson } from 'src/app/mocks/Person.mock';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  item!: IPerson;

  @Output()
  dataChange: EventEmitter<boolean> = new EventEmitter(); // emitter para mandar pro componente pai o "abriu" booleano

  changed = (e: any) => {
    this.dataChange.emit(e); // emite a mudança booleana
  }
}
