import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal, { SweetAlertOptions } from 'sweetalert2';

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
  constructor(
    private _fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.signUpForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  signup() {
    // console.log('this.signUpForm', this.signUpForm.value);
    if (this.signUpForm.valid) {
      this.http
        .post(`${this.baseUrl}/auth/signup`, this.signUpForm.value)
        .subscribe(
          (res: any) => {
            this.router.navigate(['/auth/login']);
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
            Toast.fire({
              icon: 'success',
              title: 'Sigup successfully',
            });
            // console.log('res...', res);
            localStorage.setItem('token', res.token);
          },
          ({ error }) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.message} Please try again!!`,
            });
            // console.log('err.message', error.message);
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
