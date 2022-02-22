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
import { BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/shared/data.service';
import { SharedService } from 'src/app/shared/shared.service';
import { environment } from 'src/environments/environment';
import { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public loggedIn: boolean = false;
  public drop: boolean = false;
  public routerOutlet: boolean = true;
  public profileImage: string = '';
  constructor(
    private elementRef: ElementRef,
    private rendere: Renderer2,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private sharedService: SharedService,
    private dataService: DataService
  ) {}
  alertOpt: SweetAlertOptions = {};
  color: string = '';

  ngOnInit(): void {
    this.sharedService.setRouterOutlet(this.route.url);
    this.sharedService.showNavar.subscribe((val) => {
      this.routerOutlet = val;
    });
    this.alertOpt = {
      title: 'Success!',
      text: 'Saved successfuly',
      toast: false,
      allowOutsideClick: false,
    };
    this.dataService.checkLogin();

    this.dataService.isLoggedIn.subscribe((val) => {
      // console.log('islogged behav', val);
      this.loggedIn = val;
      if (this.loggedIn) {
        this.dataService.getMe().subscribe(
          (res: any) => {
            this.sharedService.setProfileImage(res.data.image);
          },
          ({ error }) => {
            console.log('error', error);
          }
        );
      }
    });
    this.sharedService.profileImageUrl.subscribe((res) => {
      this.profileImage = res;
    });
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

  profileDrop() {
    this.drop = !this.drop;
  }

  logout() {
    this.dataService.logOut();
  }
}
