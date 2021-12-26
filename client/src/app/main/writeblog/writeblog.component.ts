import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
// import { MatDialog } from '@angular/material/dialog';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/data.service';
import { IDeactivateGuard } from 'src/app/shared/deactivate.guard';
import Swal from 'sweetalert2';
import { DialogComponent } from '../dialog';

@Component({
  selector: 'app-writeblog',
  templateUrl: './writeblog.component.html',
  styleUrls: ['./writeblog.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class WriteblogComponent implements OnInit, IDeactivateGuard {
  public htmlContent: any = '';
  public editorValue: any = '';
  editorForm: FormGroup;
  public imageSrc: any;
  public file: any;
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private _fb: FormBuilder,
    public dialog: MatDialog,
    private renderer: Renderer2,
    private dataService: DataService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.editorForm = this._fb.group({
      title: ['', [Validators.required]],
      description: ['', Validators.required],
      content: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  saveEditor() {
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('content', this.content);
    formData.append('image', this.file);
    formData.append('description', this.description);
    if (this.editorForm.valid) {
      this.dataService.saveBlogData(formData).subscribe((res) => {
        console.log('res value saved', res);
      });
    }
    // if (this.editorForm.valid) {
    //   console.log('the value of formData', formData);
    // }
    console.log(this.editorForm.value);
  }

  get title() {
    return this.editorForm.value['title'];
  }

  get content() {
    return this.editorForm.value['content'];
  }

  get description() {
    return this.editorForm.value['description'];
  }

  open(content: any) {
    this.modalService.open(content);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '100%',
      height: 'auto',
      data: {
        title: this.title,
        content: this.content,
        thumbnailImage: this.imageSrc,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  handleInputFile(files: FileList) {
    console.log('file..');
  }

  uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.file = fileList[0];
      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = reader.result);
      reader.readAsDataURL(this.file);

      // this.renderer.setStyle(Elemen)
      console.log('FileUpload -> files', fileList);
    }
  }
  fireEvent() {
    let fire = false;
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('isConfirmed...!');
        // Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        fire = true;
        return fire;
      } else {
        fire = false;
        return false;
      }
    });
    return fire;
  }

  canExit() {
    if (this.editorForm.dirty) {
      if (confirm('Are you sure you want to leave')) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}
