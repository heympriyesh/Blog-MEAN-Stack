import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
// import { MatDialog } from '@angular/material/dialog';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/data.service';
import { IDeactivateGuard } from 'src/app/shared/deactivate.guard';
import { environment } from 'src/environments/environment';
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
  public data: any;
  public id: string | null | undefined;
  contentLoaded = false;
  constructor(
    private activatedRouter: ActivatedRoute,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private _fb: FormBuilder,
    public dialog: MatDialog,
    private renderer: Renderer2,
    private dataService: DataService,
    private router: Router
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.editorForm = this._fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  publishBlog() {
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('content', this.content);
    formData.append('image', this.file);
    formData.append('description', this.description);
    if (this.editorForm.valid) {
      this.dataService.saveBlogData(formData).subscribe((res: any) => {
        // console.log('res value saved', res);
        this.resetBlog();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your Blog Published SuccessFully',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/read', res.post._id]);
      });
    }
    // console.log(this.editorForm.value);
  }

  resetBlog() {
    this.editorForm.reset();
    this.file = undefined;
    this.imageSrc = undefined;
  }

  saveAsDraft() {
    // console.log('for', this.editorForm.controls);
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('content', this.content);
    formData.append('image', this.file);
    formData.append('description', this.description);
    if (this.editorForm.valid) {
      this.dataService.saveAsDraft(formData).subscribe((res: any) => {
        this.resetBlog();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Saved in Draft  SuccessFully',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/profile/draft']);
      });
    }
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
      // console.log('The dialog was closed');
    });
  }

  handleInputFile(files: FileList) {
    // console.log('file..');
  }

  uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.file = fileList[0];
      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = reader.result);
      reader.readAsDataURL(this.file);
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
        // console.log('isConfirmed...!');
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
    if (this.title !== null || this.description !== null) {
      if (
        this.title.length > 0 ||
        this.description.length > 0 ||
        this.content.length > 0
      ) {
        if (
          confirm(
            'Are you sure you want to leave? All the Changes will be discarded'
          )
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
    return true;
  }
}
