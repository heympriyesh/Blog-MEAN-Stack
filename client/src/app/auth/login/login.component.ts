import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public hide: boolean = true;
  constructor(private _fb: FormBuilder) {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // this.loginForm = this._fb.group({
    //   login: [],
    // });
  }
  login() {
    console.log('Login...', this.loginForm.value);
  }
}
