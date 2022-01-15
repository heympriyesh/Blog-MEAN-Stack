import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/shared/data.service';
import { environment } from 'src/environments/environment';
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
  public baseUrl = environment.baseUrl;
  constructor(
    private _fb: FormBuilder,
    private dialog: MatDialog,
    private dataServie: DataService
  ) {
    this.profileForm = this._fb.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      image: [''],
    });
  }
  ngOnInit(): void {
    this.dataServie.getMe().subscribe((res: any) => {
      this.profileForm.controls['fullname'].patchValue(res.data.name);
      this.profileForm.controls['email'].patchValue(res.data.email);
      if (res.data.image) {
        this.imageSrc = res.data.image;
      }
    });
  }

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

  get email() {
    return this.profileForm.value['email'];
  }

  get name() {
    return this.profileForm.value['fullname'];
  }

  saveDetails() {
    let formData = new FormData();

    if (this.file) {
      formData.append('name', this.name);
      formData.append('image', this.file);
      formData.append('email', this.email);
      this.dataServie.updateUserDetail(formData).subscribe((res) => {
        console.log('res', res);
      });
    } else {
      let data = {
        name: this.name,
        email: this.email,
        image: this.imageSrc,
      };
      this.dataServie.updateUserDetail(data).subscribe((res) => {
        console.log('res', res);
      });
    }
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