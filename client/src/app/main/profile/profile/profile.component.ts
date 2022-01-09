import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  EmailChangeDialogComponent,
  PasswordChangeDialogComponent,
} from '../../dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public imageSrc: any;
  public file: any;
  profileForm: FormGroup;
  constructor(private _fb: FormBuilder, private dialog: MatDialog) {
    this.profileForm = this._fb.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      photo: ['', Validators.required],
      // file:['',Validators.required],
    });
  }
  ngOnInit(): void {}

  uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.file = fileList[0];
      this.profileForm.patchValue({
        photo: this.file,
      });
      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = reader.result);
      reader.readAsDataURL(this.file);

      // this.renderer.setStyle(Elemen)
      console.log('FileUpload -> files', fileList);
    }
  }

  saveDetails() {
    let formData = new FormData();
    formData.append('profile', this.profileForm.get('photo')?.value);
  }
  openPassworChangeDialog() {
    let dialogRef = this.dialog.open(PasswordChangeDialogComponent, {
      width: '50%',
      height: 'auto',
      backdropClass: 'bgClass',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('closed password dialog', result);
    });
  }
}
