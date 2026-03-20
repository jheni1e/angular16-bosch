import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  @Output()
  dataChange: EventEmitter<string> = new EventEmitter();

  cpf: string = "";
  cpfValido: boolean = false;
  senha: string = "";

  cpfChanged = (e: string) => {
    this.cpf = e;
  }

  changed(e: Event) {
    this.senha = (e.target as HTMLInputElement).value;
  }

  submit() {
    if (!this.cpfValido) {
      alert('CPF inválido. Não é possível criar conta.');
      return;
    }

    if (!this.senha) {
      alert('Digite uma senha.');
      return;
    }

    console.log("Conta criada com sucesso!");
    console.log("CPF: " + this.cpf + " Senha: " + this.senha);
  }
}
