import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css', '../login/login.component.css'],
})
export class ResetpasswordComponent implements OnInit {
  public resetEmail: any;
  constructor() {}
  ngOnInit(): void {}
  reset() {
    console.log('resetEmail', this.resetEmail);
  }
}
