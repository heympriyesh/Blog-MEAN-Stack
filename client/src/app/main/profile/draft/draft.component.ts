import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { environment } from 'src/environments/environment';
import Swal, { SweetAlertOptions } from 'sweetalert2';
@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css', '../myblog/myblog.component.css'],
})
export class DraftComponent implements OnInit {
  public contentLoaded = false;
  public myBlog: any;
  public baseUrl = environment.baseUrl;
  public noDataFound: boolean = false;
  alertOpt: SweetAlertOptions = {};
  constructor(
    public sanitizer: DomSanitizer,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.blogData();
  }

  blogData() {
    this.dataService.getAllDraft().subscribe(
      (res: any) => {
        this.myBlog = res.blog;
        if (res.blog && res.blog.drafts.length === 0) {
          this.noDataFound = true;
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: 'info',
            title: 'No Draft Found',
          });
        }
        this.contentLoaded = true;
      },
      (err) => {
        this.noDataFound = true;
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: 'error',
          title: 'Something Went Wrong',
        });
      }
    );
  }

  counter(i: number) {
    return new Array(i);
  }

  editDraft(id: any) {
    this.router.navigate(['/edit-draft', id]);
  }

  deleteDraft(id: any) {
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
        this.dataService.deleteDraft(id).subscribe(
          (res) => {
            this.blogData();
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          },
          (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `Something Went Wrong..!`,
            });
          }
        );
      }
    });
    // console.log('', id);
  }
}
