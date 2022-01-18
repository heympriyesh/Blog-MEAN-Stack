import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  baseUrl = environment.baseUrl;
  public navColor = new BehaviorSubject<string>('');
  public showNavar = new BehaviorSubject<boolean>(true);
  public profileUrl = new Subject();
  public loading = new BehaviorSubject<boolean>(false);
  public profileImageUrl = new BehaviorSubject<string>('');

  constructor() {}

  public setNavColor() {
    this.navColor.next('#f9f4f0');
  }

  public resetNavColor() {
    this.navColor.next('');
  }

  public setRouterOutlet(data: string) {
    if (data.startsWith('/profile')) {
      this.showNavar.next(false);
    } else {
      this.showNavar.next(true);
    }
  }

  public setProfileImage(imageUrl: string) {
    if (imageUrl) {
      imageUrl = this.baseUrl + '/' + imageUrl;
      this.profileImageUrl.next(imageUrl);
    } else {
      this.profileImageUrl.next('');
    }
  }
}
