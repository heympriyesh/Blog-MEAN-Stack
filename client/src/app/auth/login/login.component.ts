import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public hide: boolean = true;
  baseUrl = environment.baseUrl;
  constructor(
    private _fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  login() {
    console.log('Login...', this.loginForm.value);
    if (this.loginForm.valid) {
      this.http
        .post(`${this.baseUrl}/auth/login`, this.loginForm.value)
        .subscribe(
          (res: any) => {
            console.log('res...', res);
            localStorage.setItem('token', res.token);
            this.router.navigate(['/creators']);
          },
          (err) => {
            console.log('err.message', err.message);
          }
        );
    }
  }
}
