import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'reset-password',
  templateUrl: './resetPasswordDialog.component.html',
  styleUrls: ['/dialog.css'],
})
export class ResetPasswordDialComponent implements OnInit {
  currentPasswordHide: boolean = true;
  newPasswordHide: boolean = true;
  confirmPasswordHide: boolean = true;
  changePassword: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ResetPasswordDialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {
    dialogRef.disableClose = true;

    this.changePassword = this._fb.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // console.log('the value of data', this.data);
    // throw new Error('Method not implemented.');
  }

  savePassword(): void {
    if (this.changePassword.valid) {
      this.dataService
        .resetPassword(this.changePassword.value, this.data.token)
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
              title: 'Password Update successfully',
            });
            this.dialogRef.close(true);
          },
          ({ error }) => {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
            Toast.fire({
              icon: 'error',
              title: `${error.message}`,
            });
          }
        );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Invalid Form`,
      });
    }
  }

  closeModal() {
    this.dialogRef.close(false);
    // console.log('clicked');
  }
}
