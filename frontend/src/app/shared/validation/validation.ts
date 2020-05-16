import { AbstractControl } from '../../../../node_modules/@angular/forms';

export class Validacoes {
 
  static samesPassword(controle: AbstractControl) {
    let password = controle.get('password').value;
    let passwordConfirm = controle.get('passwordConfirm').value;

    if (password === passwordConfirm) return null;

    controle.get('passwordConfirm').setErrors({ notSamePassword: true });
  }
}