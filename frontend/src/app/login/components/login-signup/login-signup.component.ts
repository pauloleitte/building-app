import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { Validacoes } from '../../../shared/validation/validation';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  formSigunp: FormGroup;
  loading = false;
  hide = true;

  constructor(
    private _service: LoginService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.formSigunp = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      passwordConfirm: ['', [Validators.required]]
    },
    {
      validator: Validacoes.samesPassword
    }
    )
  }

  onSubmit() {
    if (this.formSigunp.valid) {
      this.loading = true;
      this._service.signup(this.formSigunp.value).subscribe(res => {
        this.formSigunp.reset();
        this._router.navigate(["/"]);
        this.openSnackBar("Usuário cadatrado com sucesso (:", "Fechar")
      }, err =>{
        this.loading = false;
        this.openSnackBar(err.error.message, "Fechar")
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      direction: "ltr"
    }); 
  }


  get f() { return this.formSigunp; }
  get name() { return this.formSigunp.get('name'); }
  get email() { return this.formSigunp.get('email'); }
  get password() { return this.formSigunp.get('password'); }
  get passwordConfirm() { return this.formSigunp.get('passwordConfirm'); }

}
