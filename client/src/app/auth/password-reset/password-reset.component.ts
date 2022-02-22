import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { ResetPasswordDialComponent } from 'src/app/main/dialog';
@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
})
export class PasswordResetComponent implements OnInit {
  newPasswordHide: boolean = true;
  confirmPasswordHide: boolean = true;
  token: any;
  constructor(
    private _fb: FormBuilder,
    private dialog: MatDialog,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  savePassword(): void {
    // this.dialogRef.close(this.changePassword.value);
  }

  ngOnInit(): void {
    this.token = this.activatedRouter.snapshot.paramMap.get('token');
    this.activatedRouter.paramMap.subscribe((params: any) => {
      this.token = params.get('token');
    });
    let dialogRef = this.dialog.open(ResetPasswordDialComponent, {
      width: '50%',
      height: 'auto',
      backdropClass: 'bgClass',
      data: { token: this.token },
    });
    dialogRef.afterClosed().subscribe((result) => {
      // console.log('closed password dialog', result);
      if (result) {
        this.router.navigate(['/auth/login']);
      } else {
        this.router.navigate(['/creators']);
      }
    });
  }
}
