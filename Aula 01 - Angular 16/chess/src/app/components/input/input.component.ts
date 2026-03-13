import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Output()
  dataChange: EventEmitter<string> = new EventEmitter(); // emite dados

  @Input()
  text: string = ""; // recebe dados

  changed = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    this.dataChange.emit(value);
  }
}
