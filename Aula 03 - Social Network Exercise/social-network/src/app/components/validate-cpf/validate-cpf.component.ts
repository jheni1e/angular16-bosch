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
  @Output()
  validChange: EventEmitter<boolean> = new EventEmitter();

  changed(e: Event) {
    this.cpfValue = (e.target as HTMLInputElement).value;
    const isValid = this.validateCpf(this.cpfValue, false);
    this.dataChange.emit(this.cpfValue);
    this.validChange.emit(isValid);
  }

  submit() {
    const isValid = this.validateCpf(this.cpfValue);
    this.dataChange.emit(this.cpfValue);
    this.validChange.emit(isValid);
  }

  validateCpf(cpf: string, showAlert: boolean = true): boolean {
    if (!cpf) return false;

    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11) {
      if (showAlert) alert('CPF inválido');
      return false;
    }

    if (/^(\d)\1+$/.test(cpf)) {
      if (showAlert) alert('CPF inválido');
      return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;

    if (resto !== parseInt(cpf.charAt(9))) {
      if (showAlert) alert('CPF inválido');
      return false;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;

    if (resto !== parseInt(cpf.charAt(10))) {
      if (showAlert) alert('CPF inválido');
      return false;
    }

    if (showAlert) alert('CPF válido!');
    return true;
  }
}
