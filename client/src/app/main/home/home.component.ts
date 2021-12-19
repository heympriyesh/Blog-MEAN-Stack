import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
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
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private sharedService: SharedService
  ) {}
  color: string = '';

  ngOnInit(): void {}

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
