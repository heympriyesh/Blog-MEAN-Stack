import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css', '../login/login.component.css'],
})
export class ResetpasswordComponent implements OnInit {
  public resetEmail: any;
  constructor(private dataService: DataService) {}
  ngOnInit(): void {}

  reset() {
    let data = {
      email: this.resetEmail,
    };
    this.dataService.forgotPassword(data).subscribe(
      (res: any) => {
        Swal.fire({
          icon: 'success',
          title: 'SUCCESS',
          text: `${res.data}`,
        });
      },
      ({ error }) => {
        Swal.fire({
          icon: 'error',
          title: 'Something Went Wrong',
          text: `${error.message}`,
        });
      }
    );
    // console.log('resetEmail', data);
  }
}
