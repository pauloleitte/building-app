import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private _service: LoginService,
    private _router: Router,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit() {
    this._service.login(this.formLogin.value).subscribe(res => {
      localStorage.setItem("TOKEN", res.token);
      localStorage.setItem("USERNAME", res.user);
      this._router.navigate(["/home"]);
    }, err => console.log(err))
  }

  ngOnDestroy() {
  }

  get f() { return this.formLogin; }

}
