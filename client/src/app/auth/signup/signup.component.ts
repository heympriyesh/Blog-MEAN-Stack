import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../login/login.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  baseUrl = environment.baseUrl;
  public hidePassword: boolean = true;
  public hideConfirmPassword: boolean = true;
  constructor(private _fb: FormBuilder, private http: HttpClient) {
    this.signUpForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  signup() {
    console.log('this.signUpForm', this.signUpForm.value);
    if (this.signUpForm.valid) {
      this.http
        .post(`${this.baseUrl}/auth/signup`, this.signUpForm.value)
        .subscribe(
          (res: any) => {
            console.log('res...', res);
            localStorage.setItem('token', res.token);
          },
          (err) => {
            console.log('err.message', err.message);
          }
        );
    }
  }

  get name() {
    return this.signUpForm.controls['name'];
  }

  get email() {
    return this.signUpForm.controls['email'];
  }
}
