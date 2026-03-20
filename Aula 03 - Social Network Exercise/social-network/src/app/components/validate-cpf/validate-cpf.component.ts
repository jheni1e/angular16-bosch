import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-validate-cpf',
  templateUrl: './validate-cpf.component.html',
  styleUrls: ['./validate-cpf.component.css']
})
export class ValidateCpfComponent {
  @Output()
  dataChange: EventEmitter<string> = new EventEmitter();

  cpfValue: string = '';

  changed(e: Event) {
    this.cpfValue = (e.target as HTMLInputElement).value;
  }

  submit() {
    this.validateCpf(this.cpfValue);
    this.dataChange.emit(this.cpfValue);
  }

  validateCpf(cpf: string) {
    if (!cpf) return;

    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11) {
      alert('CPF inválido');
      return;
    }

    if (/^(\d)\1+$/.test(cpf)) {
      alert('CPF inválido');
      return;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;

    if (resto !== parseInt(cpf.charAt(9))) {
      alert('CPF inválido');
      return;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;

    if (resto !== parseInt(cpf.charAt(10))) {
      alert('CPF inválido');
      return;
    }

    alert('CPF válido!');
  }
}
