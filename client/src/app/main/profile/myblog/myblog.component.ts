import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { environment } from 'src/environments/environment';
import Swal, { SweetAlertOptions } from 'sweetalert2';
@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.css'],
})
export class MyblogComponent implements OnInit {
  public contentLoaded = false;
  public myBlog: any;
  public baseUrl = environment.baseUrl;
  constructor(
    public sanitizer: DomSanitizer,
    private dataService: DataService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.blogData();
  }

  blogData() {
    this.dataService.myBlog().subscribe((res: any) => {
      this.myBlog = res.blog;
      this.contentLoaded = true;
      console.log('res', res);
    });
  }
  counter(i: number) {
    return new Array(i);
  }
  editBlog(id: any) {
    // console.log('edit blog ', id);
    this.router.navigate(['/edit', id]);
  }
  deleteBlog(id: any) {
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
        this.dataService.deleteBlog(id).subscribe(
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
    console.log('', id);
  }
}
