import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private rendere: Renderer2,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}
  color: string = '#f9f4f0';

  ngOnInit(): void {
    let header = new HttpHeaders();
    header = header.append('content-type', 'image/png');
    // fetch(environment.baseUrl + '/')
    //   .then((resp) => resp.arrayBuffer())
    //   .then((resp) => {
    //     // set the blog type to final pdf
    //     const file = new Blob([resp], { type: 'image/png' });

    //     // process to auto download it
    //     const fileURL = URL.createObjectURL(file);
    //     const link = document.createElement('a');
    //     link.href = fileURL;
    //     link.download = 'FileName' + new Date() + '.png';
    //     // link.click();
    //   });
    // this.http.get(`${environment.baseUrl}/`).subscribe((baseImage: any) => {
    //   console.log(baseImage);
    //   let resp = baseImage.image.arrayBuffer();
    //   console.log('resp', resp);
    //   const file = new Blob([baseImage.data], { type: 'image/png' });
    //   const fileURL = URL.createObjectURL(file);
    //   const link = document.createElement('a');
    //   link.href = fileURL;
    //   link.download = 'image' + new Date() + '.png';
    //   // link.click();
    //   // console.log(
    //   //   '🚀 ~ file: home.component.ts ~ line 47 ~ HomeComponent ~ .subscribe ~ fileURL',
    //   //   fileURL
    //   // );
    //   let objectURL = 'data:image/png;base64,' + baseImage.image;

    //   let thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    //   console.log(
    //     '🚀 ~ file: home.component.ts ~ line 28 ~ HomeComponent ~ this.http.get ~ thumbnail',
    //     thumbnail
    //   );
    // });
  }

  ngAfterViewInit() {
    const hamburger = this.elementRef.nativeElement.querySelector('.hamburger');
    const navMenu = this.elementRef.nativeElement.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    navMenu.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
}
