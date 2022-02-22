import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-readblog',
  templateUrl: './readblog.component.html',
  styleUrls: ['./readblog.component.css'],
})
export class ReadblogComponent implements OnInit {
  constructor(
    private router: Router,
    private dataService: DataService,
    public sanitizer: DomSanitizer
  ) {}
  contentLoaded = false;
  title = 'ngx-skeleton-loader-demo';
  blogDetails: any;
  baseUrl = environment.baseUrl;
  noDataFound = false;
  ngOnInit(): void {
    this.dataService
      .getBlogData()
      .pipe(delay(100))
      .subscribe(
        (res: any) => {
          this.blogDetails = res.data.data;
          if (this.blogDetails.length === 0) {
            this.noDataFound = true;
          }
          this.blogDetails.map((val: any) => {
            val.image = environment.baseUrl + '/' + val.image;
          });
          // console.log('the Blog Data response', this.blogDetails);
          this.contentLoaded = true;
        },
        (err) => {
          this.contentLoaded = true;
          this.noDataFound = true;
        }
      );
  }

  counter(i: number) {
    return new Array(i);
  }
}
