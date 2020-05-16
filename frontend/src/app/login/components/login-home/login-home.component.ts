import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../service/login.service';

@Component({
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

  formLogin: FormGroup;
  loading = false;
  hide = true;

  constructor(
    private _service: LoginService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.formLogin = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit() {
    if(this.formLogin.valid){
      this.loading = true;
      this._service.login(this.formLogin.value).subscribe(res => {
        this.loading = false;
        localStorage.setItem("TOKEN", res.token);
        localStorage.setItem("USERNAME", res.user);
        this.openSnackBar("Login efetuado com sucesso (:", "Fechar")
        this._router.navigate(["/home"]);
      }, err => { 
        this.loading = false
        this.openSnackBar(err.error.message, "Fechar")
      })
    }
  }

  ngOnDestroy() {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      direction: "ltr"
    }); 
  }

  get f() { return this.formLogin; }

}
