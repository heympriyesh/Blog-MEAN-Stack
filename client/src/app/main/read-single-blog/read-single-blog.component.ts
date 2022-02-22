import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-read-single-blog',
  templateUrl: './read-single-blog.component.html',
  styleUrls: ['./read-single-blog.component.css'],
})
export class ReadSingleBlogComponent implements OnInit {
  public data: any;
  public id: string | null | undefined;
  contentLoaded = false;
  constructor(
    private activatedRouter: ActivatedRoute,
    private dataService: DataService,
    public sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.activatedRouter.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
      // console.log('id...', this.id);
    });
    this.dataService.getSingleBlog(this.id).subscribe((res: any) => {
      // console.log('res data..', res);
      this.data = res.data;
      let imagename = this.data.image;
      this.data.image = environment.baseUrl + '/' + imagename;
      this.contentLoaded = true;
      // console.log('the value of data', this.data);
    });
  }
}
