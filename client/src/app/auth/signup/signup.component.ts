import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  public hide: boolean = true;

  constructor(private _fb: FormBuilder) {
    this.signUpForm = this._fb.group({
      name: [],
      email: [],
      password: [],
      confirmPassword: [],
    });
  }

  ngOnInit(): void {}
}
