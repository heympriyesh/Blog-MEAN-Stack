import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/shared/data.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'password-change',
  templateUrl: './passwordChangeDialog.component.html',
  styleUrls: ['/dialog.css'],
})
export class PasswordChangeDialogComponent implements OnInit {
  currentPasswordHide: boolean = true;
  newPasswordHide: boolean = true;
  confirmPasswordHide: boolean = true;
  changePassword: FormGroup;
  public error: string = '';
  showError = false;
  constructor(
    public dialogRef: MatDialogRef<PasswordChangeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private dataService: DataService
  ) {
    this.changePassword = this._fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  savePassword(): void {
    // console.log('valid', this.changePassword.value);

    if (this.changePassword.valid) {
      this.dataService.updatePassword(this.changePassword.value).subscribe(
        (res: any) => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            // didOpen: (toast) => {
            //   toast.addEventListener('mouseenter', Swal.stopTimer);
            //   toast.addEventListener('mouseleave', Swal.resumeTimer);
            // },
          });
          Toast.fire({
            icon: 'success',
            title: 'Password Update successfully',
          });
          this.dialogRef.close(this.changePassword.value);
        },
        ({ error }) => {
          // console.log('the value of err', error);
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
          this.dialogRef.close(this.changePassword.value);
        }
      );
    }
  }
  get newPassword() {
    return this.changePassword.value['newPassword'];
  }

  get confirmPassword() {
    return this.changePassword.value['confirmPassword'];
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
