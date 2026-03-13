import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Class';
  count = 0;

  text: string = "";

  wasClicked = () => {
    this.count++; // função emitida dentro do componente filho
  }

  changed = (e: string) => {
    this.text = e;
  }
}
