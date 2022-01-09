import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  constructor(
    public dialogRef: MatDialogRef<PasswordChangeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder
  ) {
    this.changePassword = this._fb.group({
      currenPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  savePassword(): void {
    this.dialogRef.close(this.changePassword.value);
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
