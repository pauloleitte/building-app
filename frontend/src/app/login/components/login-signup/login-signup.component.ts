import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  formSigunp: FormGroup;

  constructor(
    private _service: LoginService,
    private _router: Router,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formSigunp = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit() {
    this._service.signup(this.formSigunp.value).subscribe(res => {
      this.formSigunp.reset();
      this._router.navigate(["/"]);
    }, err => console.log(err))
  }

  get f() { return this.formSigunp; }

}
