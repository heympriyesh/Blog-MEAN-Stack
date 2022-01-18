import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { SharedService } from 'src/app/shared/shared.service';
import { environment } from 'src/environments/environment';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public hide: boolean = true;
  baseUrl = environment.baseUrl;
  alertOpt: SweetAlertOptions = {};

  constructor(
    private _fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private dataService: DataService,
    private sharedService: SharedService
  ) {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      this.http
        .post(`${this.baseUrl}/auth/login`, this.loginForm.value)
        .subscribe(
          (res: any) => {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
            Toast.fire({
              icon: 'success',
              title: 'Signed in successfully',
            });
            if (res.token) {
              this.dataService.setLogIn();
            }
            this.sharedService.setProfileImage(res.imageUrl);
            localStorage.setItem('token', res.token);
            this.router.navigate(['/creators']);
          },
          ({ error }) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.message} Please try again!!`,
            });
          }
        );
    }
  }
}
