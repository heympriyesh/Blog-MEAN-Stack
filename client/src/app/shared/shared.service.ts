import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public navColor = new BehaviorSubject<string>('');
  public showNavar = new BehaviorSubject<boolean>(true);
  constructor() {}

  public setNavColor() {
    this.navColor.next('#f9f4f0');
  }

  public resetNavColor() {
    this.navColor.next('');
  }

  public setRouterOutlet(data: string) {
    if (data.startsWith('/dashboard')) {
      this.showNavar.next(false);
    } else {
      this.showNavar.next(true);
    }
  }
}
