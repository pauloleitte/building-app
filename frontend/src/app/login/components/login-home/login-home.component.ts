import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

  formLogin: FormGroup;
  loading = false;

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
    this.loading = true;
    this._service.login(this.formLogin.value).subscribe(res => {
      this.loading = false;
      localStorage.setItem("TOKEN", res.token);
      localStorage.setItem("USERNAME", res.user);
      this._router.navigate(["/home"]);
    }, err => { 
      this.loading = false
      this.openSnackBar(err.error.message, "Fechar")
    })
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
